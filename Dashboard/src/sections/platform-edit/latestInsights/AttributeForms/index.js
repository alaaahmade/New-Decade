import { Button, Divider, Typography } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PropTypes from 'prop-types';
import { AttributeCard } from './AttributeForms';
import { useEffect } from 'react';
import { method } from 'lodash';


export const AttributeForms = ({ insights, insightsDispatch, setAllValue, listName }) => {


  const handleAddNewAttr = () => {
    setAllValue(listName, [...insights, {id: insights?.length}])
    insightsDispatch({
      type: 'add',
      id: insights?.length
    });
  };


  return (
    <>
      
      {insights?.map(insight => (
          <AttributeCard
            key={insight.id}
            id={insight.id}
            insight={insight}
            insights={insights}
            insightsDispatch={insightsDispatch}
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
  insights: PropTypes.array.isRequired,
  insightsDispatch: PropTypes.func.isRequired,
  setAllValue: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired
}
