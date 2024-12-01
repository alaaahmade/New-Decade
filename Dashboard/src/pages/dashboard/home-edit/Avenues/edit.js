import { Helmet } from 'react-helmet-async';
import { AvenuesEditView } from 'src/sections/home-edit/avenues/view';
// sections

// ----------------------------------------------------------------------

export default function AvenuesEditPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: Avenues Edit</title>
      </Helmet>

      <AvenuesEditView/>
    </>
  );
}
