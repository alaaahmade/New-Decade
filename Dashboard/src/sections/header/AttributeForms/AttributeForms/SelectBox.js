import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

export default function TypeSelect({ handleChange, list, parent, setParent}) {

  return (
    <Box sx={{ minWidth: '8%', width: '15%' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Parent</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={parent}
          label={'Parent'}
          onChange={(e) => {
            handleChange(e)
          }}
        >
          {list?.length > 0 && list?.map((item, i) => [
            <MenuItem value={i} dir='column' sx={{
              flexDirection: 'column'
            }}>
              {item.title}
              </MenuItem>,
              
              item?.children?.length > 0 && item?.children[0]?.items?.length > 0 && 
              item?.children[0]?.items?.map((sub, e) => (
                <MenuItem value={`${i}_${e}`}> {sub.title} </MenuItem>
              ))
              

              ])}

        </Select>
      </FormControl>
    </Box>
  );
}

TypeSelect.propTypes = {
  handleChange: PropTypes.func,
  list: PropTypes.array
}

