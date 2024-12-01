import { Button, Stack, Typography } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PropTypes from 'prop-types';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormProvider from 'src/components/hook-form/form-provider';
import RHFTextField from 'src/components/hook-form/rhf-text-field copy';
import { RHFUpload } from 'src/components/hook-form';
import { AvenueContext } from 'src/context/AvenueContext';




export const AttributeCard = ({ avenues, avenue, avenuesDispatch, setAllValue, listName }) => {
  const [img, setImg] = useState(null);
  const [descImg, setDescImg] = useState(null);
  const [imgChange, setImgChange] = useState(false)
  const [descImgChange, setDescImgChange] = useState(false)

  const {setCallBack} = useContext(AvenueContext)

  const NewBlogSchema = Yup.object().shape({
    name: Yup.string().min(4).max(50).required('name is required'),

    title: Yup.string().min(4).max(50).required('title is required'),

    desc: Yup.string().min(10).max(5000).required('Description is required'),

    color: Yup.string().min(4).max(50).required('color is required'),

    img: Yup.string().max(500).required('Image is required'),
    descImg: Yup.string().max(500).required('Avenues Description Image is required'),
  });

  const defaultValues = useMemo(
    () => ({
      name: avenue?.name || '',

      title: avenue?.title || '',

      desc: avenue?.desc || '' ,

      color: avenue?.color || '',

      img: avenue?.img || '',

      descImg: avenue?.descImg || '',

    }),
    [avenue]
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
      if(avenue?.img){
        await axiosReq.post('/deleteFile', {
          fileUrl: avenue.img
        })
      }
      const formData = new FormData()
      if (values.img) {
    formData.append('file', values.img)

      const uploadImage = await axiosReq.post('/uploadFile/Avenues', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }});

    const {fileUrl} = uploadImage.data.data
    newImg = fileUrl
      } 
      

    }
    if(descImgChange){
      if(avenue?.descImg){
        await axiosReq.post('/deleteFile', {
          fileUrl: avenue.descImg
        })
      }
      const formData = new FormData()
      if (values.descImg) {
    formData.append('file', values.descImg)

      const uploadImage = await axiosReq.post('/uploadFile/Avenues', formData, {
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
    if (avenue) {
      reset(defaultValues);
      setCallBack(onSubmit)
    }
  }, [avenue, defaultValues, reset]);

  const handleNewAttrChange = (e) => {
    e.preventDefault();
    const { value, id, name } = e.target;

    const newAvenues = avenues.map((ave) => {
      if (ave.id == id) {
        return {...ave, [name]: value }
      }
      return ave
    })

    setAllValue(listName, newAvenues)
    avenuesDispatch({
      type: 'edit',
      newAvenues
    });
  };

  const replaceImg = (e, avenue, name) => {
    const newImg = e ? e[0] : null
    const objIndex = avenues.findIndex(obj => obj.id == avenue.id);
    const newAvenues = avenues.map((ave, i) => {
      if (i === objIndex) {
        return {...ave, [name]: newImg }
      }
      return ave
    })

    setAllValue(listName, newAvenues)
    avenuesDispatch({
      type: 'edit',
      newAvenues: newAvenues,
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

  const handleDropDescImg = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setDescImgChange(true);
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      setDescImg(file)

      if (file) {
        setValue('descImg', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );
  const handleRemoveDescImg = useCallback(() => {
    setValue('descImg', null);
    setDescImg(null)
  }, [setValue]);



  const handleRemoveNewAttr = (e) => {
    const { id } = e.target;
    const newAvenues = avenues.filter((av) => av.id != id)
    setAllValue(listName, newAvenues)
    avenuesDispatch({
      type: 'remove',
      id,
      newAvenues
    });
  };
  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>

      <Stack spacing={3} sx={{ p: 3 }}>

      <Typography variant="subtitle2">{values.name}</Typography>

      <RHFTextField id={avenue.id} onChange={handleNewAttrChange} name="name" label="Avenue Name" />

      <RHFTextField id={avenue.id} onChange={handleNewAttrChange} name="title" label="Avenue Title" />

      <RHFTextField id={avenue.id} onChange={handleNewAttrChange} type="text" name="desc" label="Avenue description" multiline rows={3}/>

      <RHFTextField id={avenue.id} onChange={handleNewAttrChange} name="color" label="Avenue Color" />

      <Stack spacing={1.5}>
        <Typography variant="subtitle2">Image</Typography>
        <RHFUpload
          name="img"
          maxSize={3145728}
          onDrop={(e) => {
            replaceImg(e, avenue, 'img')
            handleDropImg(e)
          }}
          onDelete={(e) => {
            replaceImg(null, avenue, 'img')
            handleRemoveImg(e)
          }}
          file={values.img || img}

        />

      </Stack>
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">Description Image</Typography>
        <RHFUpload
          name="descImg"
          maxSize={3145728}
          onDrop={(e) => {
            handleDropDescImg(e)
            replaceImg(e, avenue, 'descImg')
          }}
          onDelete={(e) => {
            handleRemoveDescImg(e)
            replaceImg(null, avenue, 'descImg')

          }}
          file={values.descImg || descImg}

        />

      </Stack>
      <Button
        id={avenue.id}
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
  avenues: PropTypes.array.isRequired,
  avenue: PropTypes.object.isRequired,
  avenuesDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}