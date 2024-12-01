// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// api
import { useGetTrusted } from 'src/api/blog';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import TrustedNewEditForm from '../trusted-new-edit-form';

// ----------------------------------------------------------------------

export default function TrustedEditView() {
  const settings = useSettingsContext();

  const { trusted: currentTrusted } = useGetTrusted();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Trusted Section"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'trusted',
            href: paths.dashboard.service.root,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      {currentTrusted && <TrustedNewEditForm currentTrusted={currentTrusted} />}
    </Container>
  );
}
