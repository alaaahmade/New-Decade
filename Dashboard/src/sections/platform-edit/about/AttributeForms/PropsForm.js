import { Button, Divider, Typography } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PropTypes from 'prop-types';
import { PropertiesCard } from './PropertiesForms';
import { random } from 'lodash';


export const PropsForms = ({ props, propsDispatch, setAllValue, listName }) => {

  const handleAddNewAttr = () => {
    setAllValue(listName, [...props, {id: random(true)}])
    propsDispatch({
      type: 'add',
      id: random(true)
    });
  };

  return (
    <>
      
      {props?.map(prop => (
          <PropertiesCard
            key={prop.id}
            id={prop.id}
            prop={prop}
            props={props}
            propsDispatch={propsDispatch}
            setAllValue={setAllValue}
            listName={listName}
          />
        ))}
      <Button
        variant="outlined"
        sx={{ 
          color: '#fff',
          backgroundColor: '#212B36',
          '&:hover': {
            backgroundColor: '#454F5B',
          },
        }}
        startIcon={<NoteAddIcon />}
        onClick={handleAddNewAttr}
      >
        إضافة طلب جديد
      </Button>
    </>
  );
};

PropsForms.propTypes = {
  props: PropTypes.array.isRequired,
  propsDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}
