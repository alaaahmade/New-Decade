import { Button, CardHeader, Stack, Typography } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PropTypes from 'prop-types';
import { useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormProvider from 'src/components/hook-form/form-provider';
import RHFTextField from 'src/components/hook-form/rhf-text-field copy';
import { PropsContext } from 'src/context/props';
import { PropMethods_Reducer } from 'src/utils/attributeReduce';
import { MethodsCard } from './methodsForm';
import { MethodsForms } from '../MethodsForms';


export const PropertiesCard = ({ props, prop, propsDispatch, setAllValue, listName }) => {
  const [stars, setImg] = useState(null);
  const [starsChange, setImgChange] = useState(false)

  const {setCallBack} = useContext(PropsContext)

  const initMethods = prop?.list || []

  
  const [Methods, methods_arDispatch] = useReducer(
    PropMethods_Reducer,
    initMethods,
  );

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().min(3).max(100).required('Prop title is required'),
    stars: Yup.array().min(1).required('Prop methods is required'),
  });

  const defaultValues = useMemo(
    () => ({
      title: prop?.title || '',
      list: prop?.list || [],
    }),
    [prop]
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
    if (prop) {
      reset(defaultValues);
      setCallBack(onSubmit)
    }
  }, [prop, defaultValues, reset]);

  const handleNewAttrChange = (e) => {
    e.preventDefault();
    const { value, id, name } = e.target;
    const newProps = props.map((ave) => {
      if (ave.id == id) {
        return {...ave, [name]: value }
      }
      return ave
    })

    setAllValue(listName, newProps)
    propsDispatch({
      type: 'edit',
      newProps
    });
  };
  useEffect(() => {
    setAllValue(listName, props)
  }, [Methods, props])

  const handleRemoveNewAttr = (e) => {
    const { id } = e.target;
    const newProps = props.filter((av) => av.id != id)
    setAllValue(listName, newProps)
    propsDispatch({
      type: 'remove',
      id,
      newProps
    });
  };
  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>

      <Stack spacing={3} sx={{ p: 3 }}>

      <Typography variant="subtitle2">{values.title}</Typography>

      <RHFTextField id={prop?.id} onChange={handleNewAttrChange} name="title" label="Prop Title" />


      <Stack spacing={1.5}>
      <CardHeader title="Methods" />
          <MethodsForms setAllValue={setValue} setMainVal={setAllValue} propMethods={Methods} propMethodsDispatch={methods_arDispatch} listName={'list'} prop={prop}/>
      </Stack>
      <Button
        id={prop.id}
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

PropertiesCard.propTypes = {
  props: PropTypes.array.isRequired,
  prop: PropTypes.object.isRequired,
  propsDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}