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

export default function ServiceNewEditForm({ currentHeader }) {
  const [changeLogo, setChangeLogo] = useState(false);
  const [changeLogoS, setChangeLogoS] = useState(false);
  const [list_ar , setList_ar] = useState([])
  const [list_en , setList_en] = useState([])
  const [list_cr , setList_cr] = useState([])
  const [linkTitle_ar, setLinkTitle_ar] = useState('')
  const [linkPath_ar, setLinkPath_ar] = useState('') 
  const [linkTitle_en, setLinkTitle_en] = useState('')
  const [linkPath_en, setLinkPath_en] = useState('')
  const [linkTitle_cr, setLinkTitle_cr] = useState('')
  const [linkPath_cr, setLinkPath_cr] = useState('')
  const [file, setFile] = useState(null)
  const [fileS, setFileS] = useState(null)
  const [parent_ar, setParent_ar] = useState('')
  const [parent_en, setParent_en] = useState('')
  const [parent_cr, setParent_cr] = useState('')

  const router = useRouter();
  
  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();

  const preview = useBoolean();

  const NewBlogSchema = Yup.object().shape({
    logo: Yup.string().max(500).required('Logo is required'),
    smallLogo: Yup.string().max(500).required('Small Logo is required'),
    whatsNumber: Yup.string().min(7).max(500).required('Whatsapp Number is required'),
    headLineText_ar: Yup.string().min(4).max(500).required('نص الشريط العلوي مطلوب بالعربية'),
    headLineText_en: Yup.string().min(4).max(500).required('English headLineText_en is required'),
    headLineText_cr: Yup.string().min(4).max(500).required('krdy headLineText_en is required'),
    headLineLinkT_ar: Yup.string().min(4).max(100).required('نص رابط الانتقال مطلوب باللغة العربية'),
    headLineLinkT_en: Yup.string().min(4).max(100).required('English headLine links text is required'),
    headLineLinkT_cr: Yup.string().min(4).max(100).required('kurd headLine links text  is required'),
    headLineLink_ar: Yup.string().min(4).max(100).required('رابط الانتقال مطلوب باللغة العربية'),
    headLineLink_en: Yup.string().min(4).max(100).required('English headLine link is required'),
    headLineLink_cr: Yup.string().min(4).max(100).required('kurd headLine link is required'),
    list_ar: Yup.array().min(1).required('nav bar links is required'),
    list_en: Yup.array().min(1).required('nav bar links is required'),
    list_cr: Yup.array().min(1).required('nav bar links is required')
  });

  const defaultValues = useMemo(
    () => ({
      logo: currentHeader?.logo || '',
      smallLogo: currentHeader?.smallLogo || '',
      whatsNumber: currentHeader?.whatsNumber|| '',
      headLineText_ar: currentHeader?.lang?.ar?.headLine?.text || '',
      headLineText_en: currentHeader?.lang?.en?.headLine?.text || '',
      headLineText_cr: currentHeader?.lang?.cr?.headLine?.text || '',
      headLineLinkT_ar: currentHeader?.lang?.ar?.headLine?.link?.text || '',
      headLineLinkT_en: currentHeader?.lang?.en?.headLine?.link?.text || '',
      headLineLinkT_cr: currentHeader?.lang?.cr?.headLine?.link?.text || '',
      headLineLink_ar: currentHeader?.lang?.ar?.headLine?.link?.link || '',
      headLineLink_en: currentHeader?.lang?.en?.headLine?.link?.link || '',
      headLineLink_cr: currentHeader?.lang?.cr?.headLine?.link?.link || '',
      list_ar: currentHeader?.lang?.ar?.list,
      list_en: currentHeader?.lang?.en?.list || '',
      list_cr: currentHeader?.lang?.cr?.list || '',
    }),
    [currentHeader]
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
    if (currentHeader) {
      reset(defaultValues);
    }
  }, [currentHeader, defaultValues, reset]);


  const onSubmit = handleSubmit(async (data) => {
      try{
        let newLogo = ''
        let newLogoS = ''
        if(changeLogo){
          if(currentHeader.logo){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentHeader.logo
            })
          }
          if (values.logo) {
            const formData = new FormData()
        formData.append('file', values.logo)

          const uploadImage = await axiosReq.post('/uploadFile/header', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

            const {fileUrl} = uploadImage?.data?.data
            newLogo = fileUrl
              } 
          

        }
        if(changeLogoS){
          if(currentHeader.smallLogo){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentHeader.smallLogo
            })
          }
          if (values.smallLogo) {
            const formData = new FormData()
        formData.append('file', values.smallLogo)

          const uploadImage = await axiosReq.post('/uploadFile/header', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }});

            const {fileUrl} = uploadImage?.data?.data
            newLogoS = fileUrl
              } 
          

        }
      const requestValues = {
        logo: newLogo || currentHeader.logo,
        smallLogo: newLogoS || currentHeader.smallLogo,
        whatsNumber: values.whatsNumber,
        lang: {
          ar: {
            list: list_ar,
            headLine: {
              text: values?.headLineText_ar,
              link: {
                text: values?.headLineLinkT_ar,
                link: values?.headLineLink_ar
              }
            }
          },
          en: {
            list: list_en,
            headLine: {
              text: values?.headLineText_en,
              link: {
                text: values?.headLineLinkT_en,
                link: values?.headLineLink_en
              }
            }
          },
          cr: {
            list: list_cr,
            headLine: {
              text: values?.headLineText_cr,
              link: {
                text: values?.headLineLinkT_cr,
                link: values?.headLineLink_cr
              }
            }
          }
        }
        
      }
       await axiosReq.put('/edit/header', requestValues) 
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


  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setChangeLogo(true);
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      setFile(newFile)

      if (file) {
        setValue('logo', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleDropS = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setChangeLogoS(true);
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      setFileS(newFile)

      if (file) {
        setValue('smallLogo', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  useEffect(() => {
      setList_ar(currentHeader?.lang?.ar?.list)
      setList_en(currentHeader?.lang?.en?.list)
      setList_cr(currentHeader?.lang?.cr?.list)
  }, [
    currentHeader?.lang?.ar?.list,
    currentHeader?.lang?.en?.list,
    currentHeader?.lang?.cr?.list,
  ]);

  const handleRemoveFile = useCallback(() => {
    setValue('logo', null);
    setFile(null)
  }, [setValue]);

  const handleRemoveFileS = useCallback(() => {
    setValue('smallLogo', null);
    setFileS(null)
  }, [setValue]);

  const handleAddItem_ar = () => {

    if(linkTitle_ar && linkPath_ar){
      if(!String(parent_ar)){
        setList_ar([...list_ar, {title: linkTitle_ar, path: linkPath_ar}])
        setLinkTitle_ar('')
        setLinkPath_ar('')
      } else {
        if(typeof parent_ar === 'string') {
          const ids = parent_ar?.split('_')
          const newList = list_ar.map((item, i) => {
            if(ids[0] == i){
              if (item?.children?.length > 0){
                const CItems = item?.children[0] || {items: []}
                CItems.items = CItems?.items?.map((sItem, ind) => {
                  if(ids[1] == ind) {
                    const SCItem = sItem?.children?.length > 0 ? (sItem?.children[0]) : {items: []}
                    return {
                      ...sItem, children: [{
                        ...SCItem , items: [
                          ...SCItem.items,
                          {title: linkTitle_ar, path: linkPath_ar}
                        ]
                      }]
                    }
                  }
                  return sItem
                })
  
              } else {
                const CItems = [{
                  items: [
                  ],
                },]
                return {
                  ...item, children: [{
                    ...CItems , items: [
                      ...CItems.items,
                      {title: linkTitle_ar, path: linkPath_ar}
                    ]
                  }]
                }
              }
            }
            return item
          })
          setList_ar(newList)
          setLinkTitle_ar('')
          setLinkPath_ar('')
        } else if (typeof parent_ar === 'number') {

          const newList = list_ar.map((item, i) => {
            if(parent_ar == i){
                const CItems = item?.children?.length > 0 ? (item?.children[0]) : {items: []}
                return {
                  ...item, children: [{
                    ...CItems , items: [
                      ...CItems.items,
                      {title: linkTitle_ar, path: linkPath_ar}
                    ]
                  }]
                }
            }
            return item
          })
          setList_ar(newList)
          setLinkTitle_ar('')
          setLinkPath_ar('')
        }
      }
    }
    setParent_ar('')
  }
  const handleAddItem_en = () => {
    if(linkTitle_en && linkPath_en){
      if(!String(parent_en)){
        setList_en([...list_en, {title: linkTitle_en, path: linkPath_en}])
        setLinkTitle_en('')
        setLinkPath_en('')
      } else {
        if(typeof parent_en === 'string') {
          const ids = parent_en?.split('_')
          const newList = list_en.map((item, i) => {
            if(ids[0] == i){
              if (item?.children?.length > 0){
                const CItems = item?.children[0] || {items: []}
                CItems.items = CItems?.items?.map((sItem, ind) => {
                  if(ids[1] == ind) {
                    const SCItem = sItem?.children?.length > 0 ? (sItem?.children[0]) : {items: []}
                    return {
                      ...sItem, children: [{
                        ...SCItem , items: [
                          ...SCItem.items,
                          {title: linkTitle_en, path: linkPath_en}
                        ]
                      }]
                    }
                  }
                  return sItem
                })
  
              } else {
                const CItems = [{
                  items: [
                  ],
                },]
                return {
                  ...item, children: [{
                    ...CItems , items: [
                      ...CItems.items,
                      {title: linkTitle_en, path: linkPath_en}
                    ]
                  }]
                }
              }
            }
            return item
          })
          setList_en(newList)
          setLinkTitle_en('')
          setLinkPath_en('')
        } else if (typeof parent_en === 'number') {

          const newList = list_en.map((item, i) => {
            if(parent_en == i){
                const CItems = item?.children?.length > 0 ? (item?.children[0]) : {items: []}
                return {
                  ...item, children: [{
                    ...CItems , items: [
                      ...CItems.items,
                      {title: linkTitle_en, path: linkPath_en}
                    ]
                  }]
                }
            }
            return item
          })
          setList_en(newList)
          setLinkTitle_en('')
          setLinkPath_en('')
        }
      }
    }
    setParent_en('')
  }
  const handleAddItem_cr = () => {
    if(linkTitle_cr && linkPath_cr){
      if(!String(parent_cr)){
        setList_cr([...list_cr, {title: linkTitle_cr, path: linkPath_cr}])
        setLinkTitle_cr('')
        setLinkPath_cr('')
      } else {
        if(typeof parent_cr === 'string') {
          const ids = parent_cr?.split('_')
          const newList = list_cr.map((item, i) => {
            if(ids[0] == i){
              if (item?.children?.length > 0){
                const CItems = item?.children[0] || {items: []}
                CItems.items = CItems?.items?.map((sItem, ind) => {
                  if(ids[1] == ind) {
                    const SCItem = sItem?.children?.length > 0 ? (sItem?.children[0]) : {items: []}
                    return {
                      ...sItem, children: [{
                        ...SCItem , items: [
                          ...SCItem.items,
                          {title: linkTitle_cr, path: linkPath_cr}
                        ]
                      }]
                    }
                  }
                  return sItem
                })
  
              } else {
                const CItems = [{
                  items: [
                  ],
                },]
                return {
                  ...item, children: [{
                    ...CItems , items: [
                      ...CItems.items,
                      {title: linkTitle_cr, path: linkPath_cr}
                    ]
                  }]
                }
              }
            }
            return item
          })
          setList_cr(newList)
          setLinkTitle_cr('')
          setLinkPath_cr('')
        } else if (typeof parent_cr === 'number') {

          const newList = list_cr.map((item, i) => {
            if(parent_cr == i){
                const CItems = item?.children?.length > 0 ? (item?.children[0]) : {items: []}
                return {
                  ...item, children: [{
                    ...CItems , items: [
                      ...CItems.items,
                      {title: linkTitle_cr, path: linkPath_cr}
                    ]
                  }]
                }
            }
            return item
          })
          setList_cr(newList)
          setLinkTitle_cr('')
          setLinkPath_cr('')
        }
      }
    }
    setParent_cr('')
  }

  const handleChangeLink_ar = (e) => {
    if (e.target.name === 'title'){

      setLinkTitle_ar(e.target.value )
    }else {
      setLinkPath_ar(e.target.value)
    }
  }

  const handleChangeLink_en = (e) => {
    if (e.target.name === 'title'){

      setLinkTitle_en(e.target.value )
    }else {
      setLinkPath_en(e.target.value)
    }
  }
  const handleChangeLink_cr = (e) => {
    if (e.target.name === 'title'){

      setLinkTitle_cr(e.target.value )
    }else {
      setLinkPath_cr(e.target.value)
    }
  }

  const handleDeleteItem = (setList, i, list) => {
    if(typeof i === 'number'){
      setList((prev => prev.filter((e, n) => n !== i)))
    }else if (typeof i === 'string'){
      const ids = i.split('_')
      if(ids.length >= 3) {
        const newList = list.map((item, ind) => {
          if(ids[0] == ind) {
            const SSItems = item.children[0].items[Number(ids[1])].children[0].items.filter((e, n) => ids[2] != n)
            item.children[0].items[Number(ids[1])].children[0].items = SSItems
            return item
          }
          return item
        } )
        setList(newList)
      } else{
        const newList = list.map((item, ind) => {
          if(ids[0] == ind) {
            const SItems = item.children[0].items.filter((e, n) => ids[1] != n)
            item.children[0].items = SItems
            return item
          }
          return item
        } )
        setList(newList)

      }
    }
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
            <RHFTextField name="headLineText_ar" label='نص الشريط العلوي بالعربية'
            sx={{
              direction: 'rtl'
            }}
            />
            <RHFTextField type="text" name="headLineLinkT_ar" label="نص رابط الانتقال باللغة العربية"
              sx={{
                direction: 'rtl'
              }}
            />

            <RHFTextField type="text" name="headLineLink_ar" label="رابط الانتقال باللغة العربية"/>
            <CardHeader title="English Text" />

            <RHFTextField type="text" name="headLineText_en" label="English headLine text"/>

            <RHFTextField type="text" name="headLineLinkT_en" label="English headLine links text" />
            <RHFTextField type="text" name="headLineLink_en" label="English headLine link" />
            <CardHeader title="Kurd Text" />

            <RHFTextField type="text" name="headLineText_cr" label="krdy headLine tex" />

            <RHFTextField type="text" name="headLineLinkT_cr" label="kurd headLine links text"/>
            <RHFTextField type="text" name="headLineLink_cr" label="'kurd headLine link"/>

          <CardHeader title="Numbers" />
          <RHFTextField type="text" name="whatsNumber" label="'Whatsapp Number"/>

          </Stack>

        </Card>
      </Grid>
    </>
  );

  

  const renderLogo = (
    <>
    {mdUp && (
      <Grid md={4}>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          Logo
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Select or Drop Logo image...
        </Typography>
      </Grid>
    )}

    <Grid xs={12} md={8}>
      <Card>
        <Stack spacing={1.5} sx={{p: 2}}>
          <Typography variant="subtitle2">Logo</Typography>
        {currentHeader &&
        <RHFUpload
            name="logo"
            maxSize={3145728}
            onDrop={handleDrop}
            onDelete={handleRemoveFile}
            file={values.logo || file}
          />}
            </Stack>

        <Stack spacing={1.5} sx={{p: 2}}>
          <Typography variant="subtitle2">Small Logo</Typography>
          {currentHeader &&
          <RHFUpload
              name="smallLogo"
              maxSize={3145728}
              onDrop={handleDropS}
              onDelete={handleRemoveFileS}
              file={values.smallLogo || fileS}
            />}
        </Stack>

      </Card>
    </Grid>
  </>
  )


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
          {!mdUp && <CardHeader title="NavBar Links" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <LinksBox
              title={'Arabic'}
              list={list_ar}
              setList={setList_ar}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitle_ar}
              linkPath={linkPath_ar}
              handleChangeLink={handleChangeLink_ar}
              handleAddItem={handleAddItem_ar}
              setParent={setParent_ar}
              parent={parent_ar}
              type='header'
            />
            <LinksBox
              title={'English'}
              list={list_en}
              setList={setList_en}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitle_en}
              linkPath={linkPath_en}
              handleChangeLink={handleChangeLink_en}
              handleAddItem={handleAddItem_en}
              setParent={setParent_en}
              parent={parent_en}
              type='header'
            />
            <LinksBox
              title={'Kurd'}
              list={list_cr}
              setList={setList_cr}
              handleDeleteItem={handleDeleteItem}
              linkTitle={linkTitle_cr}
              linkPath={linkPath_cr}
              handleChangeLink={handleChangeLink_cr}
              handleAddItem={handleAddItem_cr}
              setParent={setParent_cr}
              parent={parent_cr}
              type='header'
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
        {renderLogo}
        {renderProperties}

        {renderActions}
      <ToastContainer />

      </Grid>
    </FormProvider>
  );
}

ServiceNewEditForm.propTypes = {
  currentHeader: PropTypes.object,
};
