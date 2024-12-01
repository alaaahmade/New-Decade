// @mui
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// _mock
// import { _userCards } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import UserCardList from '../user-card-list';
import { _userCards } from 'src/_mock/_user';
import UserCard from '../user-card';
import { useContext } from 'react';
import { AuthGardContext } from 'src/context/AuthContext';

// ----------------------------------------------------------------------

export default function UserCardsView() {
  const settings = useSettingsContext();
  const {user} = useContext(AuthGardContext)
  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="User Card"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          // { name: 'User', href: paths.dashboard.user.root },
          { name: 'Cards' },
        ]}
        // action={
        //   <Button
        //     component={RouterLink}
        //     // href={paths.dashboard.user.new}
        //     variant="contained"
        //     startIcon={<Iconify icon="mingcute:add-line" />}
        //   >
        //     New User
        //   </Button>
        // }
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      {/* <UserCardList users={_userCards} /> */}
      <UserCard user={user} />

    </Container>
  );
}
