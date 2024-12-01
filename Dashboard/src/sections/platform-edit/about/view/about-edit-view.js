// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// api
import { useGetPlatformAbout } from 'src/api/blog';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import AboutNewEditForm from '../about-new-edit-form';

// ----------------------------------------------------------------------

export default function AboutEditView() {
  const settings = useSettingsContext();

  const { about: currentAbout } = useGetPlatformAbout();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit About Section"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Platform About',
            href: paths.dashboard.service.root,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      {currentAbout && <AboutNewEditForm currentAbout={currentAbout} />}
    </Container>
  );
}
