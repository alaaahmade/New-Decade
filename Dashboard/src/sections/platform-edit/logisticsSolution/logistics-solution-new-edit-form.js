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
import { Solution_arReducer, Solution_enReducer, Solution_crReducer } from 'src/utils/attributeReduce';

// ----------------------------------------------------------------------

export default function LogisticsSolutionsNewEditForm({ logisticsSolution }) {
  const router = useRouter();

  const mdUp = useResponsive('up', 'md');
  const [rateOne, setRateOne] = useState(null)
  const [rateTow, setRateTow] = useState(null)
  const [changeRateOne, setChangeRateOne] = useState(false)
  const [changeRateTow, setChangeRateTow] = useState(false)

  const { enqueueSnackbar } = useSnackbar();
  
  const initial_ar = logisticsSolution?.lang?.ar.solutions || []
  const initial_en = logisticsSolution?.lang?.en.solutions || []
  const initial_cr = logisticsSolution?.lang?.cr.solutions || []
//////////////////////////here///////////////
  const [Solution_ar, Solution_arDispatch] = useReducer(
    Solution_arReducer,
    initial_ar,
  );

  const [Solution_en, Solution_enDispatch] = useReducer(
    Solution_enReducer,
    initial_en,
  );

  const [Solution_cr, Solution_crDispatch] = useReducer(
    Solution_crReducer,
    initial_cr,
  );

  const NewBlogSchema = Yup.object().shape({
    titleOne_ar: Yup.string().min(4).max(100).required('العنوان الأول مطلوب باللغة العربية'),
    titleOne_en: Yup.string().min(4).max(100).required('English First section of Title is required'),
    titleOne_cr: Yup.string().min(4).max(100).required('kurd First section of Title is required'),

    span_ar: Yup.string().min(4).max(50).required('الكلمة المميزة مطلوبة بالعربية'),
    span_en: Yup.string().min(4).max(50).required('English Special Word is required'),
    span_cr: Yup.string().min(4).max(50).required('kurd Special Word is required'),

    titleTow_ar: Yup.string().min(4).max(50).required('العنوان الثاني مطلوب باللغة العربية'),
    titleTow_en: Yup.string().min(4).max(50).required('English Second section of Title is required'),
    titleTow_cr: Yup.string().min(4).max(50).required('kurd Second section of Title is required'),

    solutions_ar: Yup.array().min(1).max(4).required('Avenues List مطلوب باللغة العربية'),
    solutions_en: Yup.array().min(1).max(4).required('English Avenues List'),
    solutions_cr: Yup.array().min(1).max(4).required('Kurd Avenues List'),

  });


  const defaultValues = useMemo(
    () => ({
      titleOne_ar: logisticsSolution?.lang?.ar?.titleOne || '',
      titleOne_en: logisticsSolution?.lang?.en?.titleOne || '',
      titleOne_cr: logisticsSolution?.lang?.cr?.titleOne || '',

      span_ar: logisticsSolution?.lang?.ar?.span || '',
      span_en: logisticsSolution?.lang?.en?.span || '',
      span_cr: logisticsSolution?.lang?.cr?.span || '',

      titleTow_ar: logisticsSolution?.lang?.ar?.titleTow || '',
      titleTow_en: logisticsSolution?.lang?.en?.titleTow || '',
      titleTow_cr: logisticsSolution?.lang?.cr?.titleTow || '',

      solutions_ar: logisticsSolution?.lang?.ar?.solutions ||[],
      solutions_en: logisticsSolution?.lang?.en?.solutions ||[],
      solutions_cr: logisticsSolution?.lang?.cr?.solutions ||[],

    }),
    [logisticsSolution]
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
    if (logisticsSolution) {
      reset(defaultValues);
    }
  }, [logisticsSolution, defaultValues, reset]);


  const onSubmit = handleSubmit(async (data) => {
      try{
      const requestValues = {
        lang: {
          ar: {
            titleOne: values?.titleOne_ar,
            titleTow: values?.titleTow_ar,
            span: values?.span_ar,
            solutions: values.solutions_ar
          },
          en: {
            titleOne: values?.titleOne_en,
            titleTow: values?.titleTow_en,
            span: values?.span_en,
            solutions: values.solutions_en
          },
          cr: {
            titleOne: values?.titleOne_cr,
            titleTow: values?.titleTow_cr,
            span: values?.span_cr,
            solutions: values.solutions_cr
          }
        }
      }
      await axiosReq.put('/edit/solutions', requestValues) 
      reset();
      enqueueSnackbar('Update success!');
      window.location.reload()

      toast.success("Avenues's Updated Successfully.")
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'Something went wrong!');
      console.error(error);
    }
    });

  const renderActions = (
    <>
      <Box xs={12} md={8} sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
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
          Save Solutions
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
              
              </Stack>
              </Card>
              </Grid>
              {mdUp && (
          <Grid md={4}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>
            Solution List
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Solution Title, paragraph, name...
            </Typography>
          </Grid>
        )}
              <Grid xs={12} md={8}>
              <Card sx={{p: 2}}>
                <CardHeader title="Arabic Solution List"/>
              <Stack spacing={3} sx={{ p: 0 }}>

                <Stack spacing={0} sx={{ p: 0 }}>
                <AttributeForms setAllValue={setValue} solutions={Solution_ar} solutionsDispatch={Solution_arDispatch} listName={'solutions_ar'} />
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
  
              <RHFTextField name="titleOne_en" label="English First Section of Title" />
  
              <RHFTextField name="span_en" label="English Special Word"/>

              <RHFTextField name="titleTow_en" label="English Second Section of Title" />
                
            </Stack>
  
          </Card>
        </Grid>
        {mdUp && (
          <Grid md={4}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>
            Solution List
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Solution Title, description, buttons...
            </Typography>
          </Grid>
        )}
              <Grid xs={12} md={8}>
              <Card>
              <Stack spacing={3} sx={{ p: 0 }}>
              <CardHeader title="English Solution Lis"/>

                <Stack spacing={0} sx={{ p: 3 }}>
    
                <Typography variant="h6" sx={{ mb: 0.5 }}>Solution</Typography>
                <AttributeForms setAllValue={setValue} solutions={Solution_en} solutionsDispatch={Solution_enDispatch} listName={'solutions_en'} />
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
  
              <RHFTextField name="titleOne_cr" label="kurd First Section of Title" />
  
              <RHFTextField name="span_cr" label="kurd Special Word"/>
  
              <RHFTextField name="titleTow_cr" label="kurd Second Section of Title" />
              
            </Stack>
  
          </Card>
        </Grid>
        {mdUp && (
          <Grid md={4}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>
              Solution List
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Solution Title, description, buttons...
            </Typography>
          </Grid>
        )}
              <Grid xs={12} md={8}>
              <Card>
              <Stack spacing={3} sx={{ p: 0 }}>
              <CardHeader title="Kurd Solution List"/>

                <Stack spacing={0} sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 0.5 }}>Solution</Typography>
                <AttributeForms setAllValue={setValue} solutions={Solution_cr} solutionsDispatch={Solution_crDispatch} listName={'solutions_cr'} />
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

      </>
    );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3} sx={{width:'100%'}}>
        {renderDetails}
              {/* <Card sx={{width:'100%'}}>
              <Stack spacing={3} sx={{ p: 0, width:'100%' }}> */}
              {renderActions}
            {/* </Stack>
          </Card> */}
      </Grid>
      
    </FormProvider>
  );
}

LogisticsSolutionsNewEditForm.propTypes = {
  logisticsSolution: PropTypes.object,
};
