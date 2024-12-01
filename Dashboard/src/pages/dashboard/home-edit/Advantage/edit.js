import { Helmet } from 'react-helmet-async';
import { AdvantageEditView } from 'src/sections/home-edit/advantage/view';
// sections

// ----------------------------------------------------------------------

export default function AdvantageEditPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: Advantage Edit</title>
      </Helmet>

      <AdvantageEditView/>
    </>
  );
}
