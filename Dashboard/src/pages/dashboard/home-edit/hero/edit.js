import { Helmet } from 'react-helmet-async';
// sections
import { HeroEditView } from 'src/sections/home-edit/hero/view';

// ----------------------------------------------------------------------

export default function HeroEditPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: Hero Edit</title>
      </Helmet>

      <HeroEditView/>
    </>
  );
}
