import { Helmet } from 'react-helmet-async';
import { PlatformView } from '../sections/Platform/view';
// sections

// ----------------------------------------------------------------------

  export default function PlatformPage() {
  return (
    <>
      <Helmet>
        <title> New Decade: Platform</title>
      </Helmet>

      <PlatformView />
    </>
  );
}
