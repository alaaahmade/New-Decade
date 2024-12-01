import { Helmet } from 'react-helmet-async';
// routes
import { useParams } from 'src/routes/hooks';
// sections
import { HeaderEditView } from 'src/sections/header/view';

// ----------------------------------------------------------------------

export default function HeaderEditPage() {
  const params = useParams();

  return (
    <>
      <Helmet>
        <title> Dashboard: Header Edit</title>
      </Helmet>

      <HeaderEditView />
    </>
  );
}
