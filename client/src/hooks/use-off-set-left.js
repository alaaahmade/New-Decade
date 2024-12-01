import { useScroll } from 'framer-motion';
import { useState, useEffect, useMemo, useCallback } from 'react';

// ----------------------------------------------------------------------

export function useOffSetLeft(top = 0, options) {
  const { scrollX } = useScroll(options);

  const [value, setValue] = useState(0);

  const onOffSetLeft = useCallback(() => {
    scrollX.on('change', scrollHeight => {
      setValue(scrollHeight);
    });
  }, [scrollX, top]);

  useEffect(() => {
    onOffSetLeft();
  }, [onOffSetLeft]);

  const memoizedValue = useMemo(() => value, [value]);

  return memoizedValue;
}
