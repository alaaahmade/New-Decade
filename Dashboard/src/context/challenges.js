/* eslint-disable no-console */
import { createContext, useEffect, useMemo, useState } from 'react';
import { axiosReq } from 'src/utils/axiosReq';
import PropTypes from 'prop-types';

const ChallengesContext = createContext();
const ProvideChallenges = ({ children }) => {
  const [callBack, setCallBack] = useState(null);
  const [valid, setValid] = useState(true)

  const ChallengesValues = useMemo(
    () => ({
      callBack,
      setCallBack,
      setValid,
      valid
    }),
    [callBack, setCallBack, setValid, valid],
  );
  return (
    <ChallengesContext.Provider value={ChallengesValues}>
      {children}
    </ChallengesContext.Provider>
  );
};

ProvideChallenges.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ProvideChallenges, ChallengesContext };
