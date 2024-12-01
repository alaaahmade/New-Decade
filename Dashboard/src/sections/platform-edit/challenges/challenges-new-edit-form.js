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
import { Challenges_arReducer, Challenges_crReducer, Challenges_enReducer } from 'src/utils/attributeReduce';
import { AttributeForms } from './AttributeForms';
// import uuid from 'react-uuid';
// import PostDetailsPreview from './hero-details-preview';
// import { AttributeForms } from './AttributeForms';

// ----------------------------------------------------------------------

export default function ChallengesNewEditForm({ currentChallenges }) {
  const [changeCover, setChangeCover] = useState(false);
  const [files, setFile] = useState(null);

  const router = useRouter();

  const initial_ar = currentChallenges?.lang?.ar?.list || []
  const initial_en = currentChallenges?.lang?.en?.list || []
  const initial_cr = currentChallenges?.lang?.cr?.list || []

  const [Challenges_ar, Challenges_arDispatch] = useReducer(
    Challenges_arReducer,
    initial_ar,
  );


  const [Challenges_en, Challenges_enDispatch] = useReducer(
    Challenges_enReducer,
    initial_en,
  );


  const [Challenges_cr, Challenges_crDispatch] = useReducer(
    Challenges_crReducer,
    initial_cr,
  );

  
  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();

  const preview = useBoolean();


  const NewBlogSchema = Yup.object().shape({
    titleOne_ar: Yup.string().min(4).max(100).required('الجزء الأول من العنوان مطلوب باللغة العربية'),
    titleOne_en: Yup.string().min(4).max(100).required('English Firsts title is required'),
    titleOne_cr: Yup.string().min(4).max(100).required('kurd Firsts title is required'),

    span_ar: Yup.string().min(4).max(50).required('الكلمة المميزة مطلوبة بالعربية'),
    span_en: Yup.string().min(4).max(50).required('English special Word is required'),
    span_cr: Yup.string().min(4).max(50).required('kurd special Word is required'),

    titleTow_ar: Yup.string().min(1).max(50).required('الجزء الثاني من العنوان مطلوب باللغة العربية'),
    titleTow_en: Yup.string().min(1).max(50).required('English Seconds title is required'),
    titleTow_cr: Yup.string().min(1).max(50).required('kurd Seconds title is required'),

    descriptionOne_ar: Yup.string().min(10).max(5000).required('الوصف الأول مطلوب باللغة العربية'),
    descriptionOne_en: Yup.string().min(10).max(5000).required('English First Description is required'),
    descriptionOne_cr: Yup.string().min(10).max(5000).required('kurd First Description is required'),

    descriptionTow_ar: Yup.string().min(10).max(5000).required('الوصف الثاني مطلوب باللغة العربية'),
    descriptionTow_en: Yup.string().min(10).max(5000).required('English Second Description is required'),
    descriptionTow_cr: Yup.string().min(10).max(5000).required('kurd Second Description is required'),

    buttonOneT_ar: Yup.string().min(4).max(50).required('نص المفتاح الأول مطلوب بالعربية'),
    buttonOneT_en: Yup.string().min(4).max(50).required('english firsts button text is required'),
    buttonOneT_cr: Yup.string().min(4).max(50).required('kurd firsts button text is required'),

    buttonOneP_ar: Yup.string().min(4).max(100).required('مسار المفتاح الأول مطلوب بالعربية'),
    buttonOneP_en: Yup.string().min(4).max(100).required('english firsts button path is required'),
    buttonOneP_cr: Yup.string().min(4).max(100).required('kurd firsts button path is required'),

    list_ar: Yup.array().min(1).max(3).required('Arabic Challenges List is required'),
    list_en: Yup.array().min(1).max(3).required('English Challenges List is required'),
    list_cr: Yup.array().min(1).max(3).required('Kurd Challenges List is required'),

    image: Yup.string().required('Image File is required')
  });


  const defaultValues = useMemo(
    () => ({
      titleOne_ar: currentChallenges?.lang?.ar?.titleOne || '',
      titleOne_en: currentChallenges?.lang?.en?.titleOne || '',
      titleOne_cr: currentChallenges?.lang?.cr?.titleOne || '',
      span_ar: currentChallenges?.lang?.ar?.span || '',
      span_en: currentChallenges?.lang?.en?.span || '',
      span_cr: currentChallenges?.lang?.cr?.span || '',

      titleTow_ar: currentChallenges?.lang?.ar?.titleTow || '',
      titleTow_en: currentChallenges?.lang?.en?.titleTow || '',
      titleTow_cr: currentChallenges?.lang?.cr?.titleTow || '',

      descriptionOne_ar: currentChallenges?.lang?.ar?.descOne || '',
      descriptionOne_en: currentChallenges?.lang?.en?.descOne || '',
      descriptionOne_cr: currentChallenges?.lang?.cr?.descOne || '',

      descriptionTow_ar: currentChallenges?.lang?.ar?.descTow || '',
      descriptionTow_en: currentChallenges?.lang?.en?.descTow || '',
      descriptionTow_cr: currentChallenges?.lang?.cr?.descTow || '',

      buttonOneT_ar: currentChallenges?.lang?.ar?.buttonOne?.text || '',
      buttonOneT_en: currentChallenges?.lang?.en?.buttonOne?.text || '',
      buttonOneT_cr: currentChallenges?.lang?.cr?.buttonOne?.text || '',

      buttonOneP_ar: currentChallenges?.lang?.ar?.buttonOne?.link || '',
      buttonOneP_en: currentChallenges?.lang?.en?.buttonOne?.link || '',
      buttonOneP_cr: currentChallenges?.lang?.ar?.buttonOne?.link || '',

      buttonTowT_ar: currentChallenges?.lang?.ar?.buttonTow?.text || '',
      buttonTowT_en: currentChallenges?.lang?.en?.buttonTow?.text || '',
      buttonTowT_cr: currentChallenges?.lang?.cr?.buttonTow?.text || '',

      buttonTowP_ar: currentChallenges?.lang?.ar?.buttonTow?.link || '',
      buttonTowP_en: currentChallenges?.lang?.ar?.buttonTow?.link || '',
      buttonTpwP_cr: currentChallenges?.lang?.cr?.buttonTow?.link || '',

      list_ar: currentChallenges?.lang?.ar?.list || '',
      list_en: currentChallenges?.lang?.en?.list || '',
      list_cr: currentChallenges?.lang?.cr?.list || '',

      image: currentChallenges?.img || ''
    }),
    [currentChallenges]
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
    if (currentChallenges) {
      reset(defaultValues);
    }
  }, [currentChallenges, defaultValues, reset]);


  const onSubmit = handleSubmit(async (data) => {

      try{
        let newCover = ''
        if(changeCover){
          if(currentChallenges?.img){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentChallenges.img
            })
          }
          const formData = new FormData()
          if (values.image) {
        formData.append('file', values.image)

          const uploadImage = await axiosReq.post('/uploadFile/challenges', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        newCover = fileUrl
          } 
          

        }
      const requestValues = {
        img: newCover || currentChallenges.image,
        lang: {
          ar: {
            titleOne: values?.titleOne_ar,
            titleTow: values?.titleTow_ar,
            span: values?.span_ar,
            descOne: values?.descriptionOne_ar,
            descTow: values?.descriptionTow_ar,
            buttonOne: {
              text: values?.buttonOneT_ar,
              link: values?.buttonOneP_ar,
            },
            buttonTow: {
              text: values?.buttonTowT_ar,
              link: values?.buttonTowP_ar,
            },
            list: values.list_ar
          },
          en: {
            titleOne: values?.titleOne_en,
            titleTow: values?.titleTow_en,
            span: values?.span_en,
            descOne: values?.descriptionOne_en,
            descTow: values?.descriptionTow_en,
            buttonOne: {
              text: values?.buttonOneT_en,
              link: values?.buttonOneP_en,
            },
            buttonTow: {
              text: values?.buttonTowT_en,
              link: values?.buttonTowP_en,
            },
            list: values.list_en
          },
          cr: {
            titleOne: values?.titleOne_cr,
            titleTow: values?.titleTow_cr,
            span: values?.span_cr,
            descOne: values?.descriptionOne_cr,
            descTow: values?.descriptionTow_cr,
            buttonOne: {
              text: values?.buttonOneT_cr,
              link: values?.buttonOneP_cr,
            },
            buttonTow: {
              text: values?.buttonTowT_cr,
              link: values?.buttonTowP_cr,
            },
            list: values.list_cr
          }
        }
      }

       await axiosReq.put('/edit/challenges', requestValues) 
      reset();
      preview.onFalse();
      enqueueSnackbar(currentChallenges ? 'Update success!' : 'Create success!');
      window.location.reload()

      toast.success("Hero's Updated Successfully.")
    } catch (error) {
      toast.error(error.response.data.msg || 'Something went wrong!');
      console.error(error);
    }
    });


  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setChangeCover(true);
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      setFile(file)

      if (file) {
        setValue('image', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleRemoveFile = useCallback(() => {
    setValue('image', null);
    setFile(null)
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
            <RHFTextField name="titleOne_ar" label="الجزء الأول من العنوان بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField name="span_ar" label="الكلمة المميزة بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField name="titleTow_ar" label="الجزء الثاني من العنوان بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField type="text" name="descriptionOne_ar" label="الجزء الأول من الوصف بالعربية" multiline rows={3} sx={{
              direction: 'rtl'
            }} />

            <RHFTextField type="text" name="descriptionTow_ar" label="الجزء الثاني من الوصف بالعربية" multiline rows={3} sx={{
              direction: 'rtl'
            }} />

            <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            >
            <RHFTextField name="buttonOneT_ar" label="نص المفتاح الأول بالعربية" sx={{
              direction: 'rtl',
              width: '49%'
            }} />
            <RHFTextField name="buttonOneP_ar" label="مسار المفتاح الأول" sx={{
              width: '49%'
            }} />
            </Box>
            <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            >
            <RHFTextField name="buttonTowT_ar" label="نص المفتاح الثاني بالعربية" sx={{
              direction: 'rtl',
              width: '49%'
            }} />
            <RHFTextField name="buttonTowP_ar" label="مسار المفتاح الثاني" sx={{
              width: '49%'
            }} />
            </Box>

            <Stack spacing={0} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Arabic Challenges List</Typography>
            <AttributeForms setAllValue={setValue} challenges={Challenges_ar} challengesDispatch={Challenges_arDispatch} listName={'list_ar'} />
            </Stack>

            <CardHeader title="English Text" />

            <RHFTextField name="titleOne_en" label="english first section of title" />

            <RHFTextField name="span_en" label="english special word"/>

            <RHFTextField name="titleTow_en" label="english second section of title"/>

            <RHFTextField type="text" name="descriptionOne_en" label="english first description" multiline rows={3}/>

            <RHFTextField type="text" name="descriptionTow_en" label="english second description" multiline rows={3}/>

            <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            >
            <RHFTextField name="buttonOneT_en" label="english firsts button text" sx={{
              width: '49%'
            }} />
            <RHFTextField name="buttonOneP_en" label="firsts button link" sx={{
              width: '49%'
            }} />
            </Box>
            <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            >
            <RHFTextField name="buttonTowT_en" label="english seconds button text" sx={{
              width: '49%'
            }} />
            <RHFTextField name="buttonTowP_en" label="seconds button link" sx={{
              width: '49%'
            }} />
            </Box>

            <Stack spacing={0} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>English Challenges List</Typography>
            <AttributeForms setAllValue={setValue} challenges={Challenges_en} challengesDispatch={Challenges_enDispatch} listName={'list_en'} />
            </Stack>

            <CardHeader title="Kurd Text" />

            <RHFTextField name="titleOne_cr" label="kurd first section of title" />

            <RHFTextField name="titleTow_cr" label="kurd second section of title"/>

            <RHFTextField name="span_cr" label="kurd special word"/>

            <RHFTextField type="text" name="descriptionOne_cr" label="kurd first description" multiline rows={3}/>

            <RHFTextField type="text" name="descriptionTow_cr" label="kurd second description" multiline rows={3}/>

            <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            >
            <RHFTextField name="buttonOneT_cr" label="kurd firsts button text" sx={{
              width: '49%'
            }} />
            <RHFTextField name="buttonOneP_cr" label="firsts button link" sx={{
              width: '49%'
            }} />
            </Box>
            <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            >
            <RHFTextField name="buttonTowT_cr" label="kurd seconds button text" sx={{
              width: '49%'
            }} />
            <RHFTextField name="buttonTpwP_cr" label="seconds button link" sx={{
              width: '49%'
            }} />
            </Box>

            <Stack spacing={0} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Kurd Challenges List</Typography>
            <AttributeForms setAllValue={setValue} challenges={Challenges_cr} challengesDispatch={Challenges_crDispatch} listName={'list_cr'} />
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
          }        >
          Save Challenges
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

      <Grid xs={12} md={8}>
        <Card sx={{p: 2}}>
          {!mdUp && <CardHeader title="Image" />}
          <Stack spacing={1.5}>
              <Typography variant="subtitle2">Challenges Image</Typography>
              <RHFUpload
                name="image"
                maxSize={3145728}
                onDrop={handleDrop}
                onDelete={handleRemoveFile}
                file={values.image || files}

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

ChallengesNewEditForm.propTypes = {
  currentChallenges: PropTypes.object,
};
