import React, { forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import {BiSolidDownArrow} from 'react-icons/bi';
import Emails from './Emails';

const Transition = forwardRef((props, ref) => <Slide direction="down" ref={ref} {...props} />);

export default function ShareDialog({open, onClose}) {
  const [emails, setEmails] = React.useState([]);
  const [validationError, setValidationError] = React.useState(false)
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const addEmail = (e) => {
    if (e.key === 'Enter') {
      if (emailRegex.test(e.target.value)){
        setEmails([...emails, e.target.value])
        e.target.value = '';
      } else {
        setValidationError(true)
      }
    }
  }

  const removeEmail = (index) => {
    setEmails(emails.filter((email, i) => i !== index))
  }
  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '32px',
          p: '1.5em 0'
        }}>Share report</DialogTitle>
        <DialogContent sx={{width:'35em', padding: '3em'}}>

            <Typography sx={{
              width: '100%',
              borderRadius: '4px',
              fontWeight: 500
            }}>Share report</Typography>
            <Box sx={{
              width: '100%',
              border: '1px solid #D6D8E1',
              height: '3em',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '.5em'
            }}>
              <input style={{
                width: '80%',
                border: 'none',
                outline: 'none',
                fontSize: '16px',
                }}
                type='email'
                placeholder='insert email address'
                onKeyDown={addEmail}
                onChange={() => setValidationError(false)}
              />
              <FormControl 
                sx={{
                  m: 1,
                  height: '3em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue='Viewer'
                  sx={{
                    '& .MuiSelect-select.MuiInputBase-input': {
                      backgroundColor: 'transparent',
                    }
                  }}
                  variant='standard'
                  disableUnderline
                  IconComponent={() => (
                    <BiSolidDownArrow />
                  )}

                >
                  <MenuItem value='Viewer'>Viewer</MenuItem>
                  <MenuItem value='Admin'>Admin</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {validationError &&
              <Typography sx={{
                color: 'red',
                fontSize: '12px',
                pl: 1
              }}>
                Please add a valid email
              </Typography>
            }
            <Emails emails={emails} removeEmail={removeEmail}/>
      </DialogContent>
        <DialogActions sx={{ mt: -3, width: '100%', p: '0 3em 2em 3em'}}>
          <Button
            sx={{
              width: '50%',
              height: '45px',
              borderRadius: '6px',
              padding: '10px, 15px',
              backgroundColor: '#E8E8EE',
              fontWeight: 200
            }} 
            onClick={() => {
              onClose()
            }}
          >
            CANCEL
          </Button>
          <Button
            sx={{
              width: '50%',
              height: '45px',
              borderRadius: '6px',
              padding: '10px, 15px',
              backgroundColor: '#2292F9',
              color: '#fff',
              fontWeight: 200,
            }} 
            onClick={() => {
              onClose('continue')
            }}
            disabled={emails.length === 0}
          >
            CONTINUE
          </Button>
        </DialogActions>
      </Dialog>
  );
}

ShareDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}