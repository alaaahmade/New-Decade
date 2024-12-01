import { Button, Stack, Typography } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PropTypes from 'prop-types';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormProvider from 'src/components/hook-form/form-provider';
import RHFTextField from 'src/components/hook-form/rhf-text-field copy';
import { ChallengesContext } from 'src/context/challenges';




export const AttributeCard = ({ challenges, challenge, challengesDispatch, setAllValue, listName }) => {

  const {setCallBack} = useContext(ChallengesContext)

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().min(3).max(100).required('Challenge title is required'),
  });

  const defaultValues = useMemo(
    () => ({
      title: challenge?.text || '',
    }),
    [challenge]
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
    if (challenge) {
      reset(defaultValues);
      setCallBack(onSubmit)
    }
  }, [challenge, defaultValues, reset]);

  const handleNewAttrChange = (e) => {
    e.preventDefault();
    const { value, id, name } = e.target;
    const newChallenges = challenges.map((ave) => {
      if (ave.id == id) {
        return {...ave, 'text': value }
      }
      return ave
    })

    setAllValue(listName, newChallenges)
    challengesDispatch({
      type: 'edit',
      newChallenges
    });
  };

  const handleRemoveNewAttr = (e) => {
    const { id } = e.target;
    const newChallenges = challenges.filter((av) => av.id != id)
    setAllValue(listName, newChallenges)
    challengesDispatch({
      type: 'remove',
      id,
      newChallenges
    });
  };
  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>

      <Stack spacing={3} sx={{ p: 3 }}>

      <Typography variant="subtitle2">{values.title}</Typography>

      <RHFTextField id={challenge?.id} onChange={handleNewAttrChange} name="title" label="Solution Title" />

      <Button
        id={challenge.id}
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
  challenges: PropTypes.array.isRequired,
  challenge: PropTypes.object.isRequired,
  challengesDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}