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
import { RHFUpload } from 'src/components/hook-form';
import { LogisticsSolutionContext } from 'src/context/logisticsSolution';




export const AttributeCard = ({ solutions, solution, solutionsDispatch, setAllValue, listName }) => {

  const {setCallBack} = useContext(LogisticsSolutionContext)

  const NewBlogSchema = Yup.object().shape({
    num: Yup.string().min(1).max(20).required('name is required'),

    title: Yup.string().min(3).max(50).required('title is required'),

    color: Yup.string().max(50).required('Image is required'),
  });

  const defaultValues = useMemo(
    () => ({
      num: solution?.num || '',

      title: solution?.title || '',

      color: solution?.color || '',
    }),
    [solution]
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
    console.log(`"${values.title}" is Valid`);
  })
  useEffect(() => {
    if (solution) {
      reset(defaultValues);
      setCallBack(onSubmit)
    }
  }, [solution, defaultValues, reset]);

  const handleNewAttrChange = (e) => {
    e.preventDefault();
    const { value, id, name } = e.target;
    const newSolution = solutions.map((ave) => {
      if (ave.id == id) {
        return {...ave, [name]: value }
      }
      return ave
    })

    setAllValue(listName, newSolution)
    solutionsDispatch({
      type: 'edit',
      newSolution
    });
  };

  const handleRemoveNewAttr = (e) => {
    const { id } = e.target;
    const newSolution = solutions.filter((av) => av.id != id)
    setAllValue(listName, newSolution)
    solutionsDispatch({
      type: 'remove',
      id,
      newSolution
    });
  };
  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>

      <Stack spacing={3} sx={{ p: 3 }}>

      <Typography variant="subtitle2">{values.name}</Typography>

      <RHFTextField id={solution?.id} onChange={handleNewAttrChange} name="num" label="Solution Number" />

      <RHFTextField id={solution?.id} onChange={handleNewAttrChange} name="title" label="Solution Title" />

      <RHFTextField id={solution?.id} onChange={handleNewAttrChange} type="text" name="color" label="Solution Color"/>

      <Button
        id={solution.id}
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
  solutions: PropTypes.array.isRequired,
  solution: PropTypes.object.isRequired,
  solutionsDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}