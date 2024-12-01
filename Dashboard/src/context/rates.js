/* eslint-disable no-console */
import { createContext, useEffect, useMemo, useState } from 'react';
import { axiosReq } from 'src/utils/axiosReq';
import PropTypes from 'prop-types';

const RatesContext = createContext();
const ProvideRates = ({ children }) => {
  const [callBack, setCallBack] = useState(null);
  const [valid, setValid] = useState(true)

  const RatesValues = useMemo(
    () => ({
      callBack,
      setCallBack,
      setValid,
      valid
    }),
    [callBack, setCallBack, setValid, valid],
  );
  return (
    <RatesContext.Provider value={RatesValues}>
      {children}
    </RatesContext.Provider>
  );
};

ProvideRates.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ProvideRates, RatesContext };
