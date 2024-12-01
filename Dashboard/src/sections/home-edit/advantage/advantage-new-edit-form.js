import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useCallback, useMemo, useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Card,
  Stack,
  Button,
  CardHeader,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// hooks
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

// ----------------------------------------------------------------------

export default function AdvantageNewEditForm({ currentAdvantage }) {
  const [changeButtonOneI, setChangeButtonOneI] = useState(false);
  const [changeButtonTowI, setChangeButtonTowI] = useState(false);
  const [buttonOneI, setButtonOneI] = useState(null);
  const [buttonTowI, setButtonTowI] = useState(null);

  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();


  const NewBlogSchema = Yup.object().shape({
    titleOne_ar: Yup.string().min(3).max(50).required('العنوان الأول مطلوب باللغة العربية'),
    titleOne_en: Yup.string().min(3).max(50).required('English First title is required'),
    titleOne_cr: Yup.string().min(3).max(50).required('kurd First title is required'),

    titleTow_ar: Yup.string().min(3).max(50).required('العنوان الأول مطلوب باللغة العربية'),
    titleTow_en: Yup.string().min(3).max(50).required('English First title is required'),
    titleTow_cr: Yup.string().min(3).max(50).required('kurd First title is required'),

    span_ar: Yup.string().min(4).max(50).required('الكلمة المميزة مطلوبة بالعربية'),
    span_en: Yup.string().min(4).max(50).required('English Special Word is required'),
    span_cr: Yup.string().min(4).max(50).required('kurd Special Word is required'),

    buttonOneT_ar: Yup.string().min(4).max(50).required('نص المفتاح الأول مطلوب بالعربية'),
    buttonOneT_en: Yup.string().min(4).max(50).required('english firsts button text is required'),
    buttonOneT_cr: Yup.string().min(4).max(50).required('kurd firsts button text is required'),

    buttonOneI: Yup.string().min(4).max(100).required('english firsts button Image is required'),

    buttonTowT_ar: Yup.string().min(4).max(50).required('نص المفتاح الثاني مطلوب بالعربية'),
    buttonTowT_en: Yup.string().min(4).max(50).required('english Second button text is required'),
    buttonTowT_cr: Yup.string().min(4).max(50).required('kurd Second button text is required'),
    
    buttonTowI: Yup.string().min(4).max(100).required('english Second button Image is required'),
  });


  const defaultValues = useMemo(
    () => ({
      titleOne_ar: currentAdvantage?.lang?.ar?.titleOne || '',
      titleOne_en: currentAdvantage?.lang?.en?.titleOne || '',
      titleOne_cr: currentAdvantage?.lang?.cr?.titleOne || '',

      titleTow_ar: currentAdvantage?.lang?.ar?.titleTow || '',
      titleTow_en: currentAdvantage?.lang?.en?.titleTow || '',
      titleTow_cr: currentAdvantage?.lang?.cr?.titleTow || '',

      span_ar: currentAdvantage?.lang?.ar.span || '',
      span_en: currentAdvantage?.lang?.en.span || '',
      span_cr: currentAdvantage?.lang?.cr.span || '',

      buttonOneT_ar: currentAdvantage?.lang?.ar?.buttonOne || '',
      buttonOneT_en: currentAdvantage?.lang?.en?.buttonOne|| '',
      buttonOneT_cr: currentAdvantage?.lang?.cr?.buttonOne || '',
      
      buttonTowT_ar: currentAdvantage?.lang?.ar?.buttonTow || '',
      buttonTowT_en: currentAdvantage?.lang?.en?.buttonTow|| '',
      buttonTowT_cr: currentAdvantage?.lang?.cr?.buttonTow || '',
      
      buttonOneI: currentAdvantage?.buttonOneI || '',
      
      buttonTowI: currentAdvantage?.buttonTowI|| '',
    }),
    [currentAdvantage]
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

  useEffect(() => {
    if (currentAdvantage) {
      reset(defaultValues);
    }
  }, [currentAdvantage, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
      try{
        let newButtonOneI = ''
        let newButtonTowI = ''
        if(changeButtonOneI){
          if(currentAdvantage?.buttonOneI){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentAdvantage.buttonOneI
            })
          }
          const formData = new FormData()
          if (values.buttonOneI) {
        formData.append('file', values.buttonOneI)
          const uploadImage = await axiosReq.post('/uploadFile/advantage', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        newButtonOneI = fileUrl
          }

        }
        if(changeButtonTowI){
          if(currentAdvantage?.buttonTowI){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentAdvantage.buttonTowI
            })
          }
          const formData = new FormData()
          if (values.buttonTowI) {
        formData.append('file', values.buttonTowI)

          const uploadImage = await axiosReq.post('/uploadFile/advantage', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        newButtonTowI = fileUrl
          } 
          

        }
      const requestValues = {
        buttonOneI: newButtonOneI || currentAdvantage?.buttonOneI,
        buttonTowI: newButtonTowI || currentAdvantage?.buttonTowI,
        lang: {
          ar: {
            titleOne: values.titleOne_ar,
            span: values.span_ar,
            titleTow: values.titleTow_ar,
            buttonOne: values.buttonOneT_ar,
            buttonTow: values.buttonTowT_ar
          },
          en: {
            titleOne: values.titleOne_en,
            span: values.span_en,
            titleTow: values.titleTow_en,
            buttonOne: values.buttonOneT_en,
            buttonTow: values.buttonTowT_en
          },
          cr: {
            titleOne: values.titleOne_cr,
            span: values.span_cr,
            titleTow: values.titleTow_cr,
            buttonOne: values.buttonOneT_cr,
            buttonTow: values.buttonTowT_cr
          }
        }
      }
       await axiosReq.put('/edit/advantage', requestValues) 
      reset();
      enqueueSnackbar('Update success!');

      // window.location.reload()
      toast.success("about's Updated Successfully.")
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'Something went wrong!');
      console.error(error);
    }
    });
  const handleDropButtonOneI = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setChangeButtonOneI(true);
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      setButtonOneI(file)

      if (file) {
        setValue('buttonOneI', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleRemoveButtonOneI = useCallback(() => {
    setValue('buttonOneI', null);
    setButtonOneI(null)
  }, [setValue]);

  const handleDropButtonTowI = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setChangeButtonTowI(true);
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      setButtonTowI(file)

      if (file) {
        setValue('buttonTowI', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleRemoveButtonTowI = useCallback(() => {
    setValue('buttonTowI', null);
    setButtonTowI(null)
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
            <RHFTextField name="titleOne_ar" label="العنوان الأول بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField name="span_ar" label="الكلمة المميزة بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField name="titleTow_ar" label="العنوان الثاني بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField name="buttonOneT_ar" label="نص المفتاح الأول بالعربية" sx={{
              direction: 'rtl',
            }} />

            <RHFTextField name="buttonTowT_ar" label="نص المفتاح الثاني بالعربية" sx={{
              direction: 'rtl',
            }} />

            <CardHeader title="English Text" />

            <RHFTextField name="titleOne_en" label="english firs section of title" />
            
            <RHFTextField name="span_en" label="english Special Word"/>

            <RHFTextField name="titleTow_en" label="english second section of title" />

            <RHFTextField name="buttonOneT_en" label="english firsts button text"/>

            <RHFTextField name="buttonTowT_en" label="english seconds button text"/>

            <CardHeader title="Kurd Text" />

            <RHFTextField name="titleOne_cr" label="kurd first section of title" />

            <RHFTextField name="span_cr" label="kurd Special Word"/>

            <RHFTextField name="titleTow_cr" label="kurd second section of title" />

            <RHFTextField name="buttonOneT_cr" label="kurd firsts button text" />

            <RHFTextField name="buttonTowT_cr" label="kurd seconds button text"/>


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
          Save Advantage
        </LoadingButton>
        
      </Grid>
    </>
  );

  const renderImageInput = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
          Images
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Advantage Section Image...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card sx={{p: 2}}>
          {!mdUp && <CardHeader title="Images" />}
          <Stack spacing={1.5} sx={{m: 2}}>
              <Typography variant="subtitle2">{`"${values?.buttonOneT_en} "button One Image`}</Typography>
              <RHFUpload
                name="buttonOneI"
                maxSize={3145728}
                onDrop={handleDropButtonOneI}
                onDelete={handleRemoveButtonOneI}
                file={values.buttonOneI || buttonOneI}

              />

            </Stack>

            <Stack spacing={1.5} sx={{m: 2}}>
              <Typography variant="subtitle2">{`"${values?.buttonTowT_en} "button Tow Image`}</Typography>
              <RHFUpload
                name="buttonTowI"
                maxSize={3145728}
                onDrop={handleDropButtonTowI}
                onDelete={handleRemoveButtonTowI}
                file={values.buttonTowI || buttonTowI}

              />

            </Stack>
          </Card>
          </Grid>
        </>
  )

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}
        {renderImageInput}
        {renderActions}
      </Grid>
      
    </FormProvider>
  );
}

AdvantageNewEditForm.propTypes = {
  currentAdvantage: PropTypes.object,
};
