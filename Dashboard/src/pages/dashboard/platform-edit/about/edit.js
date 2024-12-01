import { Helmet } from 'react-helmet-async';
import { AboutEditView } from 'src/sections/platform-edit/about/view';
// sections

// ----------------------------------------------------------------------

export default function AboutEditPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: Platform Edit</title>
      </Helmet>

      <AboutEditView/>
    </>
  );
}
