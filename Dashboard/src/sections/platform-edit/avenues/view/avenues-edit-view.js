// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// api
import { useGetAvenues } from 'src/api/blog';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import AvenuesNewEditForm from '../avenues-new-edit-form';

// ----------------------------------------------------------------------

export default function AvenuesEditView() {
  const settings = useSettingsContext();

  const { avenues: currentAvenues } = useGetAvenues();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Avenues Section"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'avenues',
            href: paths.dashboard.service.root,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      {currentAvenues && <AvenuesNewEditForm currentAvenues={currentAvenues} />}
    </Container>
  );
}
