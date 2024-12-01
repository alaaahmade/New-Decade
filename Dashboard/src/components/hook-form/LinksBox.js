import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
// @mui
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Input, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import FormProvider from './form-provider';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFTextField from './rhf-text-field';
import { useMemo, useState } from 'react';
import TypeSelect from 'src/sections/header/AttributeForms/AttributeForms/SelectBox';
import { _mock } from 'src/_mock/_mock';

// ----------------------------------------------------------------------

export function LinksBox({
  list,
  setList,
  handleDeleteItem,
  linkTitle,
  linkPath,
  handleAddItem,
  handleChangeLink,
  title,
  setParent = () => undefined,
  parent ='',
  type = 'footer'
}) {

  const NewLinkSchema = Yup.object().shape({
    title: Yup.string().min(4).max(500).required('headLine Text is required'),
    path: Yup.string().min(4).max(100).required('headLine links text is required'),

  });

  const methods = useForm({
    resolver:  async (data, context, options) => {
      const valid =await yupResolver(NewLinkSchema)(data, context, options)
      return valid 
    },
  });
  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const [error, setError] = useState({
    title: 'headLine Text is required'
  })

  const defaultValues = useMemo(
    () => ({
      title: '',
      path: ''
    }),
    []
  );

  const onSubmit = handleSubmit(async(data) => {
    console.log(data);
    try{
      await handleAddItem()
      reset(defaultValues)
  } catch (error) {
    toast.error(error.response.data.msg || 'Something went wrong!');
    console.error(error);
  }
  }
);

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
    <Box
    sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center'
    }}
    >
    <Typography
    variant='h6'
    sx={{
      mb: 2
    }}
    >{title}</Typography>
    {list.length > 0 && list.map((item, i) => [
        <Box
        key={_mock.id(i*2)}
        sx={{
          width: '100%',
          display:'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        
        <Input sx={{
          width: '49%',
        }}
        placeholder='title'
        value={item.title}
        id={i}
        onChange={(e) => {
          const newList = list.map((el, index) => {
            if (i === index) {
              return {...el, title: e.target.value }
            }else {
              return el
            }
          } )
          setList(newList)
        }}

        />              
        <Input sx={{
          width: '49%'
        }}
        placeholder='link'
        id={i}
        value={item.path}
        onChange={(e) => {
          const newList = list.map((el, index) => {
            if (i === index) {
              return {...el, path: e.target.value }
            }else {
              return el
            }
          } )
          setList(newList)
        }}
        />
        <button
          type="button"
          variant="contained"
          style={{
            alignSelf: 'flex-end',
            m: 2,
            backgroundColor: '#f56161',
            width: '10px !important',
            height: '20px',
            borderRadius: '50%',
            outline: 0,
            border: 0,
            color: '#fff',
            cursor: 'pointer'
          }}
          onClick={() => handleDeleteItem(setList, i, list)}
        >X</button>
      </Box>,
      item?.children?.length > 0 && item?.children[0]?.items?.length > 0 &&
      <ul
        key={_mock.id(i)}
        style={{
          width: '100%',
          display:'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 2
        }}
      >
        {item?.children[0]?.items?.map((element, e) => [
          <li
            key={_mock.id(i*2)}
            id={`${i}_${e}`}
            style={{
              width: '100%',
              display:'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 5
            }}
          >
            - 
        <Input sx={{
          width: '49%',
        }}
        placeholder='title'
        id={`${i}_${e}`}
        value={element.title}
        onChange={(e) => {
          element.title = e.target.value
          const newList = list.map((el, index) => {
            if (i === index) {
              return {...item }
            }else {
              return el
            }
          } )
          setList(newList)
        }}

        />              
        <Input sx={{
          width: '49%'
        }}
        placeholder='link'
        value={element.path}
        id={`${i}_${e}`}
        onChange={(e) => {
          element.path = e.target.value
          const newList = list.map((el, index) => {
            if (i === index) {
              return {...item }
            }else {
              return el
            }
          } )
          setList(newList)
        }}
        />
        <button
          type="button"
          variant="contained"
          style={{
            alignSelf: 'flex-end',
            m: 2,
            backgroundColor: '#f56161',
            width: '10px !important',
            height: '20px',
            borderRadius: '50%',
            outline: 0,
            border: 0,
            color: '#fff',
            cursor: 'pointer'
          }}
          onClick={() => handleDeleteItem(setList, `${i}_${e}`, list)}
        >X</button>
          </li>,
          element?.children?.length > 0 && element?.children[0]?.items?.length > 0
           && (
            <ul
            style={{
              width: '100%',
              display:'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 2
            }}
          >
            {/* <li>{element?.children[0]?.items[0].title}</li> */}
            {element?.children[0]?.items?.map((subSub, es) => (
              <li
              key={_mock.id(es)}
              id={`${i}_${e}_${es}`}
              style={{
                width: '100%',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 5
              }}
              >
              - 
              <Input sx={{
              width: '49%',
              }}
              id={`${i}_${e}_${es}`}
              placeholder='title'
              value={subSub.title}
              onChange={(e) => {
                subSub.title = e.target.value
              const newList = list.map((el, index) => {
              if (i === index) {
                return item
              }else {
                return el
              }
              } )
              setList(newList)
              }}

              />              
              <Input sx={{
              width: '49%'
              }}
              id={`${i}_${e}_${es}`}
              placeholder='link'
              value={subSub.path}
              onChange={(e) => {
                subSub.path = e.target.value
              const newList = list.map((el, index) => {
              if (i === index) {
                return item
              }else {
                return el
              }
              } )
              setList(newList)
              }}
              />
              <button
              type="button"
              variant="contained"
              style={{
              alignSelf: 'flex-end',
              m: 2,
              // p: '0',
              backgroundColor: '#f56161',
              width: '10px !important',
              height: '20px',
              borderRadius: '50%',
              outline: 0,
              border: 0,
              color: '#fff',
              cursor: 'pointer'
              }}
              onClick={() => handleDeleteItem(setList, `${i}_${e}_${es}`, list)}
              >X</button>
              </li>
              ))}
            </ul>
          )
        ])}
      </ul>
      
    ])}
    <Box
      sx={{
        width: '100%',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >

      <RHFTextField
      type="text"
      label="نص رابط الانتقال باللغة العربية"
      sx={{
        width: type === 'footer' ? '49%' : '40%', 
        m: '1em 0'
      }}
        placeholder='title'
        name='title'
        onChange={(e) => {
          handleChangeLink(e)
        }}
        value={linkTitle}
        disableUnderline
      />              
      <RHFTextField
      type="text"
      label="رابط الانتقال"
      sx={{
        width: type === 'footer' ? '49%' : '40%',
        m: '1em 0'}}
        placeholder='link'
      name='path'
      onChange={(e) => {
        handleChangeLink(e)
        // reset(defaultValues)
      }}
        disableUnderline
        value={linkPath}
      />
        {type !== 'footer' && <TypeSelect handleChange={(e) => {
    setParent(e.target.value)
  }} list={list} parent={parent} setParent={setParent}/>}
    </Box>
    <LoadingButton
      type="button"
      variant="contained"
      size="large"
      loading={isSubmitting}
      // sx={{ ml: 2 }}
      onClick={() => {
        if(!linkTitle){
          setError({
            title: 'headLine Text is required'
          })
        }else {
          setError({
            title: ''
          })
        }
        reset()
        if(!linkPath || !linkTitle) {
          onSubmit()
        }
        handleAddItem()
      }}
      sx={{
        alignSelf: 'flex-end',
        m: 0,
        p: '0 2em'
      }}
    >Add</LoadingButton>
    </Box>
    </FormProvider>
  );
}

LinksBox.propTypes = {
  linkPath: PropTypes.string,
  linkTitle: PropTypes.string, 
  handleDeleteItem: PropTypes.func,
  list: PropTypes.array,
  setList: PropTypes.func,
  title: PropTypes.string,
  handleAddItem: PropTypes.func,
  handleChangeLink: PropTypes.func,
  setParent: PropTypes.func,
  parent: PropTypes.string,
  type: PropTypes.string
};
