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
import { Insights_arReducer, Insights_enReducer, Insights_crReducer } from 'src/utils/attributeReduce';

// ----------------------------------------------------------------------

export default function InsightsNewEditForm({ currentLatestInsights }) {
  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();
  
  const initial_ar = currentLatestInsights?.lang?.ar.insights || []
  const initial_en = currentLatestInsights?.lang?.en.insights || []
  const initial_cr = currentLatestInsights?.lang?.cr.insights || []
  /////////////////////////////////////////////
  const [Insights_ar, Insights_arDispatch] = useReducer(
    Insights_arReducer,
    initial_ar,
  );

  const [Insights_en, Insights_enDispatch] = useReducer(
    Insights_enReducer,
    initial_en,
  );

  const [Insights_cr, Insights_crDispatch] = useReducer(
    Insights_crReducer,
    initial_cr,
  );

  const NewBlogSchema = Yup.object().shape({
    title_ar: Yup.string().min(4).max(50).required('العنوان مطلوب باللغة العربية'),
    title_en: Yup.string().min(4).max(50).required('English title is required'),
    title_cr: Yup.string().min(4).max(50).required('kurd title is required'),

    span_ar: Yup.string().min(4).max(50).required('الكلمة المميزة مطلوبة بالعربية'),
    span_en: Yup.string().min(4).max(50).required('English Special Word is required'),
    span_cr: Yup.string().min(4).max(50).required('kurd Special Word is required'),

    insights_ar: Yup.array().min(1).max(5).required('Insights List مطلوب باللغة العربية'),
    insights_en: Yup.array().min(1).max(5).required('English Insights List'),
    insights_cr: Yup.array().min(1).max(5).required('Kurd Insights List')
  });


  const defaultValues = useMemo(
    () => ({
      title_ar: currentLatestInsights?.lang?.ar?.title || '',
      title_en: currentLatestInsights?.lang?.en?.title || '',
      title_cr: currentLatestInsights?.lang?.cr?.title || '',

      span_ar: currentLatestInsights?.lang?.ar?.span || '',
      span_en: currentLatestInsights?.lang?.en?.span || '',
      span_cr: currentLatestInsights?.lang?.cr?.span || '',

      insights_ar: currentLatestInsights?.lang?.ar?.insights ||'',
      insights_en: currentLatestInsights?.lang?.en?.insights ||'',
      insights_cr: currentLatestInsights?.lang?.cr?.insights ||'',

    }),
    [currentLatestInsights]
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
    if (currentLatestInsights) {
      reset(defaultValues);
    }
  }, [currentLatestInsights, defaultValues, reset]);


  const onSubmit = handleSubmit(async (data) => {

      try{
        const newInsights_ar = await Promise.all(values?.insights_ar.map(async(item, index) => {
          if (typeof item.img === 'object'){
          if(currentLatestInsights?.lang?.ar?.insights[index]?.img){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentLatestInsights?.lang?.ar?.insights[index]?.img
            })
          }

          const formData = new FormData()
          if (item.img) {
        formData.append('file', item.img)

          const uploadImage = await axiosReq.post('/uploadFile/insights', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.img = fileUrl
          } 
          
        }
        return item
      }))
        const newInsights_en = await Promise.all(values?.insights_en.map(async(item, index) => {
          if (typeof item.img === 'object'){
          if(currentLatestInsights?.lang?.en?.insights[index]?.img){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentLatestInsights?.lang?.en?.insights[index]?.img
            })
          }

          const formData = new FormData()
          if (item.img) {
        formData.append('file', item.img)

          const uploadImage = await axiosReq.post('/uploadFile/insights', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.img = fileUrl
          } 
          
        }
        return item
      }))
        const newInsights_cr = await Promise.all(values?.insights_cr.map(async(item, index) => {
          if (typeof item.img === 'object'){
          if(currentLatestInsights?.lang?.cr?.insights[index]?.img){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentLatestInsights?.lang?.cr?.insights[index]?.img
            })
          }

          const formData = new FormData()
          if (item.img) {
        formData.append('file', item.img)

          const uploadImage = await axiosReq.post('/uploadFile/insights', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.img = fileUrl
          } 
          
        }
        return item
      }))
      const requestValues = {
        lang: {
          ar: {
            title: values?.title_ar,
            span: values?.span_ar,
            insights: newInsights_ar
          },
          en: {
            title: values?.title_en,
            span: values?.span_en,
            insights: newInsights_en
          },
          cr: {
            title: values?.title_cr,
            span: values?.span_cr,
            insights: newInsights_cr
          }
        }
      }
      await axiosReq.put('/edit/insights', requestValues) 
      reset();
      enqueueSnackbar('Update success!');
      window.location.reload()

      toast.success("Insights's Updated Successfully.")
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
            <RHFTextField name="title_ar" label="العنوان بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField name="span_ar" label="الكلمة المميزة بالعربية" sx={{
              direction: 'rtl'
            }} />

            <Stack spacing={0} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Insights</Typography>
            <AttributeForms setAllValue={setValue} insights={Insights_ar} insightsDispatch={Insights_arDispatch} listName={'insights_ar'} />
            </Stack>
            <CardHeader title="English Text" />

            <RHFTextField name="title_en" label="English title" />

            <RHFTextField name="span_en" label="english Special Word"/>

            <Stack spacing={0} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Insights</Typography>
            <AttributeForms setAllValue={setValue} insights={Insights_en} insightsDispatch={Insights_enDispatch} listName={'insights_en'} />
            </Stack>

            <CardHeader title="Kurd Text" />

            <RHFTextField name="title_cr" label="kurd title" />

            <RHFTextField name="span_cr" label="kurd Special Word"/>

            <Stack spacing={0} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Insights</Typography>
            <AttributeForms setAllValue={setValue} insights={Insights_cr} insightsDispatch={Insights_crDispatch} listName={'insights_cr'} />
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
          type="button"
          variant="contained"
          size="large"
          loading={isSubmitting}
          sx={{ ml: 2}}
          onClick={
            async() => {
              await onSubmit()
              if (methods?.formState?.errors){
                const errors = Object.keys(methods?.formState?.errors)
                errors.map(er => {
                  toast.error(methods?.formState?.errors[er].message)
                })
              }
              }
          }
        >
          Save Latest Insights
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

InsightsNewEditForm.propTypes = {
  currentLatestInsights: PropTypes.object,
};
