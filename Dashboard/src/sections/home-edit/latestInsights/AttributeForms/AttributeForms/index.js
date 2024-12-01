import { Button, Stack, Typography } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PropTypes from 'prop-types';
import { DescriptionInput } from 'src/components/components.styled';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import TypeSelect from './SelectBox';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormProvider from 'src/components/hook-form/form-provider';
import RHFTextField from 'src/components/hook-form/rhf-text-field copy';
import { LatestInsightsContext } from 'src/context/latestInsights';
import { RHFUpload } from 'src/components/hook-form';


export const AttributeCard = ({ insights, insight, insightsDispatch, setAllValue, listName }) => {

  const {setCallBack} = useContext(LatestInsightsContext)
  const [img, setImg] = useState(null)
  const [changeImage, setChangeImage] = useState(false)

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().min(4).max(50).required('title is required'),

    description: Yup.string().min(10).max(5000).required('Description is required'),

    link: Yup.string().min(4).max(50).required('link is required'),

    img: Yup.string().min(5).required('Image is required')

  });

  const defaultValues = useMemo(
    () => ({
      title: insight?.title || '',

      description: insight?.description || '' ,

      link: insight?.link || '',

      img: insight?.img || '',

    }),
    [insight]
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
    // if(changeImage){
    //   if(insight?.img){
    //     await axiosReq.post('/deleteFile', {
    //       fileUrl: insight.img
    //     })
    //   }
    //   const formData = new FormData()
    //   if (values.img) {
    // formData.append('file', values.img)

    //   const uploadImage = await axiosReq.post('/uploadFile/insights', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     }});

    // const {fileUrl} = uploadImage.data.data
    // newImg = fileUrl
    // setValue('img', newImg)
    
    //   } 
    // } 
  })
  useEffect(() => {
    if (insight) {
      reset(defaultValues);
      setCallBack(onSubmit)
    }
  }, [insight, defaultValues, reset]);

  const handleNewAttrChange = (e) => {
    e.preventDefault();
    const { value, id, name } = e.target;

    const newInsights = insights.map((ave) => {
      if (ave.id == id) {
        return {...ave, [name]: value }
      }
      return ave
    })

    setAllValue(listName, newInsights)
    insightsDispatch({
      type: 'edit',
      newInsights
    });
  };

  const handleRemoveNewAttr = (e) => {
    const { id } = e.target;
    const newInsights = insights.filter((av) => av.id != id)
    setAllValue(listName, newInsights)
    insightsDispatch({
      type: 'remove',
      id,
      newInsights
    });
  };

  const replaceImg = (e, ele, name) => {
    const newImg = e ? e[0] : null
    const objIndex = insights.findIndex(obj => obj.id == ele.id);
    const newInsights = insights.map((ave, i) => {
      if (i === objIndex) {
        return {...ave, [name]: newImg }
      }
      return ave
    })

    setAllValue(listName, newInsights)
    insightsDispatch({
      type: 'edit',
      newInsights: newInsights,
      index: objIndex,
    });
  } 

  const handleDropImg = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setChangeImage(true);
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


  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>

      <Stack spacing={3} sx={{ p: 3 }}>

      <Typography variant="subtitle2">{values.name}</Typography>

      <RHFTextField id={insight.id} onChange={handleNewAttrChange} name="title" label="Insight Title" />

      <RHFTextField id={insight.id} onChange={handleNewAttrChange} type="text" name="description" label="Insight description" multiline rows={3}/>

      <RHFTextField id={insight.id} onChange={handleNewAttrChange} name="link" label="Insight Link" />

      <Stack spacing={1.5}>
        <Typography variant="subtitle2">Image</Typography>
        <RHFUpload
          name="img"
          maxSize={3145728}
          onDrop={(e) => {
            replaceImg(e, insight, 'img')
            handleDropImg(e)
          }}
          onDelete={(e) => {
            replaceImg(null, insight, 'img')
            handleRemoveImg(e)
          }}
          file={values.img || img}
        />

      </Stack>


      <Button
        id={insight.id}
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
  insights: PropTypes.array.isRequired,
  insight: PropTypes.object.isRequired,
  insightsDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}