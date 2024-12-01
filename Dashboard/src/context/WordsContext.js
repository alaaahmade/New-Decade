/* eslint-disable no-console */
import { createContext, useEffect, useMemo, useState } from 'react';
import { axiosReq } from 'src/utils/axiosReq';
import PropTypes from 'prop-types';

const WordsContext = createContext();
const ProvideWords = ({ children }) => {
  const [callBack, setCallBack] = useState(null);
  const [valid, setValid] = useState(true)

  const WordsValues = useMemo(
    () => ({
      callBack,
      setCallBack,
      setValid,
      valid
    }),
    [callBack, setCallBack, setValid, valid],
  );
  return (
    <WordsContext.Provider value={WordsValues}>
      {children}
    </WordsContext.Provider>
  );
};

ProvideWords.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ProvideWords, WordsContext };
