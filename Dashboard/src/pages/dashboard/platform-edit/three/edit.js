import { Helmet } from 'react-helmet-async';
// sections
import { ThreeEditView } from 'src/sections/platform-edit/sectionThree/view';

// ----------------------------------------------------------------------

export default function ThreeEditPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: Platform Edit</title>
      </Helmet>

      <ThreeEditView/>
    </>
  );
}
