import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useMemo, useEffect, useState, useReducer, useContext, useCallback } from 'react';
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
import { AttributeForms } from './AttributeForms';
import { Words_arReducer, Words_enReducer, Words_crReducer } from 'src/utils/attributeReduce';

// ----------------------------------------------------------------------

export default function CustomerWordsNewEditForm({ customerWords }) {
  const router = useRouter();

  const mdUp = useResponsive('up', 'md');
  const [rateOne, setRateOne] = useState(null)
  const [rateTow, setRateTow] = useState(null)
  const [changeRateOne, setChangeRateOne] = useState(false)
  const [changeRateTow, setChangeRateTow] = useState(false)

  const { enqueueSnackbar } = useSnackbar();
  
  const initial_ar = customerWords?.lang?.ar.words || []
  const initial_en = customerWords?.lang?.en.words || []
  const initial_cr = customerWords?.lang?.cr.words || []

  const [Words_ar, Words_arDispatch] = useReducer(
    Words_arReducer,
    initial_ar,
  );

  const [Words_en, Words_enDispatch] = useReducer(
    Words_enReducer,
    initial_en,
  );

  const [Words_cr, Words_crDispatch] = useReducer(
    Words_crReducer,
    initial_cr,
  );

  const NewBlogSchema = Yup.object().shape({
    title_ar: Yup.string().min(4).max(50).required('العنوان مطلوب باللغة العربية'),
    title_en: Yup.string().min(4).max(50).required('English title is required'),
    title_cr: Yup.string().min(4).max(50).required('kurd title is required'),

    span_ar: Yup.string().min(4).max(50).required('الكلمة المميزة مطلوبة بالعربية'),
    span_en: Yup.string().min(4).max(50).required('English Special Word is required'),
    span_cr: Yup.string().min(4).max(50).required('kurd Special Word is required'),

    description_ar: Yup.string().min(10).max(5000).required('الوصف مطلوب باللغة العربية'),
    description_en: Yup.string().min(10).max(5000).required('English Description is required'),
    description_cr: Yup.string().min(10).max(5000).required('kurd Description is required'),

    buttonOneT_ar: Yup.string().min(4).max(50).required('نص المفتاح الأول مطلوب'),
    buttonOneT_en: Yup.string().min(4).max(50).required('English first buttons text is required'),
    buttonOneT_cr: Yup.string().min(4).max(50).required('kurd first buttons text is required'),

    buttonOneP_ar: Yup.string().min(4).max(50).required('مسار المفتاح الأول مطلوب'),
    buttonOneP_en: Yup.string().min(4).max(50).required('English first buttons link is required'),
    buttonOneP_cr: Yup.string().min(4).max(50).required('kurd first buttons link is required'),

    buttonTowT_ar: Yup.string().min(4).max(50).required('نص المفتاح الثاني مطلوب'),
    buttonTowT_en: Yup.string().min(4).max(50).required('English second buttons text is required'),
    buttonTowT_cr: Yup.string().min(4).max(50).required('kurd second buttons text is required'),

    buttonTowP_ar: Yup.string().min(4).max(50).required('مسار المفتاح الثاني مطلوب'),
    buttonTowP_en: Yup.string().min(4).max(50).required('English second buttons link is required'),
    buttonTowP_cr: Yup.string().min(4).max(50).required('kurd second buttons link is required'),

    wordsList_ar: Yup.array().min(1).max(10).required('Avenues List مطلوب باللغة العربية'),
    wordsList_en: Yup.array().min(1).max(10).required('English Avenues List'),
    wordsList_cr: Yup.array().min(1).max(10).required('Kurd Avenues List'),

    rateOne: Yup.string().min(5).max(500).required('First Rate Image is required'),
    rateTow: Yup.string().min(5).max(500).required('second Rate Image is required')
  });


  const defaultValues = useMemo(
    () => ({
      title_ar: customerWords?.lang?.ar?.title || '',
      title_en: customerWords?.lang?.en?.title || '',
      title_cr: customerWords?.lang?.cr?.title || '',

      span_ar: customerWords?.lang?.ar?.span || '',
      span_en: customerWords?.lang?.en?.span || '',
      span_cr: customerWords?.lang?.cr?.span || '',

      description_ar: customerWords?.lang?.ar?.disc || '',
      description_en: customerWords?.lang?.en?.disc || '',
      description_cr: customerWords?.lang?.cr?.disc || '',

      buttonOneT_ar: customerWords?.lang?.ar?.buttonOne?.text || '',
      buttonOneT_en: customerWords?.lang?.en?.buttonOne?.text || '',
      buttonOneT_cr: customerWords?.lang?.cr?.buttonOne?.text || '',

      buttonOneP_ar: customerWords?.lang?.ar?.buttonOne?.link || '',
      buttonOneP_en: customerWords?.lang?.en?.buttonOne?.link || '',
      buttonOneP_cr: customerWords?.lang?.cr?.buttonOne?.link || '',

      buttonTowT_ar: customerWords?.lang?.ar?.buttonTow?.text || '',
      buttonTowT_en: customerWords?.lang?.en?.buttonTow?.text || '',
      buttonTowT_cr: customerWords?.lang?.cr?.buttonTow?.text || '',

      buttonTowP_ar: customerWords?.lang?.ar?.buttonTow?.link || '',
      buttonTowP_en: customerWords?.lang?.en?.buttonTow?.link || '',
      buttonTowP_cr: customerWords?.lang?.cr?.buttonTow?.link || '',

      wordsList_ar: customerWords?.lang?.ar?.words ||[],
      wordsList_en: customerWords?.lang?.en?.words ||[],
      wordsList_cr: customerWords?.lang?.cr?.words ||[],

      rateOne: customerWords?.rateOne || '',

      rateTow: customerWords?.rateTow || '',

    }),
    [customerWords]
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
    if (customerWords) {
      reset(defaultValues);
    }
  }, [customerWords, defaultValues, reset]);


  const onSubmit = handleSubmit(async (data) => {

      try{
        const newArray_ar = await Promise.all(values?.wordsList_ar.map(async(item, index) => {
          if (typeof item.image === 'object'){
          if(customerWords?.lang?.ar?.words[index]?.image){
            await axiosReq.post('/deleteFile', {
              fileUrl: customerWords?.lang?.ar?.words[index]?.image
            })
          }

          const formData = new FormData()
          if (item.image) {
        formData.append('file', item.image)

          const uploadImage = await axiosReq.post('/uploadFile/words', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.image = fileUrl
          } 
          
        }
        return item
      }))
        const newArray_en = await Promise.all(values?.wordsList_en.map(async(item, index) => {
          if (typeof item.image === 'object'){
          if(customerWords?.lang?.en?.words[index]?.image){
            await axiosReq.post('/deleteFile', {
              fileUrl: customerWords?.lang?.en?.words[index]?.image
            })
          }

          const formData = new FormData()
          if (item.image) {
        formData.append('file', item.image)

          const uploadImage = await axiosReq.post('/uploadFile/words', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.image = fileUrl
          } 
          
        }
        return item
      }))
        const newArray_cr = await Promise.all(values?.wordsList_cr.map(async(item, index) => {
          if (typeof item.image === 'object'){
          if(customerWords?.lang?.cr?.words[index]?.image){
            await axiosReq.post('/deleteFile', {
              fileUrl: customerWords?.lang?.cr?.words[index]?.image
            })
          }

          const formData = new FormData()
          if (item.image) {
        formData.append('file', item.image)

          const uploadImage = await axiosReq.post('/uploadFile/words', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

        const {fileUrl} = uploadImage.data.data
        item.image = fileUrl
          } 
          
        }
        return item
      }))
      await setValue('wordsList_ar', newArray_ar)
      await setValue('wordsList_en', newArray_en)
      await setValue('wordsList_cr', newArray_cr)

      let newRateOne = ''
      let newRateTow = ''

      if(changeRateOne) {
        if(customerWords?.rateOne){
          await axiosReq.post('/deleteFile', {
            fileUrl: customerWords?.rateOne
          })
        }

        const formData = new FormData()
        if (values.rateOne) {
      formData.append('file', values.rateOne)

        const uploadImage = await axiosReq.post('/uploadFile/words', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }});

      const {fileUrl} = uploadImage.data.data
      newRateOne = fileUrl
        } 
      }
      if(changeRateTow) {
        if(customerWords?.rateTow){
          await axiosReq.post('/deleteFile', {
            fileUrl: customerWords?.rateTow
          })
        }

        const formData = new FormData()
        if (values.rateTow) {
      formData.append('file', values.rateTow)

        const uploadImage = await axiosReq.post('/uploadFile/words', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }});

      const {fileUrl} = uploadImage.data.data
      newRateTow = fileUrl
        } 
      }
      const requestValues = {
        rateOne: newRateOne || customerWords?.rateOne,
        rateTow: newRateTow || customerWords?.rateTow,
        lang: {
          ar: {
            title: values?.title_ar,
            span: values?.span_ar,
            disc: values?.description_ar,
            buttonOne: {
              text: values?.buttonOneT_ar,
              link: values?.buttonOneP_ar
            },
            buttonTow: {
              text: values?.buttonTowT_ar,
              link: values?.buttonTowP_ar
            },
            words: values.wordsList_ar
          },
          en: {
            title: values?.title_en,
            span: values?.span_en,
            disc: values?.description_en,
            buttonOne: {
              text: values?.buttonOneT_en,
              link: values?.buttonOneP_en
            },
            buttonTow: {
              text: values?.buttonTowT_en,
              link: values?.buttonTowP_en
            },
            words: values.wordsList_en
          },
          cr: {
            title: values?.title_cr,
            span: values?.span_cr,
            disc: values?.description_cr,
            buttonOne: {
              text: values?.buttonOneT_cr,
              link: values?.buttonOneP_cr
            },
            buttonTow: {
              text: values?.buttonTowT_cr,
              link: values?.buttonTowP_cr
            },
            words: values.wordsList_cr
          }
        }
      }
      await axiosReq.put('/edit/words', requestValues) 
      reset();
      enqueueSnackbar('Update success!');
      window.location.reload()

      toast.success("Avenues's Updated Successfully.")
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'Something went wrong!');
      console.error(error);
    }
    });

    const handleDropRateOne = useCallback(
      (acceptedFiles) => {
        const file = acceptedFiles[0];
        setChangeRateOne(true);
        const newFile = Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
  
        setRateOne(file)
  
        if (file) {
          setValue('rateOne', newFile, { shouldValidate: true });
        }
      },
      [setValue]
    );
  
    const handleRemoveRateOne = useCallback(() => {
      setValue('rateOne', null);
      setRateOne(null)
    }, [setValue]);

    const handleDropRateTow = useCallback(
      (acceptedFiles) => {
        const file = acceptedFiles[0];
        setChangeRateTow(true);
        const newFile = Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
  
        setRateTow(file)
  
        if (file) {
          setValue('rateTow', newFile, { shouldValidate: true });
        }
      },
      [setValue]
    );
  
    const handleRemoveRateTow = useCallback(() => {
      setValue('rateTow', null);
      setRateTow(null)
    }, [setValue]);
  

  const renderActions = (
    <>
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
      <Grid xs={12} md={8} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
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
          Save Customer Words
        </LoadingButton>
        
      </Grid>
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
              <RHFTextField name="title_ar" label="العنوان بالعربية" sx={{
                direction: 'rtl'
              }} />
  
              <RHFTextField name="span_ar" label="الكلمة المميزة بالعربية" sx={{
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
              </Stack>
              </Card>
              </Grid>
              {mdUp && (
          <Grid md={4}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>
            Words List
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Words Title, paragraph, name...
            </Typography>
          </Grid>
        )}
              <Grid xs={12} md={8}>
              <Card sx={{p: 2}}>
                <CardHeader title="Arabic Words List"/>
              <Stack spacing={3} sx={{ p: 0 }}>

                <Stack spacing={0} sx={{ p: 0 }}>
                <AttributeForms setAllValue={setValue} words={Words_ar} wordsDispatch={Words_arDispatch} listName={'wordsList_ar'} />
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
  
              <RHFTextField name="title_en" label="English title" />
  
              <RHFTextField name="span_en" label="English Special Word"/>
  
              <RHFTextField type="text" name="description_en" label="English description" multiline rows={3}/>
              
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
              <RHFTextField name="buttonOneT_en" label="English first buttons text" sx={{
                width: '49%'
              }} />

              <RHFTextField name="buttonOneP_en" label="English first buttons link" sx={{
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
              <RHFTextField name="buttonTowT_en" label="English second buttons text" sx={{
                width: '49%'
              }} />

              <RHFTextField name="buttonTowP_en" label="English second buttons link" sx={{
                width: '49%'
              }} />
              </Box>
            </Stack>
  
          </Card>
        </Grid>
        {mdUp && (
          <Grid md={4}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>
            Words List
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Words Title, description, buttons...
            </Typography>
          </Grid>
        )}
              <Grid xs={12} md={8}>
              <Card>
              <Stack spacing={3} sx={{ p: 0 }}>
              <CardHeader title="English Words Lis"/>

                <Stack spacing={0} sx={{ p: 3 }}>
    
                <Typography variant="h6" sx={{ mb: 0.5 }}>Words</Typography>
                <AttributeForms setAllValue={setValue} words={Words_en} wordsDispatch={Words_enDispatch} listName={'wordsList_en'} />
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
  
              <RHFTextField name="title_cr" label="kurd title" />
  
              <RHFTextField name="span_cr" label="kurd Special Word"/>
  
              <RHFTextField type="text" name="description_cr" label="kurd description" multiline rows={3}/>
              
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
              <RHFTextField name="buttonOneT_cr" label="Kurd first buttons text" sx={{
                width: '49%'
              }} />

              <RHFTextField name="buttonOneP_cr" label="Kurd first buttons link" sx={{
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
              <RHFTextField name="buttonTowT_cr" label="Kurd second buttons text" sx={{
                width: '49%'
              }} />

              <RHFTextField name="buttonTowP_cr" label="Kurd second buttons link" sx={{
                width: '49%'
              }} />
              </Box>
            </Stack>
  
          </Card>
        </Grid>
        {mdUp && (
          <Grid md={4}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>
              Words List
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Words Title, description, buttons...
            </Typography>
          </Grid>
        )}
              <Grid xs={12} md={8}>
              <Card>
              <Stack spacing={3} sx={{ p: 0 }}>
              <CardHeader title="Kurd Words List"/>

                <Stack spacing={0} sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 0.5 }}>Words</Typography>
                <AttributeForms setAllValue={setValue} words={Words_cr} wordsDispatch={Words_crDispatch} listName={'wordsList_cr'} />
                </Stack>
  
            </Stack>
  
          </Card>
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
            First Rate Image...
          </Typography>
          </Grid>

          )}

      <Grid xs={12} md={8}>
        <Card sx={{p: 2}}>
          {!mdUp && <CardHeader title="Images" />}
          <Stack spacing={1.5} sx={{m: 2}}>
              <Typography variant="subtitle2">{`First Rate Image`}</Typography>
              <RHFUpload
                name="rateOne"
                maxSize={3145728}
                onDrop={handleDropRateOne}
                onDelete={handleRemoveRateOne}
                file={values.rateOne || rateOne}

              />

            </Stack>

            <Stack spacing={1.5} sx={{m: 2}}>
              <Typography variant="subtitle2">{`Second Rate Image`}</Typography>
              <RHFUpload
                name="rateTow"
                maxSize={3145728}
                onDrop={handleDropRateTow}
                onDelete={handleRemoveRateTow}
                file={values.rateTow || rateTow}

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
        {/* <Grid xs={12} md={8}>
              <Card>
              <Stack spacing={3} sx={{ p: 0 }}>
              <CardHeader title="Actions" /> */}
            {renderActions}
            {/* </Stack>
  
          </Card> */}
        {/* </Grid> */}
      </Grid>
      
    </FormProvider>
  );
}

CustomerWordsNewEditForm.propTypes = {
  customerWords: PropTypes.object,
};
