import { createContext, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

export const FiltersContext = createContext({})

export const defaultFilters = {
  Time: '',
  startDate: '',
  endDate: '',
  SortBy: '',
  email: '',
};
export const FiltersContextProvider = ({children}) => {
  const [filters, setFilters] = useState(defaultFilters);

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const handleResetDateRange = useCallback(() => {
    setFilters((prevState) => ({
      ...prevState,
      startDate: '',
      endDate: '',
      Time: '',
    }));
  }, []); 

  const handleCloseSortBy = useCallback(() => {
    setFilters((prevState) => ({
      ...prevState,
      SortBy: '',
    }));
  }, [])

  const values = useMemo(() => ({
    filters,
    setFilters,
    handleResetFilters,
    handleResetDateRange,
    // handleCloseRevenueDialog,
    handleCloseSortBy
  }), [filters,
    handleResetFilters,
    handleResetDateRange,
    // handleCloseRevenueDialog,
    handleCloseSortBy,
  ]);

  return (
    <FiltersContext.Provider value={values}>
      {children}
    </FiltersContext.Provider>
  )

}

FiltersContextProvider.propTypes = {
  children: PropTypes.node,
};
