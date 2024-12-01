import PropTypes from 'prop-types';
// @mui
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
// src
import { useSettingsContext } from 'src/components/settings';

// ----------------------------------------------------------------------

export default function TableHeadCustom({
  order,
  orderBy,
  rowCount = 0,
  headLabel,
  numSelected = 0,
  onSort,
  onSelectAllRows,
  sx,
}) {
  const settings = useSettingsContext();

  const isNavMini = settings.themeLayout === 'mini';

  return (
    <TableHead sx={{
      '& .MuiTableRow-root': {
        borderBottom: '1px solid #ECECE9',
      }
    }}>
      <TableRow>
        {onSelectAllRows && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={!!numSelected && numSelected < rowCount}
              checked={!!rowCount && numSelected === rowCount}
              onChange={(event) => onSelectAllRows(event.target.checked)}
            />
          </TableCell>
        )}

        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='left'
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              width: !isNavMini ? headCell.isNavMiniWidth : headCell.width,
              minWidth: !isNavMini ? headCell.isNavMiniWidth : headCell.width,
              borderTopLeftRadius: headCell.label === 'Meeting Report' ? '8px' : '',
              borderTopRightRadius: headCell.label === 'Takeaway' ? '8px' : '',
              fontWeight: '400',
            }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

TableHeadCustom.propTypes = {
  sx: PropTypes.object,
  onSort: PropTypes.func,
  orderBy: PropTypes.string,
  headLabel: PropTypes.array,
  rowCount: PropTypes.number,
  numSelected: PropTypes.number,
  onSelectAllRows: PropTypes.func,
  order: PropTypes.oneOf(['asc', 'desc']),
};
