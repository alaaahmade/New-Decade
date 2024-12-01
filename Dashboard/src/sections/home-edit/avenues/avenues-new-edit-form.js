import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useCallback, useMemo, useEffect, useState, useReducer, useContext } from 'react';
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
} from 'src/components/hook-form/index';
//
import { axiosReq } from 'src/utils/axiosReq';
import { AttributeForms } from './AttributeForms';
import { Avenues_arReducer, Avenues_enReducer, Avenues_crReducer } from 'src/utils/attributeReduce';

// ----------------------------------------------------------------------

export default function AvenuesNewEditForm({ currentAvenues }) {
  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();
  
  const initial_ar = currentAvenues?.lang?.ar.Avenues || []
  const initial_en = currentAvenues?.lang?.en.Avenues || []
  const initial_cr = currentAvenues?.lang?.cr.Avenues || []
  /////////////////////////////////////////////
  const [Avenues_ar, Avenues_arDispatch] = useReducer(
    Avenues_arReducer,
    initial_ar,
  );

  const [Avenues_en, Avenues_enDispatch] = useReducer(
    Avenues_enReducer,
    initial_en,
  );

  const [Avenues_cr, Avenues_crDispatch] = useReducer(
    Avenues_crReducer,
    initial_cr,
  );

  const NewBlogSchema = Yup.object().shape({
    titleOne_ar: Yup.string().min(4).max(50).required('الجزء الأول من العنوان مطلوب باللغة العربية'),
    titleOne_en: Yup.string().min(4).max(50).required('English First section of title is required'),
    titleOne_cr: Yup.string().min(4).max(50).required('kurd First section of title is required'),

    span_ar: Yup.string().min(4).max(50).required('الكلمة المميزة مطلوبة بالعربية'),
    span_en: Yup.string().min(4).max(50).required('English Special Word is required'),
    span_cr: Yup.string().min(4).max(50).required('kurd Special Word is required'),

    titleTow_ar: Yup.string().min(4).max(50).required('الجزء الثاني من العنوان مطلوب باللغة العربية'),
    titleTow_en: Yup.string().min(4).max(50).required('English Second section of title is required'),
    titleTow_cr: Yup.string().min(4).max(50).required('kurd Second section of title is required'),

    description_ar: Yup.string().min(10).max(5000).required('الوصف مطلوب باللغة العربية'),
    description_en: Yup.string().min(10).max(5000).required('English Description is required'),
    description_cr: Yup.string().min(10).max(5000).required('kurd Description is required'),

    avenuesList_ar: Yup.array().min(1).max(5).required('Avenues List مطلوب باللغة العربية'),
    avenuesList_en: Yup.array().min(1).max(5).required('English Avenues List'),
    avenuesList_cr: Yup.array().min(1).max(5).required('Kurd Avenues List')
  });


  const defaultValues = useMemo(
    () => ({
      titleOne_ar: currentAvenues?.lang?.ar?.titleOne || '',
      titleOne_en: currentAvenues?.lang?.en?.titleOne || '',
      titleOne_cr: currentAvenues?.lang?.cr?.titleOne || '',

      titleTow_ar: currentAvenues?.lang?.ar?.titleTow || '',
      titleTow_en: currentAvenues?.lang?.en?.titleTow || '',
      titleTow_cr: currentAvenues?.lang?.cr?.titleTow || '',

      span_ar: currentAvenues?.lang?.ar?.span || '',
      span_en: currentAvenues?.lang?.en?.span || '',
      span_cr: currentAvenues?.lang?.cr?.span || '',

      description_ar: currentAvenues?.lang?.ar?.desc || '',
      description_en: currentAvenues?.lang?.en?.desc || '',
      description_cr: currentAvenues?.lang?.cr?.desc || '',

      avenuesList_ar: currentAvenues?.lang?.ar?.Avenues ||'',
      avenuesList_en: currentAvenues?.lang?.en?.Avenues ||'',
      avenuesList_cr: currentAvenues?.lang?.cr?.Avenues ||'',

    }),
    [currentAvenues]
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
    if (currentAvenues) {
      reset(defaultValues);
    }
  }, [currentAvenues, defaultValues, reset]);


  const onSubmit = handleSubmit(async (data) => {

      try{
        const newArray_ar = await Promise.all(values?.avenuesList_ar.map(async(item, index) => {
          if (typeof item.img === 'object'){
          if(currentAvenues?.lang?.ar?.Avenues[index]?.img){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentAvenues?.lang?.ar?.Avenues[index]?.img
            })
          }

          const formData = new FormData()
          if (item.img) {
        formData.append('file', item.img)

          const uploadImage = await axiosReq.post('/uploadFile/avenues', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.img = fileUrl
          } 
          
        }
        if (typeof item.descImg === 'object'){
          if(currentAvenues?.lang?.ar?.Avenues[index]?.descImg){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentAvenues?.lang?.ar?.Avenues[index]?.descImg
            })
          }

          const formData = new FormData()
          if (item.descImg) {
        formData.append('file', item.descImg)

          const uploadImage = await axiosReq.post('/uploadFile/avenues', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.descImg = fileUrl
          } 
          
        }
        return item
      }))
        const newArray_en = await Promise.all(values?.avenuesList_en.map(async(item, index) => {
          if (typeof item.img === 'object'){
          if(currentAvenues?.lang?.en?.Avenues[index]?.img){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentAvenues?.lang?.en?.Avenues[index]?.img
            })
          }

          const formData = new FormData()
          if (item.img) {
        formData.append('file', item.img)

          const uploadImage = await axiosReq.post('/uploadFile/avenues', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.img = fileUrl
          } 
          
        }
        if (typeof item.descImg === 'object'){
          if(currentAvenues?.lang?.en?.Avenues[index]?.descImg){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentAvenues?.lang?.en?.Avenues[index]?.descImg
            })
          }

          const formData = new FormData()
          if (item.descImg) {
        formData.append('file', item.descImg)

          const uploadImage = await axiosReq.post('/uploadFile/avenues', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.descImg = fileUrl
          } 
          
        }
        return item
      }))
        const newArray_cr = await Promise.all(values?.avenuesList_cr.map(async(item, index) => {
          if (typeof item.img === 'object'){
          if(currentAvenues?.lang?.cr?.Avenues[index]?.img){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentAvenues?.lang?.cr?.Avenues[index]?.img
            })
          }

          const formData = new FormData()
          if (item.img) {
        formData.append('file', item.img)

          const uploadImage = await axiosReq.post('/uploadFile/avenues', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.img = fileUrl
          } 
          
        }
        if (typeof item.descImg === 'object'){
          if(currentAvenues?.lang?.cr?.Avenues[index]?.descImg){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentAvenues?.lang?.cr?.Avenues[index]?.descImg
            })
          }

          const formData = new FormData()
          if (item.descImg) {
        formData.append('file', item.descImg)

          const uploadImage = await axiosReq.post('/uploadFile/avenues', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.descImg = fileUrl
          } 
          
        }
        return item
      }))
      await setValue('avenuesList_ar', newArray_ar)
      await setValue('avenuesList_en', newArray_en)
      await setValue('avenuesList_cr', newArray_cr)
      const requestValues = {
        lang: {
          ar: {
            titleOne: values?.titleOne_ar,
            titleTow: values?.titleTow_ar,
            span: values?.span_ar,
            desc: values?.description_ar,
            Avenues: values.avenuesList_ar
          },
          en: {
            titleOne: values?.titleOne_en,
            titleTow: values?.titleTow_en,
            span: values?.span_en,
            desc: values?.description_en,
            Avenues: values.avenuesList_en
          },
          cr: {
            titleOne: values?.titleOne_cr,
            titleTow: values?.titleTow_cr,
            span: values?.span_cr,
            desc: values?.description_cr,
            Avenues: values.avenuesList_cr
          }
        }
      }
      await axiosReq.put('/edit/avenues', requestValues) 
      reset();
      enqueueSnackbar('Update success!');
      window.location.reload()

      toast.success("Avenues's Updated Successfully.")
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'Something went wrong!');
      console.error(error);
    }
    });
  

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
            <RHFTextField name="titleOne_ar" label="الجزء الأول من العنوان بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField name="span_ar" label="الكلمة المميزة بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField name="titleTow_ar" label="الجزء الثاني من العنوان بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField type="text" name="description_ar" label="الوصف بالعربية" multiline rows={3} sx={{
              direction: 'rtl'
            }} />

            <Stack spacing={0} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Avenues</Typography>
            <AttributeForms setAllValue={setValue} avenues={Avenues_ar} avenuesDispatch={Avenues_arDispatch} listName={'avenuesList_ar'} />
            </Stack>
            <CardHeader title="English Text" />

            <RHFTextField name="titleOne_en" label="English First section of title" />

            <RHFTextField name="span_en" label="english Special Word"/>

            <RHFTextField name="titleTow_en" label="English Second section of title" />

            <RHFTextField type="text" name="description_en" label="english description" multiline rows={3}/>

            <Stack spacing={0} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Avenues</Typography>
            <AttributeForms setAllValue={setValue} avenues={Avenues_en} avenuesDispatch={Avenues_enDispatch} listName={'avenuesList_en'} />
            </Stack>

            <CardHeader title="Kurd Text" />

            <RHFTextField name="titleOne_cr" label="kurd First section of title" />

            <RHFTextField name="span_cr" label="kurd Special Word"/>

            <RHFTextField name="titleTow_cr" label="kurd Second section of title" />

            <RHFTextField type="text" name="description_cr" label="kurd First description" multiline rows={3}/>

            <Stack spacing={0} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Avenues</Typography>
            <AttributeForms setAllValue={setValue} avenues={Avenues_cr} avenuesDispatch={Avenues_crDispatch} listName={'avenuesList_cr'} />
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
          onClick={() => {
            reset()
            router.push(paths.dashboard.root)
          }}
          >
        cancel
        </Button>
        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          loading={isSubmitting}
          sx={{ ml: 2}}
          onClick={async() => {
            await onSubmit()
            if (methods?.formState?.errors){
              const errors = Object.keys(methods?.formState?.errors)
              errors.map(er => {
                toast.error(methods?.formState?.errors[er].message)
              })
            }
          }}
        >
          Save Avenues
        </LoadingButton>
        
      </Grid>
    </>
  );

  const renderImageInput = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
          Image
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            hero Section Image...
          </Typography>
        </Grid>
      )}

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

AvenuesNewEditForm.propTypes = {
  currentAvenues: PropTypes.object,
};
