import { Box, Button, Stack, Typography } from '@mui/material';
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
import { RHFUpload } from 'src/components/hook-form';
import { AvenueContext } from 'src/context/AvenueContext';




export const AttributeCard = ({ trusteds, trusted, trustedsDispatch, setAllValue, listName }) => {
  const [img, setImg] = useState(null);
  const [descImg, setDescImg] = useState(null);
  const [imgChange, setImgChange] = useState(false)
  const [descImgChange, setDescImgChange] = useState(false)

  const {setCallBack} = useContext(AvenueContext)

  const NewBlogSchema = Yup.object().shape({
    img: Yup.string().max(500),
  });

  const defaultValues = useMemo(
    () => ({
      img: trusted?.img || '',
    }),
    [trusted]
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
    console.log('Brands Images is valid')
  })
  useEffect(() => {
    if (trusted) {
      reset(defaultValues);
      setCallBack(onSubmit)
    }
  }, [trusted, defaultValues, reset]);

  const replaceImg = (e, trusted, name) => {
    const newImg = e ? e[0] : null
    const objIndex = trusteds.findIndex(obj => obj.id == trusted.id);
    const newTrusted = trusteds.map((ave, i) => {
      if (i === objIndex) {
        return {...ave, [name]: newImg }
      }
      return ave
    })

    setAllValue(listName, newTrusted)
    trustedsDispatch({
      type: 'edit',
      newTrusted: newTrusted,
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

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>

      <Stack spacing={3} sx={{ p: 3 }}>

      <Stack spacing={1.5}>
        <RHFUpload
          name="img"
          maxSize={3145728}
          onDrop={(e) => {
            replaceImg(e, trusted, 'img')
            handleDropImg(e)
          }}
          onDelete={(e) => {
            replaceImg(null, trusted, 'img')
            handleRemoveImg(e)
          }}
          file={values.img || img}

        />

      </Stack>
      </Stack>
      </FormProvider>
  );
};

AttributeCard.propTypes = {
  trusteds: PropTypes.array.isRequired,
  trusted: PropTypes.object.isRequired,
  trustedsDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}