import { Button, Divider, Typography } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PropTypes from 'prop-types';
import { AttributeCard } from './AttributeForms';
import { MethodsCard } from './PropertiesForms/methodsForm';
import { random } from 'lodash';
// import { MethodsCard } from './PropertiesForms/propMethodsForm';


export const MethodsForms = ({ propMethods, propMethodsDispatch, setAllValue, listName, setMainVal, prop }) => {


  const handleAddNewAttr = () => {
    prop.list = [...propMethods, {id: random(true)}]
    propMethodsDispatch({
      type: 'add',
      id: random(true)
    });
  };

  return (
    <>
      
      {propMethods?.map(method => (
          <MethodsCard
            key={method.id}
            id={method.id}
            propMethod={method}
            propMethods={propMethods}
            propMethodsDispatch={propMethodsDispatch}
            setAllValue={setAllValue}
            listName={listName}
            setMainVal={setMainVal}
            prop={prop}
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

MethodsForms.propTypes = {
  propMethods: PropTypes.array.isRequired,
  propMethodsDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired,
  setMainVal: PropTypes.func.isRequired,
  prop: PropTypes.object.isRequired
}
