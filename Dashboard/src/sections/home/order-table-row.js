import PropTypes from 'prop-types';
import { format } from 'date-fns';
// @mui
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ListItemText from '@mui/material/ListItemText';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { Sentiment } from 'src/components/sentiment';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {  useSettingsContext } from 'src/components/settings/context/settings-context';
import { ParticipantPopup } from 'src/components/Dialogs';
import {BiFile} from 'react-icons/bi';
import { useHomeData } from 'src/layouts/dashboard/config-navigation';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function OrderTableRow({ row, selected , onDeleteRow, isLoading }) {

  const homeData = useHomeData()

  const { createdAt, user, id } = row;
  const [name, setName] = useState('sss');

  const confirm = useBoolean();

  const popover = usePopover();

  const { themeLayout } = useSettingsContext()
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const renderPrimary = (
    <TableRow hover selected={selected}>

      <TableCell 
        sx={{ fontWeight: 500 }}
        align='left'
        // height='10px'
      >
        <Box
          sx={{
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
            },
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            justifyContent: 'flex-start',
          }}
        >
        
          
          {user && (
            <>
            <Avatar alt={user.email} src={user.email} sx={{ mr: 1, width: 32, height: 32 }} />
              <Typography sx={{
            height: '30px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>{user.email}</Typography>
            </>
          )}
        </Box>
      </TableCell>
      <TableCell
        align='left'
      >
        <ListItemText
          primary={format(new Date(createdAt), 'dd MMM yyyy')}
          primaryTypographyProps={{ typography: 'body2', noWrap: true }}
          sx={{color: '#7E8695'}}
        />
      </TableCell>
      <TableCell>
      <LoadingButton
          sx={{color: '#7E8695'}}
          onClick={onDeleteRow}
          loading={isLoading}
      >
        Delete
      </LoadingButton>
      </TableCell>
    </TableRow>
  );



  return (
    <>
      {renderPrimary}
      <ParticipantPopup
        handlePopoverClose={handlePopoverClose}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            confirm.onTrue();
            popover.onClose();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:eye-bold" />
          View
        </MenuItem>
      </CustomPopover>

    </>
  );
}

OrderTableRow.propTypes = {
  onDeleteRow: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
  isLoading: PropTypes.bool
};
