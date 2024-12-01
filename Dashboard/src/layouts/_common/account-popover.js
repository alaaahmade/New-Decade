import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// routes
import { useRouter } from 'src/routes/hooks';
// components
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { useContext } from 'react';
import { AuthGardContext } from 'src/context/AuthContext';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const OPTIONS = [
  {
    label: 'Home',
    linkTo: '/',
  },
  {
    label: 'Profile',
    linkTo: '/Profile',
  },
  {
    label: 'Settings',
    linkTo: '/#2',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const router = useRouter();

  const {signOut, user} = useContext(AuthGardContext)

  const popover = usePopover();

  const handleLogout = async () => {
    try {
      await signOut();
      popover.onClose();
      router.replace('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickItem = (path) => {
    popover.onClose();
    router.push(path);
  };

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(popover.open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          alt="Admin"
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        />
      </IconButton>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 200, p: 0 }}>
        <Box sx={{ p: 2, pb: 1.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.name}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
            <MenuItem sx={{gap: 0.5}} onClick={() => handleClickItem('/dashboard')}>
            <SvgColor src={`/assets/icons/navbar/ic_home.svg`} sx={{ width: 15, height: 15 }}  />
              Home
            </MenuItem>
            <MenuItem sx={{gap: 0.5}} onClick={() => handleClickItem('/dashboard/user')}>
            <SvgColor src={`/assets/icons/navbar/ic_user.svg`} sx={{ width: 15, height: 15 }}  />
            Profile
            </MenuItem>
            <MenuItem sx={{gap: 0.5}} onClick={() => handleClickItem('/dashboard/user/settings')}>
            <SvgColor src={`/assets/icons/navbar/ic_settings.svg`} sx={{ width: 15, height: 15 }}  />
            Sittings
            </MenuItem>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem
          onClick={handleLogout}
          sx={{ m: 1, fontWeight: 'fontWeightBold', color: 'error.main', gap: 0.5 }}
        >
          <SvgColor src={`/assets/icons/navbar/ic_lock.svg`} sx={{ width: 19, height: 19 }}  />
          Logout
        </MenuItem>
      </CustomPopover>
    </>
  );
}
