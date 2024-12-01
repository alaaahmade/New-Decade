/* eslint-disable no-console */
import { createContext, useEffect, useMemo, useState } from 'react';
import { axiosReq } from 'src/utils/axiosReq';
import PropTypes from 'prop-types';

const PropsContext = createContext();
const ProvideProps = ({ children }) => {
  const [callBack, setCallBack] = useState(null);
  const [valid, setValid] = useState(true)

  const PropsValues = useMemo(
    () => ({
      callBack,
      setCallBack,
      setValid,
      valid
    }),
    [callBack, setCallBack, setValid, valid],
  );
  return (
    <PropsContext.Provider value={PropsValues}>
      {children}
    </PropsContext.Provider>
  );
};

ProvideProps.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ProvideProps, PropsContext };
