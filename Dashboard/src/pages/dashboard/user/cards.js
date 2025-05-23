import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
// sections
import { UserCardsView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function UserCardsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: User Cards</title>
      </Helmet>
      {/* <Typography>SSSSS</Typography> */}
      <UserCardsView />
    </>
  );
}
