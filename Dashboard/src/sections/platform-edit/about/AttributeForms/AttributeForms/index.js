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
import { RatesContext } from 'src/context/rates';
import { axiosReq } from 'src/utils/axiosReq';


export const AttributeCard = ({ rates, rate, ratesDispatch, setAllValue, listName }) => {
  const [stars, setImg] = useState(null);
  const [starsChange, setImgChange] = useState(false)

  const {setCallBack} = useContext(RatesContext)

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().min(3).max(100).required('Rate title is required'),
    stars: Yup.string().max(500).required('Rate Image is required'),
  });

  const defaultValues = useMemo(
    () => ({
      title: rate?.title || '',
      stars: rate?.stars || '',
    }),
    [rate]
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
    console.info(`${values?.title} is valid`)
  })
  useEffect(() => {
    if (rate) {
      reset(defaultValues);
      setCallBack(onSubmit)
    }
  }, [rate, defaultValues, reset]);

  const handleNewAttrChange = (e) => {
    e.preventDefault();
    const { value, id, name } = e.target;
    const newRates = rates.map((ave) => {
      if (ave.id == id) {
        return {...ave, [name]: value }
      }
      return ave
    })

    setAllValue(listName, newRates)
    ratesDispatch({
      type: 'edit',
      newRates
    });
  };

  const replaceImg = (e, rate, name) => {
    const newImg = e ? e[0] : null
    const objIndex = rates.findIndex(obj => obj.id == rate.id);
    const newRates = rates.map((ave, i) => {
      if (i === objIndex) {
        return {...ave, [name]: newImg }
      }
      return ave
    })

    setAllValue(listName, newRates)
    ratesDispatch({
      type: 'edit',
      newRates: newRates,
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
        setValue('stars', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );
  const handleRemoveImg = useCallback(() => {
    setValue('stars', null);
    setImg(null)
  }, [setValue]);

  const handleRemoveNewAttr = (e) => {
    const { id } = e.target;
    const newRates = rates.filter((av) => av.id != id)
    setAllValue(listName, newRates)
    ratesDispatch({
      type: 'remove',
      id,
      newRates
    });
  };
  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>

      <Stack spacing={3} sx={{ p: 3 }}>

      <Typography variant="subtitle2">{values.title}</Typography>

      <RHFTextField id={rate?.id} onChange={handleNewAttrChange} name="title" label="Rate Title" />


      <Stack spacing={1.5}>
        <Typography variant="subtitle2">Stars Image</Typography>
        <RHFUpload
          name="stars"
          maxSize={3145728}
          onDrop={(e) => {
            replaceImg(e, rate, 'stars')
            handleDropImg(e)
          }}
          onDelete={(e) => {
            replaceImg(null, rate, 'stars')
            handleRemoveImg(e)
          }}
          file={values.stars || stars}

        />

      </Stack>
      <Button
        id={rate.id}
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
  rates: PropTypes.array.isRequired,
  rate: PropTypes.object.isRequired,
  ratesDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}