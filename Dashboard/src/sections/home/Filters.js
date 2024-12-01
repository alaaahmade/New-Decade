import PropTypes from 'prop-types';
import { useCallback } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
// components
import Iconify from 'src/components/iconify';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { DateDialog, RevenueDialog, SortByDialog } from 'src/components/Dialogs';
import { useHomeData } from 'src/layouts/dashboard/config-navigation';
// ----------------------------------------------------------------------

export default function Filters({
  openDateRange,
  onCloseDateRange,
  onOpenDateRange,
  openSortByDialog,
  onOpenSortByDialog,
  onCloseSortByDialog,
  filters,
  onFilters,
  dateError,
  
}) {

  const homeData = useHomeData()


  const handleFilterEmail = useCallback(
    (event) => {
      onFilters('email', event.target.value);
    },
    [onFilters]
  );

  const handleFilterStartDate = useCallback(
    (newValue) => {
      onFilters('startDate', newValue);
    },
    [onFilters]
  );

  const handleFilterEndDate = useCallback(
    (newValue) => {
      onFilters('endDate', newValue);
    },
    [onFilters]
  );

  const handelFilterTime = useCallback(
    (newValue) => {
      onFilters('Time', newValue);
    },
    [onFilters]
  )

  const renderFilterEmail = (
    <TextField
      value={filters.Email}
      onChange={handleFilterEmail}
      placeholder="Search..."
      InputProps={{
        sx: {
          height: '2.7em',          
        },
        startAdornment: (
          <InputAdornment position="start">
            {homeData[0].searchIcon}
          </InputAdornment>
        ),
      }}
      sx={{
        width: { xs: 1, md: 260 },
        height: '2.7em',
      }}
    />
  );

  const renderFilterDate = (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      color: '#8e95a2'
    }}>

      <Button
        color="inherit"
        onClick={() => {
          onOpenDateRange();
        }}
        startIcon={
          <Iconify
            icon={openDateRange ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: -0.5 }}
          />
        }
      >
          Time
      </Button>

      <Button
        color="inherit"
        onClick={onOpenSortByDialog}
        startIcon={
          <Iconify
            icon={openDateRange ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: -0.5 }}
          />
        }
      >
          Sort
      </Button>
      <SortByDialog onFilters={onFilters} open={openSortByDialog} onClose={onCloseSortByDialog} />
      <DateDialog
        variant="calendar"
        startDate={filters.startDate}
        endDate={filters.endDate}
        onChangeStartDate={handleFilterStartDate}
        onChangeEndDate={handleFilterEndDate}
        open={openDateRange}
        onClose={onCloseDateRange}
        selected={!!filters.startDate && !!filters.endDate}
        error={dateError}
        handelFilterTime={handelFilterTime}
      />
    </Box>
  );

  return (
    <Stack
      spacing={1}
      direction={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: 'flex-end', md: 'center' }}
      sx={{ width: 1, padding: 3 }}
    >
      {renderFilterEmail}

      <Stack spacing={1} direction="row" alignItems="center" justifyContent="flex-end" flexGrow={1}>
        {renderFilterDate}

      </Stack>
    </Stack>
  );
}

Filters.propTypes = {
  dateError: PropTypes.bool,
  filters: PropTypes.object,
  onCloseDateRange: PropTypes.func,
  onFilters: PropTypes.func,
  onOpenDateRange: PropTypes.func,
  openDateRange: PropTypes.bool,
  openRevenueDialog: PropTypes.bool,
  onCloseRevenueDialog: PropTypes.func,
  onOpenRevenueDialog: PropTypes.func,
  openSortByDialog: PropTypes.bool,
  onOpenSortByDialog: PropTypes.func,
  onCloseSortByDialog: PropTypes.func,
  openCreateDialog: PropTypes.bool,
  onCloseCreateDialog: PropTypes.func,
  onOpenCreateDialog: PropTypes.func,
};
