import { Helmet } from 'react-helmet-async';
import LogisticsSolutionsEditView from 'src/sections/home-edit/logisticsSolution/view/logistics-solution-edit-view';

// ----------------------------------------------------------------------

export default function LogisticsSolutionsEditPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: Customer Words Edit</title>
      </Helmet>

      <LogisticsSolutionsEditView/>
    </>
  );
}
