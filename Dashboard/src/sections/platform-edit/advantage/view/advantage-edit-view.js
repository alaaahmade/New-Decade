// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// api
import { useGetAdvantage } from 'src/api/blog';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import AdvantageNewEditForm from '../advantage-new-edit-form';

// ----------------------------------------------------------------------

export default function AdvantageEditView() {
  const settings = useSettingsContext();

  const { advantage: currentAdvantage } = useGetAdvantage();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Advantage Section"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'advantage',
            href: paths.dashboard.service.root,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      {currentAdvantage && <AdvantageNewEditForm currentAdvantage={currentAdvantage} />}
    </Container>
  );
}
