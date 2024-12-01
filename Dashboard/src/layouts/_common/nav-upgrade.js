
import NavSectionVertical from 'src/components/nav-section/vertical/nav-section-vertical';
import { useNavSettings } from '../dashboard/config-navigation';

// ----------------------------------------------------------------------

export default function NavUpgrade() {
  // const { user } = useMockedUser();
  const navData = useNavSettings();

  return (
    <NavSectionVertical
      data={navData}
      config={{
        currentRole: 'admin',
      }}
    />
  );
}
