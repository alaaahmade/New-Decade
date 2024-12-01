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
  Box,

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
// import { AttributeForms } from './AttributeForms';
import { Apps_arReducer, Apps_enReducer, Apps_crReducer } from 'src/utils/attributeReduce';
import { AttributeForms } from './AttributeForms';

// ----------------------------------------------------------------------

export default function ModularEditViewNewEditForm({ currentModular }) {
  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();
  
  const initial_ar = currentModular?.lang?.ar.apps || []
  const initial_en = currentModular?.lang?.en.apps || []
  const initial_cr = currentModular?.lang?.cr.apps || []
  /////////////////////////////////////////////
  const [Apps_ar, Apps_arDispatch] = useReducer(
    Apps_arReducer,
    initial_ar,
  );
  

  const [Apps_en, Apps_enDispatch] = useReducer(
    Apps_enReducer,
    initial_en,
  );

  const [Apps_cr, Apps_crDispatch] = useReducer(
    Apps_crReducer,
    initial_cr,
  );

  const NewBlogSchema = Yup.object().shape({
    titleOne_ar: Yup.string().min(3).max(50).required('الجزء الأول من العنوان مطلوب باللغة العربية'),
    titleOne_en: Yup.string().min(3).max(50).required('English First section of title is required'),
    titleOne_cr: Yup.string().min(3).max(50).required('kurd First section of title is required'),

    span_ar: Yup.string().min(3).max(50).required('الكلمة المميزة مطلوبة بالعربية'),
    span_en: Yup.string().min(3).max(50).required('English Special Word is required'),
    span_cr: Yup.string().min(3).max(50).required('kurd Special Word is required'),

    titleTow_ar: Yup.string().min(3).max(50).required('الجزء الثاني من العنوان مطلوب باللغة العربية'),
    titleTow_en: Yup.string().min(3).max(50).required('English Second section of title is required'),
    titleTow_cr: Yup.string().min(3).max(50).required('kurd Second section of title is required'),

    descriptionOne_ar: Yup.string().min(10).max(5000).required('الوصف الأول مطلوب باللغة العربية'),
    descriptionOne_en: Yup.string().min(10).max(5000).required('English Firs Description is required'),
    descriptionOne_cr: Yup.string().min(10).max(5000).required('kurd Firs Description is required'),

    descriptionTow_ar: Yup.string().min(10).max(5000).required('الوصف الثاني مطلوب باللغة العربية'),
    descriptionTow_en: Yup.string().min(10).max(5000).required('English second Description is required'),
    descriptionTow_cr: Yup.string().min(10).max(5000).required('kurd second Description is required'),

    appsList_ar: Yup.array().min(1).max(5).required('Apps List مطلوب باللغة العربية'),
    appsList_en: Yup.array().min(1).max(5).required('English Apps List'),
    appsList_cr: Yup.array().min(1).max(5).required('Kurd Apps List')
  });


  const defaultValues = useMemo(
    () => ({
      titleOne_ar: currentModular?.lang?.ar?.titleOne || '',
      titleOne_en: currentModular?.lang?.en?.titleOne || '',
      titleOne_cr: currentModular?.lang?.cr?.titleOne || '',

      titleTow_ar: currentModular?.lang?.ar?.titleTow || '',
      titleTow_en: currentModular?.lang?.en?.titleTow || '',
      titleTow_cr: currentModular?.lang?.cr?.titleTow || '',

      span_ar: currentModular?.lang?.ar?.span || '',
      span_en: currentModular?.lang?.en?.span || '',
      span_cr: currentModular?.lang?.cr?.span || '',

      descriptionOne_ar: currentModular?.lang?.ar?.descOne || '',
      descriptionOne_en: currentModular?.lang?.en?.descOne || '',
      descriptionOne_cr: currentModular?.lang?.cr?.descOne || '',

      descriptionTow_ar: currentModular?.lang?.ar?.descTow || '',
      descriptionTow_en: currentModular?.lang?.en?.descTow || '',
      descriptionTow_cr: currentModular?.lang?.cr?.descTow || '',

      appsList_ar: currentModular?.lang?.ar?.apps ||'',
      appsList_en: currentModular?.lang?.en?.apps ||'',
      appsList_cr: currentModular?.lang?.cr?.apps ||'',

    }),
    [currentModular]
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
    if (currentModular) {
      reset(defaultValues);
    }
  }, [currentModular, defaultValues, reset]);


  const onSubmit = handleSubmit(async (data) => {

      try{
        const newArray_ar = await Promise.all(values?.appsList_ar.map(async(item, index) => {
          if (typeof item.img === 'object'){
          if(currentModular?.lang?.ar?.apps[index]?.img){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentModular?.lang?.ar?.apps[index]?.img
            })
          }

          const formData = new FormData()
          if (item.img) {
        formData.append('file', item.img)

          const uploadImage = await axiosReq.post('/uploadFile/modular', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.img = fileUrl
          } 
          
        }
        return item
      }))
        const newArray_en = await Promise.all(values?.appsList_en.map(async(item, index) => {
          if (typeof item.img === 'object'){
          if(currentModular?.lang?.en?.apps[index]?.img){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentModular?.lang?.en?.apps[index]?.img
            })
          }

          const formData = new FormData()
          if (item.img) {
        formData.append('file', item.img)

          const uploadImage = await axiosReq.post('/uploadFile/modular', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.img = fileUrl
          } 
          
        }
        return item
      }))
        const newArray_cr = await Promise.all(values?.appsList_cr.map(async(item, index) => {
          if (typeof item.img === 'object'){
          if(currentModular?.lang?.cr?.apps[index]?.img){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentModular?.lang?.cr?.apps[index]?.img
            })
          }

          const formData = new FormData()
          if (item.img) {
        formData.append('file', item.img)

          const uploadImage = await axiosReq.post('/uploadFile/modular', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.img = fileUrl
          } 
          
        }
        return item
      }))
      await setValue('appsList_ar', newArray_ar)
      await setValue('appsList_en', newArray_en)
      await setValue('appsList_cr', newArray_cr)
      const requestValues = {
        lang: {
          ar: {
            titleOne: values?.titleOne_ar,
            titleTow: values?.titleTow_ar,
            span: values?.span_ar,
            descOne: values?.descriptionOne_ar,
            descTow: values?.descriptionTow_ar,
            apps: values.appsList_ar
          },
          en: {
            titleOne: values?.titleOne_en,
            titleTow: values?.titleTow_en,
            span: values?.span_en,
            descOne: values?.descriptionOne_ar,
            descTow: values?.descriptionTow_ar,
            apps: values.appsList_en
          },
          cr: {
            titleOne: values?.titleOne_cr,
            titleTow: values?.titleTow_cr,
            span: values?.span_cr,
            descOne: values?.descriptionOne_cr,
            descTow: values?.descriptionTow_cr,
            apps: values.appsList_cr
          }
        }
      }
      await axiosReq.put('/edit/modular', requestValues) 
      reset();
      enqueueSnackbar('Update success!');
      window.location.reload()

      toast.success("Apps's Updated Successfully.")
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'Something went wrong!');
      console.error(error);
    }
    });

    const renderActions = (
      <>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', p: 2 }}>
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
            Save Modular
          </LoadingButton>
          
        </Box>
      </>
    );
  
  

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

            <RHFTextField type="text" name="descriptionOne_ar" label="الوصف الأول بالعربية" multiline rows={3} sx={{
              direction: 'rtl'
            }} />
            
            <RHFTextField type="text" name="descriptionTow_ar" label="الوصف الثاني بالعربية" multiline rows={3} sx={{
              direction: 'rtl'
            }} />
            </Stack>
            </Card>
            </Grid>
            {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
          Apps List
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Apps Title, description, buttons...
          </Typography>
        </Grid>
      )}
            <Grid xs={12} md={8}>
            <Card>
              <CardHeader title="Arabic Apps List" />
            <Stack spacing={3} sx={{ p: 0 }}>

            <Stack spacing={0} sx={{ p: 0 }}>
            <AttributeForms setAllValue={setValue} apps={Apps_ar} appsDispatch={Apps_arDispatch} listName={'appsList_ar'} />
            </Stack>
          </Stack>
        </Card>
      </Grid>
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
            <Stack spacing={3} sx={{ p: 0 }}>
            <CardHeader title="English Text" />

            <RHFTextField name="titleOne_en" label="English First section of title" />

            <RHFTextField name="span_en" label="english Special Word"/>

            <RHFTextField name="titleTow_en" label="English Second section of title" />

            <RHFTextField type="text" name="descriptionOne_en" label="English First description" multiline rows={3}/>
            
            <RHFTextField type="text" name="descriptionTow_en" label="English Second description" multiline rows={3}/>
          </Stack>

        </Card>
      </Grid>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
          Apps List
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Apps Title, description, buttons...
          </Typography>
        </Grid>
      )}
            <Grid xs={12} md={8}>
            <Card>
            <Stack spacing={3} sx={{ p: 0 }}>
            <CardHeader title="English Apps List" />
            <Stack spacing={0} sx={{ p: 3 }}>

            <Typography variant="h6" sx={{ mb: 0.5 }}>Apps</Typography>
            <AttributeForms setAllValue={setValue} apps={Apps_en} appsDispatch={Apps_enDispatch} listName={'appsList_en'} />
            </Stack>
          </Stack>

        </Card>
      </Grid>
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
            <Stack spacing={3} sx={{ p: 0 }}>
            <CardHeader title="Kurd Text" />

            <RHFTextField name="titleOne_cr" label="kurd First section of title" />

            <RHFTextField name="span_cr" label="kurd Special Word"/>

            <RHFTextField name="titleTow_cr" label="kurd Second section of title" />

            <RHFTextField type="text" name="descriptionOne_cr" label="kurd First description" multiline rows={3}/>
            
            <RHFTextField type="text" name="descriptionTow_cr" label="kurd Second description" multiline rows={3}/>
          </Stack>

        </Card>
      </Grid>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Apps List
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Apps Title, description, buttons...
          </Typography>
        </Grid>
      )}
            <Grid xs={12} md={8}>
            <Card>
            <Stack spacing={3} sx={{ p: 0 }}>
            <CardHeader title="Kurd Apps List" />

            <Stack spacing={0} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Apps</Typography>
            <AttributeForms setAllValue={setValue} apps={Apps_cr} appsDispatch={Apps_crDispatch} listName={'appsList_cr'} />
            </Stack>

          </Stack>

        </Card>
      </Grid>
        {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
          Actions
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Save Modular, cancel...
          </Typography>
        </Grid>
      )}
          <Grid xs={12} md={8}>
            <Card>
            <Stack spacing={3} sx={{ p: 0 }}>
            <CardHeader title="Actions" />
          {renderActions}
          </Stack>

        </Card>
      </Grid>
    </>
  );


  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}
      </Grid>
      
    </FormProvider>
  );
}

ModularEditViewNewEditForm.propTypes = {
  currentModular: PropTypes.object,
};
