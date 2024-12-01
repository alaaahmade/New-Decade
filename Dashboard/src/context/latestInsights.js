/* eslint-disable no-console */
import { createContext, useEffect, useMemo, useState } from 'react';
import { axiosReq } from 'src/utils/axiosReq';
import PropTypes from 'prop-types';

const LatestInsightsContext = createContext();
const ProvideLatestInsights = ({ children }) => {
  const [callBack, setCallBack] = useState(null);
  const [valid, setValid] = useState(true)

  const LatestInsightsValues = useMemo(
    () => ({
      callBack,
      setCallBack,
      setValid,
      valid
    }),
    [callBack, setCallBack, setValid, valid],
  );
  return (
    <LatestInsightsContext.Provider value={LatestInsightsValues}>
      {children}
    </LatestInsightsContext.Provider>
  );
};

ProvideLatestInsights.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ProvideLatestInsights, LatestInsightsContext };
