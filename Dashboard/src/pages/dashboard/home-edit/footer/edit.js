import { Helmet } from 'react-helmet-async';
import { FooterEditView } from 'src/sections/footer/view';
// sections

// ----------------------------------------------------------------------

export default function FooterEditPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: Footer Edit</title>
      </Helmet>

      <FooterEditView/>
    </>
  );
}
