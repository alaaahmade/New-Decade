// @mui
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
// theme
import { paper } from 'src/theme/css';
//
import { HEADER } from '../../../config-layout';

// ----------------------------------------------------------------------

export const ListItem = styled(ListItemButton, {
  shouldForwardProp: prop =>
    prop !== 'active' &&
    prop !== 'open' &&
    prop !== 'offsetTop' &&
    prop !== 'subItem',
})(({ active, open, offsetTop, subItem, theme }) => {
  return {
    ...theme.typography.subtitle2,
    fontWeight: 'normal',
    padding: 0,
    height: '100%',
    fontSize: 14,
    color: theme.palette.text.wight,
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.shorter,
    }),
    '&:hover': {
      opacity: 0.48,
      backgroundColor: 'transparent',
    },
    // Sub item
    ...(subItem && {
      ...theme.typography.body2,
      color: theme.palette.text.secondary,
    }),
    // offsetTop
    ...(offsetTop && {
      color: theme.palette.primary.contrastText,
    }),
    // Active
    ...(active && {
      color: theme.palette.text.active,
      // '&::before': dotActive,
    }),
    // Active sub item
    ...(active &&
      subItem && {
        ...theme.typography.subtitle2,
        color: theme.palette.text.primary,
        '&::before': {
          // ...dotActive,
          color: theme.palette.primary.main,
        },
      }),
    // Open
    ...(open && {
      opacity: 0.48,
    }),
  };
});

// ----------------------------------------------------------------------

export const StyledMenu = styled(Paper)(({ theme }) => ({
  ...paper({ theme }),
  left: 0,
  right: 0,
  margin: 'auto',
  position: 'absolute',
  zIndex: theme.zIndex.modal,
  padding: theme.spacing(3, 1, 3, 3),
  maxWidth: theme.breakpoints.values.sm,
  top: HEADER.H_DESKTOP_OFFSET,
  boxShadow: theme.customShadows.dropdown,
  borderRadius: theme.shape.borderRadius * 2,
}));

export const StyledMenuArrow = styled(Paper)(({ theme }) => ({
  ...paper({ theme }),
  position: 'fixed',
  zIndex: theme.zIndex.modal - 1,
  boxShadow: theme.customShadows.dropdown,
  borderRadius: 0,
  top: -5,
  width: 10,
  height: 10,
  rotate: '45deg',
}));

// ----------------------------------------------------------------------

export const StyledSubheader = styled(ListSubheader)(({ theme }) => ({
  ...theme.typography.overline,
  padding: 0,
  fontSize: 11,
  color: theme.palette.text.primary,
}));
