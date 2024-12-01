import { Button, Divider, Typography } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PropTypes from 'prop-types';
import { AttributeCard } from './AttributeForms';


export const AttributeForms = ({ challenges, challengesDispatch, setAllValue, listName }) => {


  const handleAddNewAttr = () => {
    setAllValue(listName, [...challenges, {id: challenges?.length}])
    challengesDispatch({
      type: 'add',
      id: challenges?.length
    });
  };

  return (
    <>
      
      {challenges?.map(challenge => (
          <AttributeCard
            key={challenge.id}
            id={challenge.id}
            challenge={challenge}
            challenges={challenges}
            challengesDispatch={challengesDispatch}
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
  challenges: PropTypes.array.isRequired,
  challengesDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}
