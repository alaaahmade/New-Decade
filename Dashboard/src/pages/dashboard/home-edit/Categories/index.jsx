import { useContext, useState } from 'react';
import {Box} from '@mui/material';
import { DashboardContext } from 'src/context/DashboardContext';
import CategoriesList from './CategoriesList';
import { AddCategory } from './AddCategories';

export const Categories = () => {
  const { openSideBar } = useContext(DashboardContext);
  const [categories, setCategories] = useState([]);
  const [fetchSubCategory, setFetchSubCategory] = useState(false);
  return (

      <Box
        sx={{
          color: '#000',
          // height: '100vh',
          display: 'flex',
          overflow: 'hidden',
          width: '100%',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          overflowX: 'hidden',

        }}
      >
        <CategoriesList
          category={categories}
          setCategory={setCategories}
          open={openSideBar}
          fetchSubCategory={fetchSubCategory}
          setFetchSubCategory={setFetchSubCategory}
        />
        <AddCategory
          setFetchSubCategory={setFetchSubCategory}
          categories={categories}
          setCategories={setCategories}
        />
      </Box>
  );
};
