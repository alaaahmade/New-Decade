// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// api
import { useGetThree } from 'src/api/blog';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import ThreeEditViewNewEditForm from '../three-new-edit-form';

// ----------------------------------------------------------------------

export default function ThreeEditView() {
  const settings = useSettingsContext();

  const { three: currentThree } = useGetThree();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Three Section"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'section three',
            href: paths.dashboard.edit.three,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      {currentThree && <ThreeEditViewNewEditForm currentThree={currentThree} />}
    </Container>
  );
}
