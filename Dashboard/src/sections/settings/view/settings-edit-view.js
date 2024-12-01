// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// api
import { useGetAbout } from 'src/api/blog';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import SettingsNewEditForm from '../settings-new-edit-form';
import { useContext } from 'react';
import { AuthGardContext } from 'src/context/AuthContext';

// ----------------------------------------------------------------------

export default function SettingsEditView() {
  const settings = useSettingsContext();
  const {user: currentSettings} = useContext(AuthGardContext)

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Account Sittings"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'sittings',
            href: paths.dashboard.group.six,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      {currentSettings && <SettingsNewEditForm currentSettings={currentSettings} />}
    </Container>
  );
}
