import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { RadioGroup } from '@mui/material';
import CustomOption from './CustomOption';


const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function SortByDialog({open, onClose, onFilters}) {
  const [radioValue, setRadioValue] = React.useState('');
  const handleSortBy = (e) => {
    onFilters('SortBy' , e.target.value)
    setRadioValue(e.target.value)
  }

  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Sort by</DialogTitle>
        <DialogContent>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
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
          onChange={handleSortBy}
          value={radioValue}
          >

          <CustomOption label="Latest created" />
          <CustomOption label="Earlier created" />
        </RadioGroup>
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
              onClose()
              setRadioValue('')
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
            onClick={() => onClose('continue')}
          >
            CONTINUE
          </Button>
        </DialogActions>
      </Dialog>
  );
}

SortByDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onFilters: PropTypes.func
}