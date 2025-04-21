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
import { Trusted_Reducer } from 'src/utils/attributeReduce';
import { TrustedContext } from 'src/context/Trusteds';

// ----------------------------------------------------------------------

export default function TrustedNewEditForm({ currentTrusted }) {
  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();
  
  const initialOne = currentTrusted?.listOne || []

  
  const initialTow = currentTrusted?.listTow || []


  const initialThree = currentTrusted?.listThree || []


  const initialFour = currentTrusted?.listFour || []

  /////////////////////////////////////////////
  const [TrustedOne, TrustedOneDispatch] = useReducer(
    Trusted_Reducer,
    initialOne,
  );

  const [TrustedTow, TrustedTowDispatch] = useReducer(
    Trusted_Reducer,
    initialTow,
  );

  const [TrustedThree, TrustedThreeDispatch] = useReducer(
    Trusted_Reducer,
    initialThree,
  );

  const [TrustedFour, TrustedFourDispatch] = useReducer(
    Trusted_Reducer,
    initialFour,
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

    listOneN_ar: Yup.string().min(3).max(30).required('اسم المجموعة الاولى مطلوب بالعربية'),
    listOneN_en: Yup.string().min(3).max(30).required('English first Group Name is required'),
    listOneN_cr: Yup.string().min(3).max(30).required('Kurd first Group Name is required'),

    listTowN_ar: Yup.string().min(3).max(30).required('اسم المجموعة الثانية مطلوب بالعربية'),
    listTowN_en: Yup.string().min(3).max(30).required('English second Group Name is required'),
    listTowN_cr: Yup.string().min(3).max(30).required('Kurd second Group Name is required'),

    listThreeN_ar: Yup.string().min(3).max(30).required('اسم المجموعة الثالثة مطلوب بالعربية'),
    listThreeN_en: Yup.string().min(3).max(30).required('English Third Group Name is required'),
    listThreeN_cr: Yup.string().min(3).max(30).required('Kurd Third Group Name is required'),

    listFourN_ar: Yup.string().min(3).max(30).required('اسم المجموعة الرابعة مطلوب بالعربية'),
    listFourN_en: Yup.string().min(3).max(30).required('English Ford Group Name is required'),
    listFourN_cr: Yup.string().min(3).max(30).required('Kurd Ford Group Name is required'),

    ListOne: Yup.array().min(1).max(10).required('English First Trusted List'),

    ListTow: Yup.array().min(1).max(10).required('English Second Trusted List'),

    ListThree: Yup.array().min(1).max(10).required('English Third Trusted List'),

    ListFour: Yup.array().min(1).max(10).required('English Ford Trusted List'),

  });


  const defaultValues = useMemo(
    () => ({
      titleOne_ar: currentTrusted?.lang?.ar?.titleOne || '',
      titleOne_en: currentTrusted?.lang?.en?.titleOne || '',
      titleOne_cr: currentTrusted?.lang?.cr?.titleOne || '',

      titleTow_ar: currentTrusted?.lang?.ar?.titleTow || '',
      titleTow_en: currentTrusted?.lang?.en?.titleTow || '',
      titleTow_cr: currentTrusted?.lang?.cr?.titleTow || '',

      span_ar: currentTrusted?.lang?.ar?.span || '',
      span_en: currentTrusted?.lang?.en?.span || '',
      span_cr: currentTrusted?.lang?.cr?.span || '',

      listOneN_ar: currentTrusted?.lang?.ar?.listOne?.name,
      listOneN_en: currentTrusted?.lang?.en?.listOne?.name,
      listOneN_cr: currentTrusted?.lang?.cr?.listOne?.name,

      listTowN_ar: currentTrusted?.lang?.ar?.listTow?.name,
      listTowN_en: currentTrusted?.lang?.en?.listTow?.name,
      listTowN_cr: currentTrusted?.lang?.cr?.listTow?.name,

      listThreeN_ar: currentTrusted?.lang?.ar?.listThree?.name,
      listThreeN_en: currentTrusted?.lang?.en?.listThree?.name,
      listThreeN_cr: currentTrusted?.lang?.cr?.listThree?.name,

      listFourN_ar: currentTrusted?.lang?.ar?.listFour?.name,
      listFourN_en: currentTrusted?.lang?.en?.listFour?.name,
      listFourN_cr: currentTrusted?.lang?.cr?.listFour?.name,

      ListOne: currentTrusted?.listOne ||'',

      ListTow: currentTrusted?.listTow ||'',

      ListThree: currentTrusted?.listThree ||'',

      ListFour: currentTrusted?.listFour ||'',

    }),
    [currentTrusted]
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
    if (currentTrusted) {
      reset(defaultValues);
    }
  }, [currentTrusted, defaultValues, reset]);


  const onSubmit = handleSubmit(async (data) => {

      try{
        const newListOne = await Promise.all(values?.ListOne.map(async(item, index) => {
          if (typeof item.img === 'object'){
          const objIndex = currentTrusted?.listOne.findIndex(obj => obj.id == item.id);

          if(currentTrusted?.listOne[objIndex]?.img){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentTrusted?.listOne[index]?.img
            })
          }

          const formData = new FormData()
          if (item.img) {
        formData.append('file', item.img)

          const uploadImage = await axiosReq.post('/uploadFile/trusteds', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.img = fileUrl
          } 
          
        }
        return item
      }))

        const newListTow = await Promise.all(values?.ListTow.map(async(item, index) => {
          if (typeof item.img === 'object'){
          const objIndex = currentTrusted?.listTow.findIndex(obj => obj.id == item.id);

          if(currentTrusted?.listTow[objIndex]?.img){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentTrusted?.listTow[index]?.img
            })
          }

          const formData = new FormData()
          if (item.img) {
        formData.append('file', item.img)

          const uploadImage = await axiosReq.post('/uploadFile/trusteds', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.img = fileUrl
          } 
          
        }
        return item
      }))

        const newListThree = await Promise.all(values?.ListThree.map(async(item, index) => {
          if (typeof item.img === 'object'){
          const objIndex = currentTrusted?.listThree.findIndex(obj => obj.id == item.id);

          if(currentTrusted?.listThree[objIndex]?.img){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentTrusted?.listThree[index]?.img
            })
          }

          const formData = new FormData()
          if (item.img) {
        formData.append('file', item.img)

          const uploadImage = await axiosReq.post('/uploadFile/trusteds', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.img = fileUrl
          } 
          
        }
        return item
      }))

        const newListFour = await Promise.all(values?.ListFour.map(async(item, index) => {
          if (typeof item.img === 'object'){
          const objIndex = currentTrusted?.listFour.findIndex(obj => obj.id == item.id);

          if(currentTrusted?.listFour[objIndex]?.img){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentTrusted?.listFour[index]?.img
            })
          }

          const formData = new FormData()
          if (item.img) {
        formData.append('file', item.img)

          const uploadImage = await axiosReq.post('/uploadFile/trusteds', formData, {
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
            titleOne: values?.titleOne_ar,
            titleTow: values?.titleTow_ar,
            span: values?.span_ar,
            listOne: {...currentTrusted?.lang?.ar?.listOne, name: values.listOneN_ar},
            listTow: {...currentTrusted?.lang?.ar?.listTow, name: values.listTowN_ar},
            listThree: {...currentTrusted?.lang?.ar?.listThree, name: values.listThreeN_ar},
            listFour: {...currentTrusted?.lang?.ar?.listFour, name: values.listFourN_ar},
          },
          en: {
            titleOne: values?.titleOne_en,
            titleTow: values?.titleTow_en,
            span: values?.span_en,
            listOne: {...currentTrusted?.lang?.en?.listOne, name: values.listOneN_en},
            listTow: {...currentTrusted?.lang?.en?.listTow, name: values.listTowN_en},
            listThree: {...currentTrusted?.lang?.en?.listThree, name: values.listThreeN_en},
            listFour: {...currentTrusted?.lang?.en?.listFour, name: values.listFourN_en},
          },
          cr: {
            titleOne: values?.titleOne_cr,
            titleTow: values?.titleTow_cr,
            span: values?.span_cr,
            listOne: {...currentTrusted?.lang?.cr?.listOne, name: values.listOneN_cr},
            listTow: {...currentTrusted?.lang?.cr?.listTow, name: values.listTowN_cr},
            listThree: {...currentTrusted?.lang?.cr?.listThree, name: values.listThreeN_cr},
            listFour: {...currentTrusted?.lang?.cr?.listFour, name: values.listFourN_cr},
          }
        },
        listOne: newListOne,
        listTow: newListTow,
        listThree: newListThree,
        listFour: newListFour,
      }
      await axiosReq.put('/edit/trusteds', requestValues) 
      reset();
      enqueueSnackbar('Update success!');
      window.location.reload()

      toast.success("Trusted's Updated Successfully.")
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

            <Stack spacing={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Arabic Trusted List</Typography>
            <RHFTextField name="listOneN_ar" label="اسم المجموعة الاولى بالعربية بالعربية" sx={{
              direction: 'rtl'
            }} />
            <RHFTextField name="listTowN_ar" label="اسم المجموعة الثانية بالعربية بالعربية" sx={{
              direction: 'rtl'
            }} />
            <RHFTextField name="listThreeN_ar" label="اسم المجموعة الثالة بالعربية بالعربية" sx={{
              direction: 'rtl'
            }} />
            <RHFTextField name="listFourN_ar" label="اسم المجموعة الرابعة بالعربية بالعربية" sx={{
              direction: 'rtl'
            }} />
            </Stack>
            <CardHeader title="English Text" />

            <RHFTextField name="titleOne_en" label="English First section of title" />

            <RHFTextField name="span_en" label="English Special Word"/>

            <RHFTextField name="titleTow_en" label="English Second section of title" />

            <Stack spacing={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>English Trusted List</Typography>
            <RHFTextField name="listOneN_en" label="English First group name" />

            <RHFTextField name="listTowN_en" label="English Second group name" />

            <RHFTextField name="listThreeN_en" label="English Third group name" />

            <RHFTextField name="listFourN_en" label="English Ford group name" />
            </Stack>

            <CardHeader title="Kurd Text" />

            <RHFTextField name="titleOne_cr" label="kurd First section of title" />

            <RHFTextField name="span_cr" label="kurd Special Word"/>

            <RHFTextField name="titleTow_cr" label="kurd Second section of title" />

            <Stack spacing={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>kurd Trusted List</Typography>
            <RHFTextField name="listOneN_cr" label="Kurd First group name" />

            <RHFTextField name="listTowN_cr" label="Kurd Second group name" />

            <RHFTextField name="listThreeN_cr" label="Kurd Third group name" />

            <RHFTextField name="listFourN_cr" label="Kurd Ford group name" />
            </Stack>

          </Stack>
                <Stack spacing={0} sx={{ p: 3 }}> 
            <Typography variant="h4" sx={{ mb: 0.5 }}>{`"Brands Groups" Images`}</Typography>
            <Typography variant="h6" sx={{ mb: 0.5 }}>{`"${values.listOneN_en}" Images`}</Typography>
            <AttributeForms setAllValue={setValue} trusteds={TrustedOne} trustedsDispatch={TrustedOneDispatch} listName={'ListOne'} />

            <Typography variant="h6" sx={{ mb: 0.5 }}>{`"${values.listTowN_en}" Images`}</Typography>
            <AttributeForms setAllValue={setValue} trusteds={TrustedTow} trustedsDispatch={TrustedTowDispatch} listName={'ListTow'} />

            <Typography variant="h6" sx={{ mb: 0.5 }}>{`"${values.listThreeN_en}" Images`}</Typography>
            <AttributeForms setAllValue={setValue} trusteds={TrustedThree} trustedsDispatch={TrustedThreeDispatch} listName={'ListThree'} />

            <Typography variant="h6" sx={{ mb: 0.5 }}>{`"${values.listFourN_en}" Images`}</Typography>
            <AttributeForms setAllValue={setValue} trusteds={TrustedFour} trustedsDispatch={TrustedFourDispatch} listName={'ListFour'} />
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
            if (methods?.formState?.errors){
              const errors = Object.keys(methods?.formState?.errors)
              errors.map(er => {
                toast.error(methods?.formState?.errors[er].message)
              })
            }
          }}
        >
          Save Trusted
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

TrustedNewEditForm.propTypes = {
  currentTrusted: PropTypes.object,
};
