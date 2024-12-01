// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// api
import { useGetInsights } from 'src/api/blog';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import InsightsNewEditForm from '../latest-insights-new-edit-form';

// ----------------------------------------------------------------------

export default function LatestInsightsEditView() {
  const settings = useSettingsContext();

  const { latestInsights: currentLatestInsights} = useGetInsights();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Latest Insights Section"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Latest Insights',
            href: paths.dashboard.service.root,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      {currentLatestInsights && <InsightsNewEditForm currentLatestInsights={currentLatestInsights} />}
    </Container>
  );
}
