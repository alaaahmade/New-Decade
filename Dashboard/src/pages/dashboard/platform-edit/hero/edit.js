import { Helmet } from 'react-helmet-async';
// sections
import { HeroEditView } from 'src/sections/platform-edit/hero/view';

// ----------------------------------------------------------------------

export default function HeroEditPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: Platform Edit</title>
      </Helmet>

      <HeroEditView/>
    </>
  );
}
