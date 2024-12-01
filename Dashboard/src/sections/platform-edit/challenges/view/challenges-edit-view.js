// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// api
import { useGetChallenges } from 'src/api/blog';
// components 
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import ChallengesNewEditForm from '../challenges-new-edit-form';

// ----------------------------------------------------------------------

export default function ChallengesEditView() {
  const settings = useSettingsContext();

  const { challenges: currentChallenges } = useGetChallenges();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Challenges Section"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'challenges',
            href: paths.dashboard.service.root,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      {currentChallenges && <ChallengesNewEditForm currentChallenges={currentChallenges} />}
    </Container>
  );
}
