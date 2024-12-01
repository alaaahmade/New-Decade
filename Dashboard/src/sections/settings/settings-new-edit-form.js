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
import { ConfirmDialog } from 'src/components/custom-dialog';
import { AuthGardContext } from 'src/context/AuthContext';
import JwtService from 'src/services/JwtService';

// ----------------------------------------------------------------------

export default function SettingsNewEditForm({ currentSettings }) {
  const [open, setOpen] = useState(false)

  const router = useRouter();

  const mdUp = useResponsive('up', 'md');
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const {user, setUser} = useContext(AuthGardContext)

  const { enqueueSnackbar } = useSnackbar();


  const NewBlogSchema = Yup.object().shape({
    name: Yup.string().min(4).max(50).required('name is required'),
    email: Yup.string().min(4).max(50).required('email is required'),

    password: Yup.string(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], "Password's not match"),
    prevPassword: Yup.string()
  });


  const defaultValues = useMemo(
    () => ({
      name: currentSettings?.name || '',
      email: currentSettings?.email || '',
      password: '',
      confirmPassword: '',
      prevPassword: ''
    }),
    [currentSettings]
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
    if (currentSettings) {
      reset(defaultValues);
    }
  }, [currentSettings, defaultValues, reset]);

  const saveChanges = async () => {
    try {
      setIsLoading(true)
      if(values.prevPassword.length > 1 && values.prevPassword.length < 7){
        setError('Password must be mor than 7 character!')
        return
      } else if(!values.prevPassword.length) {
        setError('Enter password!')
        return
      }
      else {
        setError('')
      }
      // await axiosReq.post('/auth/confirm', {
      //   email: user.email,
      //   password: values.prevPassword,
      // } )
      const {data} = await axiosReq.put('/auth/security', {
        password: values.prevPassword,
        newPassword: values.password || null,
        confirmPassword: values.confirmPassword || null,
        email: values.email,
        name: values.name
      })

      JwtService.setToken(data.token);
      setUser({
        id: data?.data?.userId,
        name: data?.data?.name,
        role: data?.data?.role,
        email: data?.data?.email,
      });

      toast.success('user updated successfully.')
      setIsLoading(false)
      reset()
      router.push(paths.dashboard.root);
    } catch (error) {
      console.log(error);
      setIsLoading(false)

      if(error?.response?.data?.data?.message?.includes('password')) {
        setError(error?.response?.data?.data?.message)
      }
      toast.error(error?.response?.data?.data?.message)
    }
  }

  const onSubmit = handleSubmit(async (data) => {
      try{
        setOpen(true)

    } catch (error) {
      toast.error(error.response.data.msg || 'Something went wrong!');
      console.error(error);
    }
    });

    const onClose = () => {
      reset()
      setOpen(false)
    }
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

  const DialogInputs = (
    <RHFTextField  error={error.length} helperText={error} type={'password'} name="prevPassword" label="Password"  />
  )

  const DialogAction = (
    <LoadingButton
    type="submit"
    loading={isLoading}
    sx={{ ml: 2, 
      backgroundColor: '#212B36',
      color: '#fff'
    }}
    onClick={saveChanges}  >
    Save Changes
  </LoadingButton>
  )

  const renderDetails = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Account Settings
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Name, Email, Password...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          <Stack spacing={3} sx={{ p: 3 }}>

            <CardHeader title="Edit Settings" />

            <RHFTextField name="name" label="Name" />

            <RHFTextField name="email" label="Email"/>

            <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            >
            <RHFTextField type={'password'} name="password" label="new Password" sx={{
              width: '49%'
            }} />
            <RHFTextField type={'password'} name="confirmPassword" label="Confirm Password" sx={{
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
          type="button"
          variant="contained"
          size="large"
          loading={isSubmitting}
          sx={{ ml: 2}}
          onClick={async() => {
            await onSubmit()
          } }
        >
          Save Settings
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

      <ConfirmDialog
      title={'Are you sour to save changes'}
      open={open}
      inputs={DialogInputs}
      action={DialogAction}
      onClose={onClose}
      />
      
    </FormProvider>
  );
}

SettingsNewEditForm.propTypes = {
  currentSettings: PropTypes.object,
};
