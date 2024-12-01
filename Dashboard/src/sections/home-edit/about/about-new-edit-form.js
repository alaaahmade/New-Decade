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

// ----------------------------------------------------------------------

export default function AboutNewEditForm({ currentAbout }) {
  const [changeCover, setChangeCover] = useState(false);
  const [files, setFile] = useState(null);

  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();


  const NewBlogSchema = Yup.object().shape({
    title_ar: Yup.string().min(4).max(50).required('العنوان مطلوب باللغة العربية'),
    title_en: Yup.string().min(4).max(50).required('English title is required'),
    title_cr: Yup.string().min(4).max(50).required('kurd title is required'),

    span_ar: Yup.string().min(4).max(50).required('الكلمة المميزة مطلوبة بالعربية'),
    span_en: Yup.string().min(4).max(50).required('English Special Word is required'),
    span_cr: Yup.string().min(4).max(50).required('kurd Special Word is required'),

    descriptionOne_ar: Yup.string().min(10).max(5000).required('الوصف الأول مطلوب باللغة العربية'),
    descriptionOne_en: Yup.string().min(10).max(5000).required('English First Description is required'),
    descriptionOne_cr: Yup.string().min(10).max(5000).required('kurd First Description is required'),

    descriptionTow_ar: Yup.string().min(10).max(5000).required('الوصف الثاني مطلوب باللغة العربية'),
    descriptionTow_en: Yup.string().min(10).max(5000).required('English Second Second Description is required'),
    descriptionTow_cr: Yup.string().min(10).max(5000).required('kurd Description is required'),

    buttonOneT_ar: Yup.string().min(4).max(50).required('نص المفتاح الأول مطلوب بالعربية'),
    buttonOneT_en: Yup.string().min(4).max(50).required('english firsts button text is required'),
    buttonOneT_cr: Yup.string().min(4).max(50).required('kurd firsts button text is required'),
    buttonOneP_ar: Yup.string().min(4).max(100).required('مسار المفتاح الأول مطلوب بالعربية'),
    buttonOneP_en: Yup.string().min(4).max(100).required('english firsts button path is required'),
    buttonOneP_cr: Yup.string().min(4).max(100).required('kurd firsts button path is required'),

    buttonTowT_ar: Yup.string().min(4).max(50).required('نص المفتاح الثاني مطلوب بالعربية'),
    buttonTowT_en: Yup.string().min(4).max(50).required('english Second button text is required'),
    buttonTowT_cr: Yup.string().min(4).max(50).required('kurd Second button text is required'),
    buttonTowP_ar: Yup.string().min(4).max(100).required('مسار المفتاح الثاني مطلوب بالعربية'),
    buttonTowP_en: Yup.string().min(4).max(100).required('english Second button path is required'),
    buttonTowP_cr: Yup.string().min(4).max(100).required('kurd Second button path is required'),

    image: Yup.string().min(10).max(500).required('Image File is required')
  });


  const defaultValues = useMemo(
    () => ({
      title_ar: currentAbout?.lang?.ar?.title || '',
      title_en: currentAbout?.lang?.en?.title || '',
      title_cr: currentAbout?.lang?.cr?.title || '',

      span_ar: currentAbout?.lang?.ar.span || '',
      span_en: currentAbout?.lang?.en.span || '',
      span_cr: currentAbout?.lang?.cr.span || '',

      descriptionOne_ar: currentAbout?.lang?.ar?.descOne || '',
      descriptionOne_en: currentAbout?.lang?.en?.descOne || '',
      descriptionOne_cr: currentAbout?.lang?.cr?.descOne || '',

      descriptionTow_ar: currentAbout?.lang?.ar?.descTow || '',
      descriptionTow_en: currentAbout?.lang?.en?.descTow || '',
      descriptionTow_cr: currentAbout?.lang?.cr?.descTow || '',

      buttonOneT_ar: currentAbout?.lang?.ar?.buttonOne?.text || '',
      buttonOneT_en: currentAbout?.lang?.en?.buttonOne?.text || '',
      buttonOneT_cr: currentAbout?.lang?.cr?.buttonOne?.text || '',
      buttonOneP_ar: currentAbout?.lang?.ar?.buttonOne?.link || '',
      buttonOneP_en: currentAbout?.lang?.en?.buttonOne?.link || '',
      buttonOneP_cr: currentAbout?.lang?.ar?.buttonOne?.link || '',

      buttonTowT_ar: currentAbout?.lang?.ar?.buttonTow?.text || '',
      buttonTowT_en: currentAbout?.lang?.en?.buttonTow?.text || '',
      buttonTowT_cr: currentAbout?.lang?.cr?.buttonTow?.text || '',
      buttonTowP_ar: currentAbout?.lang?.ar?.buttonTow?.link || '',
      buttonTowP_en: currentAbout?.lang?.ar?.buttonTow?.link || '',
      buttonTowP_cr: currentAbout?.lang?.cr?.buttonTow?.link || '',

      image: currentAbout?.image || ''
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

  useEffect(() => {
    if (currentAbout) {
      reset(defaultValues);
    }
  }, [currentAbout, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
      try{
        let newCover = ''
        if(changeCover){
          if(currentAbout?.image){
            console.log(currentAbout.image);
            await axiosReq.post('/deleteFile', {
              fileUrl: currentAbout.image
            })
          }
          const formData = new FormData()
          if (values.image) {
        formData.append('file', values.image)

          const uploadImage = await axiosReq.post('/uploadFile/about', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        newCover = fileUrl
          } 
          

        }
      const requestValues = {
        image: newCover || currentAbout.image,
        lang: {
          ar: {
            title: values?.title_ar,
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
            }
          },
          en: {
            title: values?.title_en,
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
            }
          },
          cr: {
            title: values?.title_cr,
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
            }
          }
        }
      }

       await axiosReq.put('/edit/about', requestValues) 
      reset();
      enqueueSnackbar('Upclient/public/assets/images/about/icon-advanced-analytics.svg client/public/assets/images/about/icon-customer-experience.svg client/public/assets/images/about/icon-last-mile-excellence.svg client/public/assets/images/about/icon-sustainability.svg client/public/assets/images/about/icon-workforce-empowerment.svgdate success!');
      window.location.reload()

      toast.success("about's Updated Successfully.")
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
            <RHFTextField name="title_ar" label="العنوان بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField name="span_ar" label="الكلمة المميزة بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField type="text" name="descriptionOne_ar" label="الوصف الأول بالعربية" multiline rows={3} sx={{
              direction: 'rtl'
            }} />

            <RHFTextField type="text" name="descriptionTow_ar" label="الوصف الثاني بالعربية" multiline rows={3} sx={{
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
            <CardHeader title="English Text" />

            <RHFTextField name="title_en" label="english title" />

            <RHFTextField name="span_en" label="english Special Word"/>


            <RHFTextField type="text" name="descriptionOne_en" label="english First description" multiline rows={3}/>
            <RHFTextField type="text" name="descriptionTow_en" label="english Second description" multiline rows={3}/>

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
            <RHFTextField name="buttonOneP_en" label="firsts button path" sx={{
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
            <RHFTextField name="buttonTowP_en" label="seconds button path" sx={{
              width: '49%'
            }} />
            </Box>
            <CardHeader title="Kurd Text" />

            <RHFTextField name="title_cr" label="kurd first section of title" />

            <RHFTextField name="span_cr" label="kurd Special Word"/>

            <RHFTextField type="text" name="descriptionOne_cr" label="kurd First description" multiline rows={3}/>
            <RHFTextField type="text" name="descriptionTow_cr" label="kurd Second description" multiline rows={3}/>

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
            <RHFTextField name="buttonOneP_cr" label="firsts button path" sx={{
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
            <RHFTextField name="buttonTowP_cr" label="seconds button path" sx={{
              width: '49%'
            }} />
            </Box>

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
              <Typography variant="subtitle2">Image</Typography>
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

AboutNewEditForm.propTypes = {
  currentAbout: PropTypes.object,
};
