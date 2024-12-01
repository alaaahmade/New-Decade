import { Box, Button, Divider, Typography } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PropTypes from 'prop-types';
import { AttributeCard } from './AttributeForms';


export const AttributeForms = ({ trusteds, trustedsDispatch, setAllValue, listName }) => {


  const handleAddNewAttr = () => {
    setAllValue(listName, [...trusteds, {id: trusteds?.length}])
    trustedsDispatch({
      type: 'add',
      id: trusteds?.length
    });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // gap: 2,
          flexWrap: 'wrap',
        }}
      >
        
      {trusteds?.map(trusted => (
          <Box
          sx={{
            width: '50%',
          }}
          >
          <AttributeCard
            key={trusted.id}
            id={trusted.id}
            trusted={trusted}
            trusteds={trusteds}
            trustedsDispatch={trustedsDispatch}
            setAllValue={setAllValue}
            listName={listName}
          />
          </Box>
        ))}
</Box>
      {/* <Button
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
      </Button> */}
    </>
  );
};

AttributeForms.propTypes = {
  trusteds: PropTypes.array.isRequired,
  trustedsDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}
