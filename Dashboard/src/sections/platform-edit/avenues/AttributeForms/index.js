import { Button, Divider, Typography } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PropTypes from 'prop-types';
import { AttributeCard } from './AttributeForms';


export const AttributeForms = ({ avenues, avenuesDispatch, setAllValue, listName }) => {


  const handleAddNewAttr = () => {
    setAllValue(listName, [...avenues, {id: avenues?.length}])
    avenuesDispatch({
      type: 'add',
      id: avenues?.length
    });
  };

  return (
    <>
      
      {avenues?.map(avenue => (
          <AttributeCard
            key={avenue.id}
            id={avenue.id}
            avenue={avenue}
            avenues={avenues}
            avenuesDispatch={avenuesDispatch}
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

AttributeForms.propTypes = {
  avenues: PropTypes.array.isRequired,
  avenuesDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}
