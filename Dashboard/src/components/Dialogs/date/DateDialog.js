import * as React from 'react';
import Button from '@mui/material/Button';
import { DateCalendar } from '@mui/x-date-pickers';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { Box, FormHelperText, Paper, RadioGroup, Stack, Typography } from '@mui/material';
import { useResponsive } from 'src/hooks/use-responsive';
import CustomOption from '../sortBy/CustomOption';


const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function DateDialog({
  open,
  onClose,
  error,
  startDate,
  endDate,
  onChangeEndDate,
  onChangeStartDate,
  handelFilterTime,
}) {
  const [value, setValue] = React.useState('');

  const isCalendarView = value === 'Custom';
  const mdUp = useResponsive('up', 'md');


  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          '& .MuiDialog-paper': {
            width: '45em',
            maxWidth: '100%',
            borderRadius: '8px',
            padding: '1.4em 1em',
          }
        }}
      >
        <DialogTitle>Sort by</DialogTitle>
        <DialogContent>
        <RadioGroup
          onChange={(e) => {
            setValue(e.target.value)
            handelFilterTime(e.target.value)
          }}
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          fullWidth
          value={value}
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            padding: '0em !important',
            paddingBottom: isCalendarView ? '1em' : '-1em',
            mb: isCalendarView ? '1em' : '-1em',
            paddingRight: '0',
            '@media (max-width: 600px)': {
            flexDirection: 'column',
            width: '20em',
            },
          }}
          >

          <CustomOption label="Today" />
          <CustomOption label="Last 7 days" />
          <CustomOption label="Last 30 days" />
          <CustomOption label="Custom" />
        </RadioGroup>

        {isCalendarView && <DialogTitle sx={{m: 0,p: 0}}>Custom</DialogTitle>}

        <Stack
          justifyContent="center"
          spacing={1}
          direction={isCalendarView && mdUp ? 'row' : 'column'}
          sx={{ p: '1em 0' }}
        >
          {isCalendarView && (
            <>
              
            <Box 
              sx={{
                borderRadius: 2,
                maxWidth: '50%',
                minWidth: '50%',
              }}
            >
              <Typography sx={{ color: '#586474', fontSize: '12px', p: '0 1em 0.5em 1em' }}>Starting date:</Typography>
            <Paper
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  borderColor: 'divider',
                  maxWidth: '100%',
                  minWidth: '100%',
                }}
              >
                <DateCalendar
                sx={{
                  width: '100%',
                  '& .MuiButtonBase-root.Mui-selected': {
                    backgroundColor: '#2F80ED'
                  },
                  '& .MuiButtonBase-root': {
                    borderRadius: '8px',
                    fontWeight: 500
                  },
                  '& .MuiButtonBase-root.Mui-selected:hover': {
                    backgroundColor: '#0001789e'
                  },
                  '& .MuiButtonBase-root:focus.Mui-selected': {
                    backgroundColor: '#2F80ED'
                  },
                  '& .MuiTypography-root.MuiDayCalendar-weekDayLabel':{
                    color: '#000',
                    fontWeight: 500
                  }
                  
                  
                }}value={startDate || null} onChange={onChangeStartDate} />
              </Paper>
            </Box>
            <Box 
              sx={{
                borderRadius: 2,
                maxWidth: '50%',
                minWidth: '50%',
              }}
            >
              <Typography sx={{ color: '#586474', fontSize: '12px', p: '0 1em 0.5em 1em' }}>End date:</Typography>
              <Paper
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  borderColor: 'divider',
                  maxWidth: '50',
                  minWidth: '50%',
                }}
              >
                <DateCalendar
                sx={{
                  width: '100%',
                  '& .MuiButtonBase-root.Mui-selected': {
                    backgroundColor: '#2F80ED'
                  },
                  '& .MuiButtonBase-root': {
                    borderRadius: '8px',
                    fontWeight: 500
                  },
                  '& .MuiButtonBase-root.Mui-selected:hover': {
                    backgroundColor: '#0001789e'
                  },
                  '& .MuiButtonBase-root:focus.Mui-selected': {
                    backgroundColor: '#2F80ED'
                  },
                  '& .MuiTypography-root.MuiDayCalendar-weekDayLabel':{
                    color: '#000',
                    fontWeight: 500
                  }
                }} value={endDate || null} onChange={onChangeEndDate} />
              </Paper>
            </Box>

            </>
          )}
        </Stack>

        {error && (
          <FormHelperText error sx={{ px: 2 }}>
            End date must be later than start date
          </FormHelperText>
        )}
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
              setValue('')
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

DateDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  onChangeStartDate: PropTypes.func,
  onChangeEndDate: PropTypes.func,
  error: PropTypes.bool,
  handelFilterTime: PropTypes.func,
}