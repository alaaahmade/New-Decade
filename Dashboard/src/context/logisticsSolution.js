/* eslint-disable no-console */
import { createContext, useEffect, useMemo, useState } from 'react';
import { axiosReq } from 'src/utils/axiosReq';
import PropTypes from 'prop-types';

const LogisticsSolutionContext = createContext();
const ProvideLogisticsSolution = ({ children }) => {
  const [callBack, setCallBack] = useState(null);
  const [valid, setValid] = useState(true)

  const LogisticsSolutionValues = useMemo(
    () => ({
      callBack,
      setCallBack,
      setValid,
      valid
    }),
    [callBack, setCallBack, setValid, valid],
  );
  return (
    <LogisticsSolutionContext.Provider value={LogisticsSolutionValues}>
      {children}
    </LogisticsSolutionContext.Provider>
  );
};

ProvideLogisticsSolution.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ProvideLogisticsSolution, LogisticsSolutionContext };
