import { Helmet } from 'react-helmet-async';
// sections
import {SettingsEditView} from 'src/sections/settings/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Settings</title>
      </Helmet>

      <SettingsEditView />
    </>
  );
}
