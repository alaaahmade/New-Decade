/* eslint-disable no-console */
import { createContext, useEffect, useMemo, useState } from 'react';
import { axiosReq } from 'src/utils/axiosReq';
import PropTypes from 'prop-types';

const TrustedContext = createContext();
const ProvideTrusted = ({ children }) => {
  const [callBack, setCallBack] = useState(null);
  const [valid, setValid] = useState(true)
  const [trusteds, setTrusteds] = useState({})

  const TrustedValues = useMemo(
    () => ({
      callBack,
      setCallBack,
      setValid,
      valid,
      trusteds,
      setTrusteds,
    }),
    [callBack,
    setCallBack,
    setValid,
    valid,
    trusteds,
    setTrusteds,
  ],
  );
  return (
    <TrustedContext.Provider value={TrustedValues}>
      {children}
    </TrustedContext.Provider>
  );
};

ProvideTrusted.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ProvideTrusted, TrustedContext };
