import { Button, CardHeader, Stack, Typography } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { DescriptionInput } from 'src/components/components.styled';
import PropTypes from 'prop-types';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormProvider from 'src/components/hook-form/form-provider';
import RHFTextField from 'src/components/hook-form/rhf-text-field copy';
import { RHFUpload } from 'src/components/hook-form';
import { axiosReq } from 'src/utils/axiosReq';
import { PropsContext } from 'src/context/props';


export const MethodsCard = ({ propMethods, propMethod, propMethodsDispatch, setAllValue, listName, setMainVal, prop }) => {
  const [img, setImg] = useState(null);
  const [imgChange, setImgChange] = useState(false)

  const {setCallBack} = useContext(PropsContext)

  const NewBlogSchema = Yup.object().shape({
    name: Yup.string().min(3).max(100).required('Method name is required'),
    img: Yup.string().max(500).required('Method Image is required'),
  });

  const defaultValues = useMemo(
    () => ({
      name: propMethod?.name || '',
      img: propMethod?.img || '',
      id: propMethod?.id || propMethods?.length
    }),
    [propMethod]
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
    const newData = propMethods.map(item => {
      if(item?.id === data.id){
        return {
          name: values?.name,
          img: values?.img,
          id: data.id
        }
      }
      return item
    }) 
    prop.list = newData

    console.info(`${values?.name} is valid`)
  })
  useEffect(() => {
    if (propMethod) {
      reset(defaultValues);
      setCallBack(onSubmit)
    }
  }, [propMethod, defaultValues, reset]);

  const handleNewAttrChange = (e) => {
    e.preventDefault();
    const { value, id, name } = e.target;
    const newMethods = propMethods.map((ave) => {
      if (ave.id == id) {
        console.log(ave);
        return {...ave, [name]: value }
      }
      return ave
    })

    setAllValue(listName, newMethods)
    propMethodsDispatch({
      type: 'edit',
      newMethods,
    });
  };

  const replaceImg = async (e, propMethod, name) => {
    const newImg = e ? e[0] : null
    const objIndex = propMethods.findIndex(obj => obj.id == propMethod.id);
    const newMethods = await Promise.all(
      propMethods.map(async(ave, i) => {
        if (i === objIndex) {
          if(ave[name]){
            await axiosReq.post('/deleteFile', {
              fileUrl: currentAbout?.lang?.cr?.rateList[index]?.stars
            })
          }
          let url = ''
          const formData = new FormData()
          if(newImg) {
            formData.append('file', newImg)

            const uploadImage = await axiosReq.post('/uploadFile/aboutPlatform', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              }});
    
            const {fileUrl} = uploadImage.data.data
            url = fileUrl
          }

          return {...ave, [name]: url || '' }
        }
        return ave
      })
    ) 


    setAllValue(listName, newMethods)
    prop.list = newMethods
    propMethodsDispatch({
      type: 'edit',
      newMethods: newMethods,
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
    const newMethods = propMethods.filter((av) => av.id != id)
    setAllValue(listName, newMethods)
    prop.list = newMethods

    propMethodsDispatch({
      type: 'remove',
      id,
      newMethods
    });
  };
  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>

      <Stack spacing={3} sx={{ p: 3 }}>

      <Typography variant="subtitle2">{values.name}</Typography>

      <RHFTextField id={propMethod?.id} onChange={handleNewAttrChange} name="name" label="Method Title" />

      <Stack spacing={1.5}>
      <CardHeader title="Methods List" />

        <Typography variant="subtitle2">Image</Typography>
        <RHFUpload
          name="img"
          maxSize={3145728}
          onDrop={(e) => {
            replaceImg(e, propMethod, 'img')
            handleDropImg(e)
          }}
          onDelete={(e) => {
            replaceImg(null, propMethod, 'img')
            handleRemoveImg(e)
          }}
          file={values.img || img}

        />

      </Stack>
      <Button
        id={propMethod?.id}
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

MethodsCard.propTypes = {
  propMethods: PropTypes.array.isRequired,
  propMethod: PropTypes.object.isRequired,
  prop: PropTypes.object.isRequired,
  propMethodsDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired,
  setMainVal: PropTypes.func.isRequired,
  prop: PropTypes.object.isRequired,
}