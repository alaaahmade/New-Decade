// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// api
import { useGetLogisticsSolutions } from 'src/api/blog';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import LogisticsSolutionsNewEditForm from '../logistics-solution-new-edit-form';
//


// ----------------------------------------------------------------------

export default function LogisticsSolutionsEditView() {
  const settings = useSettingsContext();

  const { logisticsSolution: currentLogisticsSolution } = useGetLogisticsSolutions();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Logistics Solutions Section"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'logistics solutions',
            href: paths.dashboard.service.root,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      {currentLogisticsSolution && <LogisticsSolutionsNewEditForm logisticsSolution={currentLogisticsSolution} />}
    </Container>
  );
}
