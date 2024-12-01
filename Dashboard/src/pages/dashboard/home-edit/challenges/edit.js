import { Helmet } from 'react-helmet-async';
// sections
import ChallengesEditView from 'src/sections/home-edit/challenges/view/challenges-edit-view';

// ----------------------------------------------------------------------

export default function ChallengesEditPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: Challenges Edit</title>
      </Helmet>

      <ChallengesEditView/>
    </>
  );
}
