/* eslint-disable no-console */
import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const appContext = createContext();
const ProvideApps = ({ children }) => {
  const [callBack, setCallBack] = useState(null);
  const [valid, setValid] = useState(true)

  const AppsValues = useMemo(
    () => ({
      callBack,
      setCallBack,
      setValid,
      valid
    }),
    [callBack, setCallBack, setValid, valid],
  );
  return (
    <appContext.Provider value={AppsValues}>
      {children}
    </appContext.Provider>
  );
};

ProvideApps.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ProvideApps, appContext };
