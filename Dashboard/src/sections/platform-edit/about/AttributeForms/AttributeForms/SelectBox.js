import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

export default function TypeSelect({type, handleChange}) {


  return (
    <Box sx={{ minWidth: 120, width: '100%' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">نوع الطلب</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="text">نص</MenuItem>
          <MenuItem value="image">صورة</MenuItem>
          <MenuItem value="file">ملف</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

TypeSelect.propTypes = {
  type: PropTypes.string,
  handleChange: PropTypes.func
}