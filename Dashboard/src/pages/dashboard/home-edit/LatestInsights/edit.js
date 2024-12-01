import { Helmet } from 'react-helmet-async';
import { LatestInsightsEditView } from 'src/sections/home-edit/latestInsights/view';
// sections

// ----------------------------------------------------------------------

export default function LatestInsightsEditPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: Latest Insights Edit</title>
      </Helmet>

      <LatestInsightsEditView/>
    </>
  );
}
