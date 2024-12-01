import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useCallback, useMemo, useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  Input,
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
} from 'src/components/hook-form/index';
//
import { axiosReq } from 'src/utils/axiosReq';
import {LinksBox} from 'src/components/hook-form/LinksBox';

// ----------------------------------------------------------------------

export default function ServiceNewEditForm({ currentFooter }) {
  const [listP_ar , setListP_ar] = useState([])
  const [listP_en , setListP_en] = useState([])
  const [listP_cr , setListP_cr] = useState([])

  const [listI_ar , setListI_ar] = useState([])
  const [listI_en , setListI_en] = useState([])
  const [listI_cr , setListI_cr] = useState([])

  const [listR_ar , setListR_ar] = useState([])
  const [listR_en , setListR_en] = useState([])
  const [listR_cr , setListR_cr] = useState([])

  const [listC_ar , setListC_ar] = useState([])
  const [listC_en , setListC_en] = useState([])
  const [listC_cr , setListC_cr] = useState([])

  const [linkTitleP_ar, setLinkTitleP_ar] = useState('')
  const [linkPathP_ar, setLinkPathP_ar] = useState('') 
  const [linkTitleP_en, setLinkTitleP_en] = useState('')
  const [linkPathP_en, setLinkPathP_en] = useState('') 
  const [linkTitleP_cr, setLinkTitleP_cr] = useState('')
  const [linkPathP_cr, setLinkPathP_cr] = useState('') 

  const [linkTitleI_ar, setLinkTitleI_ar] = useState('')
  const [linkPathI_ar, setLinkPathI_ar] = useState('') 
  const [linkTitleI_en, setLinkTitleI_en] = useState('')
  const [linkPathI_en, setLinkPathI_en] = useState('') 
  const [linkTitleI_cr, setLinkTitleI_cr] = useState('')
  const [linkPathI_cr, setLinkPathI_cr] = useState('')

  const [linkTitleR_ar, setLinkTitleR_ar] = useState('')
  const [linkPathR_ar, setLinkPathR_ar] = useState('') 
  const [linkTitleR_en, setLinkTitleR_en] = useState('')
  const [linkPathR_en, setLinkPathR_en] = useState('') 
  const [linkTitleR_cr, setLinkTitleR_cr] = useState('')
  const [linkPathR_cr, setLinkPathR_cr] = useState('') 

  const [linkTitleC_ar, setLinkTitleC_ar] = useState('')
  const [linkPathC_ar, setLinkPathC_ar] = useState('') 
  const [linkTitleC_en, setLinkTitleC_en] = useState('')
  const [linkPathC_en, setLinkPathC_en] = useState('') 
  const [linkTitleC_cr, setLinkTitleC_cr] = useState('')
  const [linkPathC_cr, setLinkPathC_cr] = useState('') 

  const [file, setFile] = useState(null)
  const router = useRouter();
  
  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();

  const preview = useBoolean();

  const NewBlogSchema = Yup.object().shape({
    subscribeTitle_ar: Yup.string().max(100).required('عنوان الاشتراك مطلوب بالعربية'),
    subscribeTitle_en: Yup.string().max(100).required('English subscribe section Title is required'),
    subscribeTitle_cr: Yup.string().max(100).required('Kurd subscribe section Title is required'),

    subscribeButton_ar: Yup.string().max(50).required('نص مفتاح الاشتراك مطلوب بالعربية'),
    subscribeButton_en: Yup.string().max(50).required('English subscribe button text is required'),
    subscribeButton_cr: Yup.string().max(50).required('Kurd subscribe button text is required'),

    platFormLinks_ar: Yup.array().min(1).required('nav bar platForm Links is required'),
    platFormLinks_en: Yup.array().min(1).required('nav bar platForm Links is required'),
    platFormLinks_cr: Yup.array().min(1).required('nav bar platForm Links is required'),

    industriesLinks_ar: Yup.array().min(1).required('nav bar industries Links is required'),
    industriesLinks_en: Yup.array().min(1).required('nav bar industries Links is required'),
    industriesLinks_cr: Yup.array().min(1).required('nav bar industries Links is required'),

    resourcesLinks_ar: Yup.array().min(1).required('nav bar resources Links is required'),
    resourcesLinks_en: Yup.array().min(1).required('nav bar resources Links is required'),
    resourcesLinks_cr: Yup.array().min(1).required('nav bar resources Links is required'),

    companyLinks_ar: Yup.array().min(1).required('nav bar company Links is required'),
    companyLinks_en: Yup.array().min(1).required('nav bar company Links is required'),
    companyLinks_cr: Yup.array().min(1).required('nav bar company Links is required'),
  });

  const defaultValues = useMemo(
    () => ({
      subscribeTitle_ar: currentFooter?.lang?.ar?.subscribeTitle || '',
      subscribeTitle_en: currentFooter?.lang?.en?.subscribeTitle || '',
      subscribeTitle_cr: currentFooter?.lang?.cr?.subscribeTitle || '',

      subscribeButton_ar: currentFooter?.lang?.ar?.subscribeButton || '',
      subscribeButton_en: currentFooter?.lang?.en?.subscribeButton || '',
      subscribeButton_cr: currentFooter?.lang?.cr?.subscribeButton || '',

      platFormLinks_ar: currentFooter?.lang?.ar?.platForm || [],
      platFormLinks_en: currentFooter?.lang?.en?.platForm || [],
      platFormLinks_cr: currentFooter?.lang?.cr?.platForm || [],

      industriesLinks_ar: currentFooter?.lang?.ar?.industries || [],
      industriesLinks_en: currentFooter?.lang?.en?.industries || [],
      industriesLinks_cr: currentFooter?.lang?.cr?.industries || [],

      resourcesLinks_ar: currentFooter?.lang?.ar?.resources || [],
      resourcesLinks_en: currentFooter?.lang?.en?.resources || [],
      resourcesLinks_cr: currentFooter?.lang?.cr?.resources || [],
      
      companyLinks_ar: currentFooter?.lang?.ar?.company || [],
      companyLinks_en: currentFooter?.lang?.en?.company || [],
      companyLinks_cr: currentFooter?.lang?.cr?.company || [],
    }),
    [currentFooter]
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
    if (currentFooter) {
      reset(defaultValues);
    }
  }, [currentFooter, defaultValues, reset]);


  const onSubmit = handleSubmit(async (data) => {
      try{
      const requestValues = {
        lang: {
          ar: {
            subscribeTitle: values.subscribeTitle_ar,
            subscribeButton: values.subscribeButton_ar,
            platForm: listP_ar || values?.platFormLinks_ar,
            industries: listI_ar || values?.industriesLinks_ar,
            resources: listR_ar || values?.resourcesLinks_ar,
            company: listC_ar || values?.companyLinks_ar
            },
          en: {
            subscribeTitle: values.subscribeTitle_en,
            subscribeButton: values.subscribeButton_en,
            platForm: listP_en || values?.platFormLinks_en,
            industries: listI_en || values?.industriesLinks_en,
            resources: listR_en || values?.resourcesLinks_en,
            company: listC_en || values?.companyLinks_en
          },
          cr: {
            subscribeTitle: values.subscribeTitle_cr,
            subscribeButton: values.subscribeButton_cr,
            platForm: listP_cr || values?.platFormLinks_cr,
            industries: listI_cr || values?.industriesLinks_cr,
            resources: listR_cr || values?.resourcesLinks_cr,
            company: listC_cr || values?.companyLinks_cr,
          }
        }
        
      }
       await axiosReq.put('/edit/footer', requestValues) 
      reset();
      preview.onFalse();
      enqueueSnackbar('Update success!');
      toast.success('Headers Updated successfully')
      window.location.reload()

    } catch (error) {
      toast.error(error?.response?.data?.msg || 'Something went wrong!');
      console.error(error);
    }
    }
  );

  useEffect(() => {
      setListP_ar(currentFooter?.lang?.ar?.platForm)
      setListP_en(currentFooter?.lang?.en?.platForm)
      setListP_cr(currentFooter?.lang?.cr?.platForm)

      setListI_ar(currentFooter?.lang?.ar?.industries)
      setListI_en(currentFooter?.lang?.en?.industries)
      setListI_cr(currentFooter?.lang?.cr?.industries)

      setListR_ar(currentFooter?.lang?.ar?.resources)
      setListR_en(currentFooter?.lang?.en?.resources)
      setListR_cr(currentFooter?.lang?.cr?.resources)

      setListC_ar(currentFooter?.lang?.ar?.resources)
      setListC_en(currentFooter?.lang?.en?.resources)
      setListC_cr(currentFooter?.lang?.cr?.resources)
  }, [
    currentFooter?.lang?.ar?.platForm,
    currentFooter?.lang?.en?.platForm,
    currentFooter?.lang?.cr?.platForm,
  ]);

  const handleAddItemP_ar = () => {
    if(linkTitleP_ar && linkPathP_ar){
      setListP_ar([...listP_ar, {title: linkTitleP_ar, path: linkPathP_ar}])
      setLinkTitleP_ar('')
      setLinkPathP_ar('')
    }
  }
  const handleAddItemP_en = () => {
    if(linkTitleP_en && linkPathP_en){
      setListP_en([...listP_en, {title: linkTitleP_en, path: linkPathP_en}])
      setLinkTitleP_en('')
      setLinkPathP_en('')
    }
  }
  const handleAddItemP_cr = () => {
    if(linkTitleP_cr && linkPathP_cr){
      setListP_cr([...listP_cr, {title: linkTitleP_cr, path: linkPathP_cr}])
      setLinkTitleP_cr('')
      setLinkPathP_cr('')
    }
  }

  const handleAddItemI_ar = () => {
    if(linkTitleI_ar && linkPathI_ar){
      setListI_ar([...listI_ar, {title: linkTitleI_ar, path: linkPathI_ar}])
      setLinkTitleI_ar('')
      setLinkPathI_ar('')
    }
  }
  const handleAddItemI_en = () => {
    if(linkTitleI_en && linkPathI_en){
      setListI_en([...listI_en, {title: linkTitleI_en, path: linkPathI_en}])
      setLinkTitleI_en('')
      setLinkPathI_en('')
    }
  }
  const handleAddItemI_cr = () => {
    if(linkTitleI_cr && linkPathI_cr){
      setListI_cr([...listI_cr, {title: linkTitleI_cr, path: linkPathI_cr}])
      setLinkTitleI_cr('')
      setLinkPathI_cr('')
    }
  }

  const handleAddItemR_ar = () => {
    if(linkTitleR_ar && linkPathR_ar){
      setListR_ar([...listR_ar, {title: linkTitleR_ar, path: linkPathR_ar}])
      setLinkTitleR_ar('')
      setLinkPathR_ar('')
    }
  }
  const handleAddItemR_en = () => {
    if(linkTitleR_en && linkPathR_en){
      setListR_en([...listR_en, {title: linkTitleR_en, path: linkPathR_en}])
      setLinkTitleR_en('')
      setLinkPathR_en('')
    }
  }
  const handleAddItemR_cr = () => {
    if(linkTitleR_cr && linkPathR_cr){
      setListR_cr([...listR_cr, {title: linkTitleR_cr, path: linkPathR_cr}])
      setLinkTitleR_cr('')
      setLinkPathR_cr('')
    }
  }

  const handleAddItemC_ar = () => {
    if(linkTitleC_ar && linkPathC_ar){
      setListC_ar([...listC_ar, {title: linkTitleC_ar, path: linkPathC_ar}])
      setLinkTitleC_ar('')
      setLinkPathC_ar('')
    }
  }
  const handleAddItemC_en = () => {
    if(linkTitleC_en && linkPathC_en){
      setListC_en([...listC_en, {title: linkTitleC_en, path: linkPathC_en}])
      setLinkTitleC_en('')
      setLinkPathC_en('')
    }
  }
  const handleAddItemC_cr = () => {
    if(linkTitleC_cr && linkPathC_cr){
      setListC_cr([...listC_cr, {title: linkTitleC_cr, path: linkPathC_cr}])
      setLinkTitleC_cr('')
      setLinkPathC_cr('')
    }
  }

  const handleChangeLinkP_ar = (e) => {
    if (e.target.name === 'title'){

      setLinkTitleP_ar(e.target.value )
    }else {
      setLinkPathP_ar(e.target.value)
    }
  }

  const handleChangeLinkP_en = (e) => {
    if (e.target.name === 'title'){

      setLinkTitleP_en(e.target.value )
    }else {
      setLinkPathP_en(e.target.value)
    }
  }
  const handleChangeLinkP_cr = (e) => {
    if (e.target.name === 'title'){

      setLinkTitleP_cr(e.target.value )
    }else {
      setLinkPathP_cr(e.target.value)
    }
  }

  const handleChangeLinkI_ar = (e) => {
    if (e.target.name === 'title'){

      setLinkTitleI_ar(e.target.value )
    }else {
      setLinkPathI_ar(e.target.value)
    }
  }

  const handleChangeLinkI_en = (e) => {
    if (e.target.name === 'title'){

      setLinkTitleI_en(e.target.value )
    }else {
      setLinkPathI_en(e.target.value)
    }
  }

  const handleChangeLinkI_cr = (e) => {
    if (e.target.name === 'title'){

      setLinkTitleI_cr(e.target.value )
    }else {
      setLinkPathI_cr(e.target.value)
    }
  }

  const handleChangeLinkR_ar = (e) => {
    if (e.target.name === 'title'){

      setLinkTitleR_ar(e.target.value )
    }else {
      setLinkPathR_ar(e.target.value)
    }
  }

  const handleChangeLinkR_en = (e) => {
    if (e.target.name === 'title'){

      setLinkTitleR_en(e.target.value )
    }else {
      setLinkPathR_en(e.target.value)
    }
  }

  const handleChangeLinkR_cr = (e) => {
    if (e.target.name === 'title'){

      setLinkTitleR_cr(e.target.value )
    }else {
      setLinkPathR_cr(e.target.value)
    }
  }

  const handleChangeLinkC_ar = (e) => {
    if (e.target.name === 'title'){

      setLinkTitleC_ar(e.target.value )
    }else {
      setLinkPathC_ar(e.target.value)
    }
  }

  const handleChangeLinkC_en = (e) => {
    if (e.target.name === 'title'){

      setLinkTitleC_en(e.target.value )
    }else {
      setLinkPathC_en(e.target.value)
    }
  }

  const handleChangeLinkC_cr = (e) => {
    if (e.target.name === 'title'){

      setLinkTitleC_cr(e.target.value )
    }else {
      setLinkPathC_cr(e.target.value)
    }
  }

  const handleDeleteItem = (setList, i) => {
    setList((prev => prev.filter((e, n) => n !== i)))
  }

  const renderDetails = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            HeadLine
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            HeadLine Text, link text,...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="HeadLine" />}

          <CardHeader title="Arabic Text" />
          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField name="subscribeTitle_ar" label='نص الأشتراك العلوي بالعربية'
            sx={{
              direction: 'rtl'
            }}
            />
            <RHFTextField type="text" name="subscribeButton_ar" label="نص مفتاح الاشتراك باللغة العربية"
              sx={{
                direction: 'rtl'
              }}
            />

            <CardHeader title="English Text" />

            <RHFTextField type="text" name="subscribeTitle_en" label="English subscribe section title"/>
            <RHFTextField type="text" name="subscribeButton_en" label="English subscribe Button text"/>

            <CardHeader title="Kurd Text" />

            <RHFTextField type="text" name="subscribeTitle_cr" label="Kurd subscribe section title"/>
            <RHFTextField type="text" name="subscribeButton_cr" label="Kurd subscribe Button text"/>

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
          Save Header
        </LoadingButton>
        
      </Grid>
    </>
  );
  const renderProperties = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            NavBar Links
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Nav Links Text, Nav Links Paths...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Footer Links" />}
          <Stack spacing={3} sx={{ p: 3 }}>
            <Typography variant='h6'>Arabic Lists</Typography>
            <LinksBox
              title={'Platform'}
              list={listP_ar}
              setList={setListP_ar}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitleP_ar}
              linkPath={linkPathP_ar}
              handleChangeLink={handleChangeLinkP_ar}
              handleAddItem={handleAddItemP_ar}
            />
            <LinksBox
              title={'industries'}
              list={listI_ar}
              setList={setListI_ar}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitleI_ar}
              linkPath={linkPathI_ar}
              // isSubmitting={isSubmitting}
              handleChangeLink={handleChangeLinkI_ar}
              handleAddItem={handleAddItemI_ar}
            />
            <LinksBox
              title={'resources'}
              list={listR_ar}
              setList={setListR_ar}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitleR_ar}
              linkPath={linkPathR_ar}
              // isSubmitting={isSubmitting}
              handleChangeLink={handleChangeLinkR_ar}
              handleAddItem={handleAddItemR_ar}
            />
            <LinksBox
              title={'company'}
              list={listC_ar}
              setList={setListC_ar}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitleC_ar}
              linkPath={linkPathC_ar}
              // isSubmitting={isSubmitting}
              handleChangeLink={handleChangeLinkC_ar}
              handleAddItem={handleAddItemC_ar}
            />
          </Stack>
          <Stack spacing={3} sx={{ p: 3 }}>
            <Typography variant='h4'>English Lists</Typography>
            <LinksBox
              title={'Platform'}
              list={listP_en}
              setList={setListP_en}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitleP_en}
              linkPath={linkPathP_en}
              // isSubmitting={isSubmitting}
              handleChangeLink={handleChangeLinkP_en}
              handleAddItem={handleAddItemP_en}
            />
            <LinksBox
              title={'industries'}
              list={listI_en}
              setList={setListI_en}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitleI_en}
              linkPath={linkPathI_en}
              // isSubmitting={isSubmitting}
              handleChangeLink={handleChangeLinkI_en}
              handleAddItem={handleAddItemI_en}
            />
            <LinksBox
              title={'resources'}
              list={listR_en}
              setList={setListR_en}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitleR_en}
              linkPath={linkPathR_en}
              // isSubmitting={isSubmitting}
              handleChangeLink={handleChangeLinkR_en}
              handleAddItem={handleAddItemR_en}
            />
            <LinksBox
              title={'company'}
              list={listC_en}
              setList={setListC_en}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitleC_en}
              linkPath={linkPathC_en}
              // isSubmitting={isSubmitting}
              handleChangeLink={handleChangeLinkC_en}
              handleAddItem={handleAddItemC_en}
            />
          </Stack>
          <Stack spacing={3} sx={{ p: 3 }}>
            <Typography variant='h6'>Kurd Lists</Typography>
            <LinksBox
              title={'Platform'}
              list={listP_cr}
              setList={setListP_cr}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitleP_cr}
              linkPath={linkPathP_cr}
              // isSubmitting={isSubmitting}
              handleChangeLink={handleChangeLinkP_cr}
              handleAddItem={handleAddItemP_cr}
            />
            <LinksBox
              title={'industries'}
              list={listI_cr}
              setList={setListI_cr}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitleI_cr}
              linkPath={linkPathI_cr}
              // isSubmitting={isSubmitting}
              handleChangeLink={handleChangeLinkI_cr}
              handleAddItem={handleAddItemI_cr}
            />
            <LinksBox
              title={'resources'}
              list={listR_cr}
              setList={setListR_cr}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitleR_cr}
              linkPath={linkPathR_cr}
              // isSubmitting={isSubmitting}
              handleChangeLink={handleChangeLinkR_cr}
              handleAddItem={handleAddItemR_cr}
            />
            <LinksBox
              title={'company'}
              list={listC_cr}
              setList={setListC_cr}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitleC_cr}
              linkPath={linkPathC_cr}
              // isSubmitting={isSubmitting}
              handleChangeLink={handleChangeLinkC_cr}
              handleAddItem={handleAddItemC_cr}
            />
          </Stack>
        </Card>
      </Grid>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}
        {renderProperties}

        {renderActions}
      <ToastContainer />

      </Grid>
    </FormProvider>
  );
}

ServiceNewEditForm.propTypes = {
  currentFooter: PropTypes.object,
};
