/* eslint-disable no-console */
import { createContext, useEffect, useMemo, useState } from 'react';
import { axiosReq } from 'src/utils/axiosReq';
import PropTypes from 'prop-types';

const AvenueContext = createContext();
const ProvideAvenue = ({ children }) => {
  const [callBack, setCallBack] = useState(null);
  const [valid, setValid] = useState(true)

  const AvenueValues = useMemo(
    () => ({
      callBack,
      setCallBack,
      setValid,
      valid
    }),
    [callBack, setCallBack, setValid, valid],
  );
  return (
    <AvenueContext.Provider value={AvenueValues}>
      {children}
    </AvenueContext.Provider>
  );
};

ProvideAvenue.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ProvideAvenue, AvenueContext };
