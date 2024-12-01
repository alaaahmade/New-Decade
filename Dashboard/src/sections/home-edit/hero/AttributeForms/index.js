import { Button, Divider, Typography } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PropTypes from 'prop-types';
import { AttributeCard } from './AttributeForms';


export const AttributeForms = ({ attributes, attributesDispatch }) => {
  const handleAddNewAttr = () => {
    attributesDispatch({
      type: 'add',
    });
  };

  return (
    <>
      
      {attributes.map(attribute => (
          <AttributeCard
            key={attribute.id}
            attribute={attribute}
            attributes={attributes}
            attributesDispatch={attributesDispatch}
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
  attributes: PropTypes.array.isRequired,
  attributesDispatch: PropTypes.func.isRequired,
}
