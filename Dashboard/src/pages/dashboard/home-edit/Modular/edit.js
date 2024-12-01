import { Helmet } from 'react-helmet-async';
import { ModularEditView } from 'src/sections/home-edit/modular/view';
// sections

// ----------------------------------------------------------------------

export default function ModularEditPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: Modular Edit</title>
      </Helmet>
      <ModularEditView/>
    </>
  );
}
