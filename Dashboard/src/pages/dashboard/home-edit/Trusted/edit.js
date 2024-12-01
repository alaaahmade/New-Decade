import { Helmet } from 'react-helmet-async';
import { TrustedEditView } from 'src/sections/home-edit/trusted/view';
// sections

// ----------------------------------------------------------------------

export default function TrustedEditPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: Trusteds Edit</title>
      </Helmet>

      <TrustedEditView/>
    </>
  );
}
