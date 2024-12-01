import { Helmet } from 'react-helmet-async';
import { AboutEditView } from 'src/sections/home-edit/about/view';
// sections

// ----------------------------------------------------------------------

export default function AboutEditPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: About Edit</title>
      </Helmet>

      <AboutEditView/>
    </>
  );
}
