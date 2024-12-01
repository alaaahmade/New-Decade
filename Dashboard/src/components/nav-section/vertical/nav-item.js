import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
// routes
import { RouterLink } from 'src/routes/components';
//
import Iconify from '../../iconify';
//
import { StyledItem, StyledIcon } from './styles';
import CustomNumber from './CustomNumber';

// ----------------------------------------------------------------------

export default function NavItem({ item, open, depth, active, config, externalLink, Sub , isOpen,  ...other }) {
  const { textColor, title, path, icon, info, children, disabled, caption, roles, orderLength, takeawaysLength } = item;

  // console.log(item);

  const subItem = depth !== 1;
  const renderContent = (
    <StyledItem
      disableGutters
      disabled={disabled}
      active={active}
      depth={depth}
      config={config}
      Sub={Sub}
      isOpen={isOpen}
      {...other}
    >

      <>
        {icon && <StyledIcon size={config.iconSize}>{icon}</StyledIcon>}
      </>

      {!(config.hiddenLabel && !subItem) && (
        <ListItemText
          primary={title}
          secondary={
            caption ? (
              <Tooltip title={caption} placement="top-start">
                <span>{caption}</span>
              </Tooltip>
            ) : null
          }
          primaryTypographyProps={{
            color: `${textColor || 'inherit'}`,
            noWrap: true,
            typography: 'body2',
            textTransform: 'capitalize',
            fontWeight: active ? 'fontWeightSemiBold' : 'fontWeightMedium',
          }}
          secondaryTypographyProps={{
            noWrap: true,
            component: 'span',
            typography: 'caption',
            color: `${textColor || 'text.disabled'}`,
          }}
        />
      )}

      {info && (
        <Box component="span" sx={{ ml: 1, lineHeight: 0 }}>
          {info}
        </Box>
      )}

      {!!children && (
        <Iconify
          width={16}
          icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
          sx={{ ml: 1, flexShrink: 0 }}
        />
      )}
      {orderLength && <CustomNumber number={orderLength} active={active} />}
      {takeawaysLength && <CustomNumber number={takeawaysLength} active={active} />}
      {/* {takeawaysLength && <Typography variant="body2">{takeawaysLength}</Typography>} */}
    </StyledItem>
  );

  // Hidden item by role
  if (roles && !roles.includes(`${config.currentRole}`)) {
    return null;
  }

  // External link
  if (externalLink)
    return (
      <Link
        href={path}
        target="_blank"
        rel="noopener"
        underline="none"
        color="inherit"
        sx={{
          ...(disabled && {
            cursor: 'default',
          }),
        }}
      >
        {renderContent}
      </Link>
    );

  // Has child
  if (children) {
    return renderContent;
  }

  // Default
  return (
    <Link
      component={RouterLink}
      href={path}
      underline="none"
      color="inherit"
      sx={{
        ...(disabled && {
          cursor: 'default',
        }),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1
      }}
    >
      {renderContent}
    </Link>
  );
}

NavItem.propTypes = {
  active: PropTypes.bool,
  config: PropTypes.object,
  depth: PropTypes.number,
  externalLink: PropTypes.bool,
  item: PropTypes.object,
  open: PropTypes.bool,
  Sub: PropTypes.bool,
  isOpen: PropTypes.bool
};
