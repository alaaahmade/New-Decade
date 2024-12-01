import { Button } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PropTypes from 'prop-types';
import { DescriptionInput } from 'src/components/components.styled';
import { useState } from 'react';




export const AttributeCard = ({ attributes, attribute, attributesDispatch }) => {
  const [type, setType] = useState('');

  const handleChangeType = (event) => {
    setType(event.target.value );
  };
  const handleNewAttrChange = (e) => {
    e.preventDefault();
    const { value, id, name } = e.target;
    // eslint-disable-next-line eqeqeq
    const objIndex = attributes.findIndex(obj => obj.id == id);
    attributesDispatch({
      type: 'edit',
      newAttr: { ...attributes[objIndex], [name]: value },
      index: objIndex,
    });
  };

  const handleRemoveNewAttr = (e) => {
    const { id } = e.target;
    attributesDispatch({
      type: 'remove',
      id,
    });
  };
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <DescriptionInput
        key={`${attribute.id}attribute title_ar`}
        sx={{ label: { marginLeft: '1rem' }, border: '1px solid #b1a9a9', direction: 'rtl' }}
        name="title_ar"
        onChange={handleNewAttrChange}
        value={attribute.title_ar}
        id={attribute.id}
        label="العنوان بالعربية"
        variant="standard"
        
      />
      <DescriptionInput
        key={`${attribute.id}attribute Description_ar`}
        sx={{ label: { marginLeft: '1rem' }, direction: 'rtl' }}
        name="description_ar"
        onChange={handleNewAttrChange}
        value={attribute.description_ar}
        id={attribute.id}
        label="الوصف بالعربية"
        multiline
        rows={4}
      />

      <DescriptionInput
        key={`${attribute.id}attribute title_en`}
        sx={{ label: { marginLeft: '1rem' }, border: '1px solid #b1a9a9' }}
        name="title_en"
        onChange={handleNewAttrChange}
        value={attribute.title_en}
        id={attribute.id}
        label="English title"
        variant="standard"
        
      />

        <DescriptionInput
          key={`${attribute.id}attribute Description_en`}
          sx={{ label: { marginLeft: '1rem' } }}
          name="description_en"
          onChange={handleNewAttrChange}
          value={attribute.description_en}
          id={attribute.id}
          label="English description"
          multiline
          rows={4}
        />

        <DescriptionInput
          key={`${attribute.id}attribute title_fr`}
          sx={{ label: { marginLeft: '1rem' }, border: '1px solid #b1a9a9' }}
          name="title_fr"
          onChange={handleNewAttrChange}
          value={attribute.title_fr}
          id={attribute.id}
          label="titre français"
          variant="standard"
        
      />
      
        <DescriptionInput
          key={`${attribute.id}attribute Description_fr`}
          sx={{ label: { marginLeft: '1rem' } }}
          name="description_fr"
          onChange={handleNewAttrChange}
          value={attribute.description_fr}
          id={attribute.id}
          label="French description"
          multiline
          rows={4}
      />

      <Button
        id={attribute.id}
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
    </div>
  );
};

AttributeCard.propTypes = {
  attributes: PropTypes.array.isRequired,
  attribute: PropTypes.object.isRequired,
  attributesDispatch: PropTypes.func.isRequired,
}