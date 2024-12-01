// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// api
import { useGetPlatformHero } from 'src/api/blog';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import HeroNewEditForm from '../hero-new-edit-form';

// ----------------------------------------------------------------------

export default function HeroEditView() {
  const settings = useSettingsContext();

  const { hero: currentHero } = useGetPlatformHero();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Hero Section"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'platform hero',
            href: paths.dashboard.service.root,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      {currentHero && <HeroNewEditForm currentHero={currentHero} />}
    </Container>
  );
}
