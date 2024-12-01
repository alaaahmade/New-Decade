// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// api
import { useGetModular } from 'src/api/blog';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import ModularEditViewNewEditForm from '../module-new-edit-form';

// ----------------------------------------------------------------------

export default function ModularEditView() {
  const settings = useSettingsContext();

  const { modular: currentModular } = useGetModular();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Modular Section"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'modular',
            href: paths.dashboard.edit.modular,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      {currentModular && <ModularEditViewNewEditForm currentModular={currentModular} />}
    </Container>
  );
}
