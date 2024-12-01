import { Box, Button, Stack, Typography } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PropTypes from 'prop-types';
import { DescriptionInput } from 'src/components/components.styled';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
// import TypeSelect from './SelectBox';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormProvider from 'src/components/hook-form/form-provider';
import RHFTextField from 'src/components/hook-form/rhf-text-field copy';
import { RHFUpload } from 'src/components/hook-form';
import { appContext } from 'src/context/appContext';




export const AttributeCard = ({ apps, app, appsDispatch, setAllValue, listName }) => {
  const [img, setImg] = useState(null);
  const [descImg, setDescImg] = useState(null);
  const [imgChange, setImgChange] = useState(false)
  const [descImgChange, setDescImgChange] = useState(false)

  const {setCallBack} = useContext(appContext)

  const NewBlogSchema = Yup.object().shape({
    name: Yup.string().min(4).max(50).required('name is required'),

    title: Yup.string().min(4).max(100).required('title is required'),

    descOne: Yup.string().min(10).max(5000).required('First Description is required'),
    descTow: Yup.string().min(10).max(5000).required('Second Description is required'),

    buttonOneT: Yup.string().min(4).max(50).required('First Button Text is required'),
    buttonOneP: Yup.string().min(4).max(50).required('First Button path is required'),

    buttonTowT: Yup.string().min(4).max(50).required('Second Button Text is required'),
    buttonTowP: Yup.string().min(4).max(50).required('Second Button path is required'),

    img: Yup.string().max(500).required('Image is required'),
  });

  const defaultValues = useMemo(
    () => ({
      name: app?.name || '',

      title: app?.title || '',

      descOne: app?.descOne || '' ,

      descTow: app?.descTow || '' ,

      buttonOneT: app?.buttonOne?.text || '',
      buttonOneP: app?.buttonOne?.link || '',

      buttonTowT: app?.buttonTow?.text || '',
      buttonTowP: app?.buttonTow?.link || '',

      img: app?.img || '',
    }),
    [app]
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
  const onSubmit = handleSubmit(async(data) => {
    let newImg = ''
    let newDescImg
    if(imgChange){
      if(app?.img){
        await axiosReq.post('/deleteFile', {
          fileUrl: app.img
        })
      }
      const formData = new FormData()
      if (values.img) {
    formData.append('file', values.img)

      const uploadImage = await axiosReq.post('/uploadFile/apps', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }});

    const {fileUrl} = uploadImage.data.data
    newImg = fileUrl
      } 
      

    }
    if(descImgChange){
      if(app?.descImg){
        await axiosReq.post('/deleteFile', {
          fileUrl: app.descImg
        })
      }
      const formData = new FormData()
      if (values.descImg) {
    formData.append('file', values.descImg)

      const uploadImage = await axiosReq.post('/uploadFile/apps', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }});

    const {fileUrl} = uploadImage.data.data
    newDescImg = fileUrl
    setValue('descImg', newDescImg)
    
      } 
    } 
  })
  useEffect(() => {
    if (app) {
      reset(defaultValues);
      setCallBack(onSubmit)
    }
  }, [app, defaultValues, reset]);

  const handleNewAttrChange = (e) => {
    e.preventDefault();
    const { value, id, name } = e.target;

    const newApps = apps.map((ave) => {
      if (ave.id == id) {
        return {...ave, [name]: value }
      }
      return ave
    })

    setAllValue(listName, newApps)
    appsDispatch({
      type: 'edit',
      newApps
    });
  };

  const handleNewBUttonChange = (e) => {
    e.preventDefault();
    const { value, id, name } = e.target;

    const newApps = apps.map((ave, i) => {
      if (i == id) {
        if (name === 'buttonOneT'){
          return {...ave, buttonOne: {...ave.buttonOne, text: value} }
        }else if (name === 'buttonOneP'){
          return {...ave, buttonOne: {...ave.buttonOne, link: value} }
        }else if (name === 'buttonTowT'){
          return {...ave, buttonTow: {...ave.buttonTow, text: value} }
        }else if (name === 'buttonTowP'){
          return {...ave, buttonTow: {...ave.buttonTow, link: value} }
        }
        
      }
      return ave
    })

    setAllValue(listName, newApps)
    appsDispatch({
      type: 'edit',
      newApps
    });
  };

  const replaceImg = (e, app, name) => {
    const newImg = e ? e[0] : null
    const objIndex = apps.findIndex(obj => obj.id == app.id);
    const newApps = apps.map((ave, i) => {
      if (i === objIndex) {
        return {...ave, [name]: newImg }
      }
      return ave
    })

    setAllValue(listName, newApps)
    appsDispatch({
      type: 'edit',
      newApps: newApps,
      index: objIndex,
    });
  } 

  const handleDropImg = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setImgChange(true);
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      setImg(file)

      if (file) {
        setValue('img', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );
  const handleRemoveImg = useCallback(() => {
    setValue('img', null);
    setImg(null)
  }, [setValue]);

  const handleRemoveNewAttr = (e) => {
    const { id } = e.target;
    const newApps = apps.filter((av) => av.id != id)
    setAllValue(listName, newApps)
    appsDispatch({
      type: 'remove',
      id,
      newApps
    });
  };
  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>

      <Stack spacing={3} sx={{ p: 3 }}>

      <Typography variant="subtitle2">{values.name}</Typography>

      <RHFTextField id={app.id} onChange={handleNewAttrChange} name="name" label="app Name" />

      <RHFTextField id={app.id} onChange={handleNewAttrChange} name="title" label="app Title" />

      <RHFTextField id={app.id} onChange={handleNewAttrChange} type="text" name="descOne" label="app first description" multiline rows={3}/>

      <RHFTextField id={app.id} onChange={handleNewAttrChange} type="text" name="descTow" label="app second description" multiline rows={3}/>

      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: 1
      }}
      >
      <RHFTextField id={app.id} onChange={handleNewBUttonChange} name="buttonOneT" label="first button text" />
      <RHFTextField id={app.id} onChange={handleNewBUttonChange} name="buttonOneP" label="first button path" />
      </Box>
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: 1
      }}
      >
      <RHFTextField id={app.id} onChange={handleNewBUttonChange} name="buttonTowT" label="second button text" />
      <RHFTextField id={app.id} onChange={handleNewBUttonChange} name="buttonTowP" label="second button path" />
      </Box>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2">Image</Typography>
        <RHFUpload
          name="img"
          maxSize={3145728}
          onDrop={(e) => {
            replaceImg(e, app, 'img')
            handleDropImg(e)
          }}
          onDelete={(e) => {
            replaceImg(null, app, 'img')
            handleRemoveImg(e)
          }}
          file={values.img || img}

        />

      </Stack>
      <Button
        id={app.id}
        variant="outlined"
        sx={{ color: '#FFFFFF',
        backgroundColor: '#b1a9a9',
        '&:hover': {
          backgroundColor: '#b1a9a9',
          color: 'red',

        }
      }}
        startIcon={<RemoveCircleOutlineIcon />}
        onClick={handleRemoveNewAttr}
      >
        Remove
      </Button>
      </Stack>
      </FormProvider>
  );
};

AttributeCard.propTypes = {
  apps: PropTypes.array.isRequired,
  app: PropTypes.object.isRequired,
  appsDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}