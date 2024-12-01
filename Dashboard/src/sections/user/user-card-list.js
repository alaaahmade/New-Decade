import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
//
import UserCard from './user-card';

// ----------------------------------------------------------------------

export default function UserCardList({ users }) {
  return (
    <Box
      // gap={3}
      // display="grid"
      // gridTemplateColumns={{
      //   xs: 'repeat(1, 1fr)',
      //   sm: 'repeat(2, 1fr)',
      //   md: 'repeat(3, 1fr)',
      // }}
      sx={{
        // width: '100%',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center'
      }}
    >
        <UserCard user={users[0]} />
    </Box>
  );
}

UserCardList.propTypes = {
  users: PropTypes.array,
};
