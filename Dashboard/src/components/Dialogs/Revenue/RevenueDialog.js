import React, { forwardRef, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { FormGroup } from '@mui/material';
import CustomCheckbox from './CustomCheckbox';


const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function RevenueDialog({open, onClose, handleFilterRevenue}) {

  const [checkedOptions, setCheckedOptions] = useState([]); // Initialize the state

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    if (checkedOptions.includes(value)) {
      // If the value is already in the array, remove it
      setCheckedOptions(checkedOptions.filter(item => item !== value));
    } else {
      // If the value is not in the array, add it
      setCheckedOptions([...checkedOptions, value]);
    }
  };

  useEffect(() => {
    handleFilterRevenue(checkedOptions);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedOptions]);

  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Revenue</DialogTitle>
        <DialogContent>
        <FormGroup
          sx={{
            width: '32em',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            padding: '0 0 1em 0',
            mr: '-1.4em',
            '@media (max-width: 600px)': {
              flexDirection: 'column',
              width: '20em',
              }
          }}
            value={checkedOptions}
          >
          <CustomCheckbox handleCheckboxChange={handleCheckboxChange} label="N/A" />
          <CustomCheckbox handleCheckboxChange={handleCheckboxChange} label="Low" />
          <CustomCheckbox handleCheckboxChange={handleCheckboxChange} label="Medium" />
          <CustomCheckbox handleCheckboxChange={handleCheckboxChange} label="High" />
        </FormGroup>
      </DialogContent>
        <DialogActions sx={{borderTop: '1px solid #f0f2f4', paddingTop: '1em'}}>
          <Button
            sx={{
              width: '120px',
              height: '40px',
              borderRadius: '6px',
              padding: '10px, 15px',
              backgroundColor: '#E8E8EE',
              fontWeight: 200
            }} 
            onClick={() => {
              setCheckedOptions([])
              onClose()
            }}
          >
            CANCEL
          </Button>
          <Button
            sx={{
              width: '120px',
              height: '40px',
              borderRadius: '6px',
              padding: '10px, 15px',
              backgroundColor: '#2292F9',
              color: '#fff',
              fontWeight: 200
            }} 
            onClick={() => {
              onClose('continue')
            }}
          >
            CONTINUE
          </Button>
        </DialogActions>
      </Dialog>
  );
}

RevenueDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  handleFilterRevenue: PropTypes.func,
}