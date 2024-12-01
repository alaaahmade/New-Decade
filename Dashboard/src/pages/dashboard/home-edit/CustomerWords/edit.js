import { Helmet } from 'react-helmet-async';
import { CustomerWordsEditView } from 'src/sections/home-edit/customerWords/view';

// ----------------------------------------------------------------------

export default function CustomerWordsEditPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: Customer Words Edit</title>
      </Helmet>

      <CustomerWordsEditView/>
    </>
  );
}
