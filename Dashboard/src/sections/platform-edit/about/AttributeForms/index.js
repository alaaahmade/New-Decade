import { Button, Divider, Typography } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PropTypes from 'prop-types';
import { AttributeCard } from './AttributeForms';


export const AttributeForms = ({ rates, ratesDispatch, setAllValue, listName }) => {


  const handleAddNewAttr = () => {
    setAllValue(listName, [...rates, {id: rates?.length}])
    ratesDispatch({
      type: 'add',
      id: rates?.length
    });
  };

  return (
    <>
      
      {rates?.map(rate => (
          <AttributeCard
            key={rate.id}
            id={rate.id}
            rate={rate}
            rates={rates}
            ratesDispatch={ratesDispatch}
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
  rates: PropTypes.array.isRequired,
  ratesDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}
