import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useCallback, useMemo, useEffect, useState, useReducer } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
// import {AttributeReducer} from 'src/utils/attributeReduce';

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

export default function HeroNewEditForm({ currentHero }) {
  const [changeCover, setChangeCover] = useState(false);
  const [files, setFile] = useState(null);

  const router = useRouter();

  
  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();

  const preview = useBoolean();


  const NewBlogSchema = Yup.object().shape({
    titleOne_ar: Yup.string().min(4).max(50).required('الجزء الأول من العنوان مطلوب باللغة العربية'),
    titleOne_en: Yup.string().min(4).max(50).required('English Firsts title is required'),
    titleOne_cr: Yup.string().min(4).max(50).required('kurd Firsts title is required'),
    titleTow_ar: Yup.string().min(4).max(50).required('الجزء الثاني من العنوان مطلوب باللغة العربية'),
    titleTow_en: Yup.string().min(4).max(50).required('English Seconds title is required'),
    titleTow_cr: Yup.string().min(4).max(50).required('kurd Seconds title is required'),
    description_ar: Yup.string().min(10).max(5000).required('الوصف مطلوب باللغة العربية'),
    description_en: Yup.string().min(10).max(5000).required('English Description is required'),
    description_cr: Yup.string().min(10).max(5000).required('kurd Description is required'),
    buttonOneT_ar: Yup.string().min(4).max(50).required('نص المفتاح الأول مطلوب بالعربية'),
    buttonOneT_en: Yup.string().min(4).max(50).required('english firsts button text is required'),
    buttonOneT_cr: Yup.string().min(4).max(50).required('kurd firsts button text is required'),
    buttonOneP_ar: Yup.string().min(4).max(100).required('مسار المفتاح الأول مطلوب بالعربية'),
    buttonOneP_en: Yup.string().min(4).max(100).required('english firsts button path is required'),
    buttonOneP_cr: Yup.string().min(4).max(100).required('kurd firsts button path is required'),
    featured_ar: Yup.string().min(4).max(50).required('الكلمة المميزة مطلوبة بالعربية'),
    featured_en: Yup.string().min(4).max(50).required('English special word is required'),
    featured_cr: Yup.string().min(4).max(50).required('kurd special word is required'),
    image: Yup.string().min(10).max(500).required('Image File is required')
  });


  const defaultValues = useMemo(
    () => ({
      titleOne_ar: currentHero?.lang?.ar?.titleOne || '',
      titleOne_en: currentHero?.lang?.en?.titleOne || '',
      titleOne_cr: currentHero?.lang?.cr?.titleOne || '',
      titleTow_ar: currentHero?.lang?.ar?.titleTow || '',
      titleTow_en: currentHero?.lang?.en?.titleTow || '',
      titleTow_cr: currentHero?.lang?.cr?.titleTow || '',
      description_ar: currentHero?.lang?.ar?.description || '',
      description_en: currentHero?.lang?.en?.description || '',
      description_cr: currentHero?.lang?.cr?.description || '',
      buttonOneT_ar: currentHero?.lang?.ar?.buttonOne?.text || '',
      buttonOneT_en: currentHero?.lang?.en?.buttonOne?.text || '',
      buttonOneT_cr: currentHero?.lang?.cr?.buttonOne?.text || '',
      buttonOneP_ar: currentHero?.lang?.ar?.buttonOne?.link || '',
      buttonOneP_en: currentHero?.lang?.en?.buttonOne?.link || '',
      buttonOneP_cr: currentHero?.lang?.ar?.buttonOne?.link || '',
      buttonTowT_ar: currentHero?.lang?.ar?.buttonTow?.text || '',
      buttonTowT_en: currentHero?.lang?.en?.buttonTow?.text || '',
      buttonTowT_cr: currentHero?.lang?.cr?.buttonTow?.text || '',
      buttonTowP_ar: currentHero?.lang?.ar?.buttonTow?.link || '',
      buttonTowP_en: currentHero?.lang?.ar?.buttonTow?.link || '',
      buttonTowP_cr: currentHero?.lang?.cr?.buttonTow?.link || '',
      featured_ar: currentHero?.lang?.ar?.featured || '',
      featured_en: currentHero?.lang?.en?.featured || '',
      featured_cr: currentHero?.lang?.cr?.featured || '',
      image: currentHero?.image || ''
    }),
    [currentHero]
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
    if (currentHero) {
      reset(defaultValues);
    }
  }, [currentHero, defaultValues, reset]);


  const onSubmit = handleSubmit(async (data) => {

      try{
        let newCover = ''
        if(changeCover){
          if(currentHero?.image){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentHero.image
            })
          }
          const formData = new FormData()
          if (values.image) {
        formData.append('file', values.image)

          const uploadImage = await axiosReq.post('/uploadFile/hero', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        newCover = fileUrl
          } 
          

        }
      const requestValues = {
        image: newCover || currentHero.image,
        lang: {
          ar: {
            titleOne: values?.titleOne_ar,
            titleTow: values?.titleTow_ar,
            description: values?.description_ar,
            featured: values?.featured_ar,
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
            titleOne: values?.titleOne_en,
            titleTow: values?.titleTow_en,
            description: values?.description_en,
            featured: values?.featured_en,
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
            titleOne: values?.titleOne_cr,
            titleTow: values?.titleTow_cr,
            description: values?.description_cr,
            featured: values?.featured_cr,
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

       await axiosReq.put('/edit/hero', requestValues) 
      reset();
      preview.onFalse();
      enqueueSnackbar(currentHero ? 'Update success!' : 'Create success!');
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

            <RHFTextField name="titleTow_ar" label="الجزء الثاني من العنوان بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField name="featured_ar" label="الكلمة المميزة بالعربية" sx={{
              direction: 'rtl'
            }} />

            <RHFTextField type="text" name="description_ar" label="الوصف بالعربية" multiline rows={3} sx={{
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

            <RHFTextField name="titleOne_en" label="english first section of title" />

            <RHFTextField name="titleTow_en" label="english second section of title"/>

            <RHFTextField name="featured_en" label="english special word"/>

            <RHFTextField type="text" name="description_en" label="english description" multiline rows={3}/>

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

            <RHFTextField name="titleOne_cr" label="kurd first section of title" />

            <RHFTextField name="titleTow_cr" label="kurd second section of title"/>

            <RHFTextField name="featured_cr" label="kurd special word"/>

            <RHFTextField type="text" name="description_cr" label="kurd description" multiline rows={3}/>

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
          onClick={handleSubmit}
        >
          Save Hero
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

HeroNewEditForm.propTypes = {
  currentHero: PropTypes.object,
};
