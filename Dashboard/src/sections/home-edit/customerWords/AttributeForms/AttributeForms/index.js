import { Button, Stack, Typography } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PropTypes from 'prop-types';
import { DescriptionInput } from 'src/components/components.styled';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormProvider from 'src/components/hook-form/form-provider';
import RHFTextField from 'src/components/hook-form/rhf-text-field copy';
import { RHFUpload } from 'src/components/hook-form';
import { WordsContext } from 'src/context/WordsContext';




export const AttributeCard = ({ words, word, wordsDispatch, setAllValue, listName }) => {
  const [image, setImg] = useState(null);
  const [imageChange, setImgChange] = useState(false)

  const {setCallBack} = useContext(WordsContext)

  const NewBlogSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required('name is required'),

    nickname: Yup.string().min(3).max(50).required('title is required'),

    paragraph: Yup.string().min(10).max(5000).required('Description is required'),

    image: Yup.string().max(500).required('Image is required'),
  });

  const defaultValues = useMemo(
    () => ({
      name: word?.name || '',

      nickname: word?.nickname || '',

      paragraph: word?.paragraph || '' ,

      image: word?.image || '',
    }),
    [word]
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
    if(imageChange){
      if(word?.image){
        await axiosReq.post('/deleteFile', {
          fileUrl: word.image
        })
      }
      const formData = new FormData()
      if (values.image) {
    formData.append('file', values.image)

      const uploadImage = await axiosReq.post('/uploadFile/Avenues', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }});

    const {fileUrl} = uploadImage.data.data
    newImg = fileUrl
      } 
      

    }
  })
  useEffect(() => {
    if (word) {
      reset(defaultValues);
      setCallBack(onSubmit)
    }
  }, [word, defaultValues, reset]);

  const handleNewAttrChange = (e) => {
    e.preventDefault();
    const { value, id, name } = e.target;
    const newWords = words.map((ave) => {
      if (ave.id == id) {
        return {...ave, [name]: value }
      }
      return ave
    })

    setAllValue(listName, newWords)
    wordsDispatch({
      type: 'edit',
      newWords
    });
  };

  const replaceImg = (e, word, name) => {
    const newImg = e ? e[0] : null
    const objIndex = words.findIndex(obj => obj.id == word.id);
    const newWords = words.map((ave, i) => {
      if (i === objIndex) {
        return {...ave, [name]: newImg }
      }
      return ave
    })

    setAllValue(listName, newWords)
    wordsDispatch({
      type: 'edit',
      newWords: newWords,
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
        setValue('image', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );
  const handleRemoveImg = useCallback(() => {
    setValue('image', null);
    setImg(null)
  }, [setValue]);

  const handleRemoveNewAttr = (e) => {
    const { id } = e.target;
    const newWords = words.filter((av) => av.id != id)
    setAllValue(listName, newWords)
    wordsDispatch({
      type: 'remove',
      id,
      newWords
    });
  };
  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>

      <Stack spacing={3} sx={{ p: 3 }}>

      <Typography variant="subtitle2">{values.name}</Typography>

      <RHFTextField id={word?.id} onChange={handleNewAttrChange} name="name" label="Customer Name" />

      <RHFTextField id={word?.id} onChange={handleNewAttrChange} name="nickname" label="Customer Nickname" />

      <RHFTextField id={word?.id} onChange={handleNewAttrChange} type="text" name="paragraph" label="A Customer paragraph" multiline rows={3}/>

      <Stack spacing={1.5}>
        <Typography variant="subtitle2">Image</Typography>
        <RHFUpload
          name="image"
          maxSize={3145728}
          onDrop={(e) => {
            replaceImg(e, word, 'image')
            handleDropImg(e)
          }}
          onDelete={(e) => {
            replaceImg(null, word, 'image')
            handleRemoveImg(e)
          }}
          file={values.image || image}

        />

      </Stack>
      <Button
        id={word.id}
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
  words: PropTypes.array.isRequired,
  word: PropTypes.object.isRequired,
  wordsDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}