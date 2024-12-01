import PropTypes from 'prop-types';
// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// api
import { useGetHeader } from 'src/api/blog';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import ServiceNewEditForm from '../service-new-edit-form';

// ----------------------------------------------------------------------

export default function HeaderEditView() {
  const settings = useSettingsContext();

  const { header: currentHeader } = useGetHeader();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Header Section"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'header',
            href: paths.dashboard.edit.header,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      {currentHeader &&  (
      <ServiceNewEditForm currentHeader={currentHeader} />
      )}
    </Container>
  );
}

HeaderEditView.propTypes = {
  id: PropTypes.string,
};
