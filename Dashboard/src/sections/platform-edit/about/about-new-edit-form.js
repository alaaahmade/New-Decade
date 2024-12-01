import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useCallback, useMemo, useEffect, useState, useReducer } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Card,
  Stack,
  Button,
  Switch,
  CardHeader,
  Typography,
  FormControlLabel,
  Chip,
  Box,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// _mock
// components
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFUpload,
  RHFTextField,
  // RHFAutocomplete,
} from 'src/components/hook-form/index';
//
import { axiosReq } from 'src/utils/axiosReq';
import { AttributeForms } from './AttributeForms';
import { Rates_Reducer, PlatformProp_Reducer } from 'src/utils/attributeReduce';
import { PropsForms } from './AttributeForms/PropsForm';

// ----------------------------------------------------------------------

export default function AboutNewEditForm({ currentAbout }) {

  const [certificatesFile, setCertificatesFile] = useState(null)
  const [changeFile, setChangeFile] = useState(false)

  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const initialRate_ar = currentAbout?.lang?.ar.rateList || []
  const initialRate_en = currentAbout?.lang?.en.rateList || []
  const initialRate_cr = currentAbout?.lang?.cr.rateList || []

  const initialProp_ar = currentAbout?.lang?.ar.propList || []
  const initialProp_en = currentAbout?.lang?.en.propList || []
  const initialProp_cr = currentAbout?.lang?.cr.propList || []

  const [Rates_ar, Rates_arDispatch] = useReducer(
    Rates_Reducer,
    initialRate_ar,
  );

  const [Rates_en, Rates_enDispatch] = useReducer(
    Rates_Reducer,
    initialRate_en,
  );

  const [Rates_cr, Rates_crDispatch] = useReducer(
    Rates_Reducer,
    initialRate_cr,
  );

  const [Props_ar, Props_arDispatch] = useReducer(
    PlatformProp_Reducer,
    initialProp_ar,
  );

  const [Props_en, Props_enDispatch] = useReducer(
    PlatformProp_Reducer,
    initialProp_en,
  );

  const [Props_cr, Props_crDispatch] = useReducer(
    PlatformProp_Reducer,
    initialProp_cr,
  );

  const NewBlogSchema = Yup.object().shape({
    titleOne_ar: Yup.string().min(4).max(100).required('العنوان مطلوب باللغة العربية'),
    titleOne_en: Yup.string().min(4).max(100).required('English title is required'),
    titleOne_cr: Yup.string().min(4).max(100).required('kurd title is required'),

    titleTow_ar: Yup.string().min(4).max(100).required('العنوان مطلوب باللغة العربية'),
    titleTow_en: Yup.string().min(4).max(100).required('English title is required'),
    titleTow_cr: Yup.string().min(4).max(100).required('kurd title is required'),

    description_ar: Yup.string().min(10).max(5000).required('الوصف مطلوب باللغة العربية'),
    description_en: Yup.string().min(10).max(5000).required('English Description is required'),
    description_cr: Yup.string().min(10).max(5000).required('kurd Description is required'),


    rateList_ar: Yup.array().min(1).max(10).required('Rate List مطلوب باللغة العربية'),
    rateList_en: Yup.array().min(1).max(10).required('English Rate List is required'),
    rateList_cr: Yup.array().min(1).max(10).required('Kurd Rate List is required'),

    propList_ar: Yup.array().min(1).max(10).required('Properties List مطلوب باللغة العربية'),
    propList_en: Yup.array().min(1).max(10).required('English Properties List is required'),
    propList_cr: Yup.array().min(1).max(10).required('Kurd Properties List is required'),

    certificatesLine: Yup.string().min(5).required('certificates Line Image is required')
  });


  const defaultValues = useMemo(
    () => ({
      titleOne_ar: currentAbout?.lang?.ar?.titleOne || '',
      titleOne_en: currentAbout?.lang?.en?.titleOne || '',
      titleOne_cr: currentAbout?.lang?.cr?.titleOne || '',

      titleTow_ar: currentAbout?.lang?.ar?.titleTow || '',
      titleTow_en: currentAbout?.lang?.en?.titleTow || '',
      titleTow_cr: currentAbout?.lang?.cr?.titleTow || '',

      description_ar: currentAbout?.lang?.ar?.desc || '',
      description_en: currentAbout?.lang?.en?.desc || '',
      description_cr: currentAbout?.lang?.cr?.desc || '',

      rateList_ar: currentAbout?.lang?.ar.rateList || [],
      rateList_en: currentAbout?.lang?.en.rateList || [],
      rateList_cr: currentAbout?.lang?.cr.rateList || [],

      propList_ar: currentAbout?.lang?.ar.propList || [],
      propList_en: currentAbout?.lang?.en.propList || [],
      propList_cr: currentAbout?.lang?.cr.propList || [],

      certificatesLine: currentAbout?.certificatesLine || ''

    }),
    [currentAbout]
  );
  

  const methods = useForm({
    resolver:  async (data, context, options) => {
      const valid =await yupResolver(NewBlogSchema)(data, context, options)
      return valid 
    },
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;
  const values = watch();

  console.log(methods.formState.errors);

  useEffect(() => {
    if (currentAbout) {
      reset(defaultValues);
    }
  }, [currentAbout, defaultValues, reset]);

  const onSubmit = handleSubmit(async () => {
      try{

        const newRates_ar = await Promise.all(values?.rateList_ar.map(async(item, index) => {
          if (typeof item.stars === 'object'){
          if(currentAbout?.lang?.ar?.rateList[index]?.stars){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentAbout?.lang?.ar?.rateList[index]?.stars
            })
          }

          const formData = new FormData()
          if (item.stars) {
        formData.append('file', item.stars)

        const uploadImage = await axiosReq.post('/uploadFile/aboutPlatform', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }});

        const {fileUrl} = uploadImage.data.data
        item.stars = fileUrl
          } 
          
        }
        return item
      }))
        const newRates_en = await Promise.all(values?.rateList_en.map(async(item, index) => {
          if (typeof item.stars === 'object'){
          if(currentAbout?.lang?.en?.rateList[index]?.stars){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentAbout?.lang?.en?.rateList[index]?.stars
            })
          }

          const formData = new FormData()
          if (item.stars) {
        formData.append('file', item.stars)

        const uploadImage = await axiosReq.post('/uploadFile/aboutPlatform', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }});

        const {fileUrl} = uploadImage.data.data
        item.stars = fileUrl
          } 
          
        }
        return item
      }))
        const newRates_cr = await Promise.all(values?.rateList_cr.map(async(item, index) => {
          if (typeof item.stars === 'object'){
          if(currentAbout?.lang?.cr?.rateList[index]?.stars){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentAbout?.lang?.cr?.rateList[index]?.stars
            })
          }

          const formData = new FormData()
          if (item.stars) {
        formData.append('file', item.stars)

        const uploadImage = await axiosReq.post('/uploadFile/aboutPlatform', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }});

        const {fileUrl} = uploadImage.data.data
        item.stars = fileUrl
          } 
          
        }
        return item
      }))
      let newLine = ''
      if(changeFile){
        if(currentAbout?.certificatesLine){
          await axiosReq.post('/deleteFile', {
            fileUrl: currentAbout.certificatesLine
          })
        }
        const formData = new FormData()
        if (values.certificatesLine) {
      formData.append('file', values.certificatesLine)

        const uploadImage = await axiosReq.post('/uploadFile/aboutPlatform', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }});

      const {fileUrl} = uploadImage.data.data
      newLine = fileUrl
        } 
        

      }
      const requestValues = {
        lang: {
          ar: {
            titleOne: values?.titleOne_ar,
            span: values?.span_ar,
            desc: values?.description_ar,
            rateList: newRates_ar,
            titleTow: values?.titleTow_ar,
            propList: values?.propList_ar
          },
          en: {
            titleOne: values?.titleOne_en,
            span: values?.span_en,
            desc: values?.description_en,
            rateList: newRates_en,
            titleTow: values?.titleTow_en,
            propList: values?.propList_en
          },
          cr: {
            titleOne: values?.titleOne_cr,
            span: values?.span_cr,
            desc: values?.description_cr,
            rateList: newRates_cr,
            titleTow: values?.titleTow_cr,
            propList: values?.propList_cr
          }
        },
        certificatesLine: newLine || currentAbout.certificatesLine
      }

      console.log(requestValues);

       await axiosReq.put('/edit/platform/about', requestValues) 
      reset();
      window.location.reload()
      toast.success("about's Updated Successfully.")
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'Something went wrong!');
      console.error(error);
    }
    });

    const handleDrop = useCallback(
      (acceptedFiles) => {
        const file = acceptedFiles[0];
        setChangeFile(true);
        const newFile = Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
  
        setCertificatesFile(file)
  
        if (file) {
          setValue('certificatesLine', newFile, { shouldValidate: true });
        }
      },
      [setValue]
    );
  
  
    const handleRemoveFile = useCallback(() => {
      setValue('certificatesLine', null);
      setCertificatesFile(null)
    }, [setValue]);


  const renderDetails = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Texts
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Title, description, buttons...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Texts" />}
          <CardHeader title="Arabic Text" />
          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField name="titleOne_ar" label="العنوان الرئيسي بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField type="text" name="description_ar" label="الوصف بالعربية" multiline rows={3} sx={{
              direction: 'rtl'
            }} />
            <CardHeader title="Rates List" />
            <Stack spacing={0} sx={{ p: 0 }}>
            <AttributeForms setAllValue={setValue} rates={Rates_ar} ratesDispatch={Rates_arDispatch} listName={'rateList_ar'} />
            </Stack>

            <RHFTextField name="titleTow_ar" label="العنوان الفرعي بالعربية" sx={{
              direction: 'rtl'
            }} />

            <CardHeader title="Properties List" />
            <Stack spacing={0} sx={{ p: 0 }}>
            <PropsForms setAllValue={setValue} props={Props_ar} propsDispatch={Props_arDispatch} listName={'propList_ar'} />
            </Stack>

            <CardHeader title="English Text" />

            <RHFTextField name="titleOne_en" label="english Main Title" />

            <RHFTextField type="text" name="description_en" label="english Description" multiline rows={3}/>

            <Stack spacing={0} sx={{ p: 0 }}>
            <AttributeForms setAllValue={setValue} rates={Rates_en} ratesDispatch={Rates_enDispatch} listName={'rateList_en'} />
            </Stack>

            <RHFTextField name="titleTow_en" label="english Sub Title" />

            <CardHeader title="Properties List" />
            <Stack spacing={0} sx={{ p: 0 }}>
            <PropsForms setAllValue={setValue} props={Props_en} propsDispatch={Props_enDispatch} listName={'propList_en'} />
            </Stack>

            <CardHeader title="Kurd Text" />

            <RHFTextField name="titleOne_cr" label="kurd Title" />

            <RHFTextField type="text" name="description_cr" label="kurd First description" multiline rows={3}/>

            <Stack spacing={0} sx={{ p: 0 }}>
            <AttributeForms setAllValue={setValue} rates={Rates_cr} ratesDispatch={Rates_crDispatch} listName={'rateList_cr'} />
            </Stack>

            <RHFTextField name="titleTow_cr" label="Kurd Sub Title" />

            <CardHeader title="Properties List" />
            <Stack spacing={0} sx={{ p: 0 }}>
            <PropsForms setAllValue={setValue} props={Props_cr} propsDispatch={Props_crDispatch} listName={'propList_cr'} />
            </Stack>

            <Stack spacing={1.5}>
      <CardHeader title="Certificates Line Image" />

        <Typography variant="subtitle2">Certificates Image</Typography>
        <RHFUpload
          name="certificatesLine"
          maxSize={3145728}
          onDrop={handleDrop}
          onDelete={handleRemoveFile}
          file={values.certificatesLine || certificatesFile}

        />

      </Stack>

          </Stack>
        </Card>
      </Grid>
    </>
  );


  const renderActions = (
    <>
      {mdUp && <Grid md={4} />}
      <Grid xs={12} md={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button color="inherit" variant="outlined" size="large"
          onClick={() => router.push(paths.dashboard.root)}
          >
        cancel
        </Button>
        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          loading={isSubmitting}
          sx={{ ml: 2}}
          onClick={onSubmit}
        >
          Save About
        </LoadingButton>
        
      </Grid>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}
        {renderActions}
      </Grid>
      
    </FormProvider>
  );
}

AboutNewEditForm.propTypes = {
  currentAbout: PropTypes.object,
};
