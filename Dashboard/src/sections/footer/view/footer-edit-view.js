import PropTypes from 'prop-types';
// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// api
import { useGetFooter, useGetHeader } from 'src/api/blog';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import ServiceNewEditForm from '../footer-new-edit-form';

// ----------------------------------------------------------------------

export default function FooterEditView() {
  const settings = useSettingsContext();

  const { footer: currentFooter } = useGetFooter();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Footer Section"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Footer',
            href: paths.dashboard.edit.header,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      {currentFooter &&  (
      <ServiceNewEditForm currentFooter={currentFooter} />
      )}
    </Container>
  );
}
