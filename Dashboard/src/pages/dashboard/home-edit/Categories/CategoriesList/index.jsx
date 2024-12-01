import {  useEffect } from 'react';
import PropTypes from 'prop-types';
import {useCategories} from 'src/hooks/useCategories';
import ListItem from './ListItem';
import { CategoriesListWrapper } from './component.style';

const CategoriesList = ({
  category,
  open,
  setCategory,
  setFetchSubCategory,
  fetchSubCategory,
}) => {
  const fetchCategories = useCategories();

  const reFetchCategories = async () => {
    setCategory(await fetchCategories());
  };

  useEffect(() => {
    reFetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchSubCategory]);

  return (
    <CategoriesListWrapper >
      {category?.map((categoryItem) => (
          <ListItem
            id={categoryItem.id}
            key={categoryItem.id}
            coverCloudId={categoryItem.coverCloudId}
            categoryItem={categoryItem}
            setCategory={setCategory}
            setFetchSubCategory={setFetchSubCategory}
            fetchSubCategory={fetchSubCategory}
            fetchCategories={reFetchCategories}
          />
        ))}
    </CategoriesListWrapper>
  );
};
CategoriesList.propTypes = {
  category: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  setCategory: PropTypes.func.isRequired,
  setFetchSubCategory: PropTypes.func.isRequired,
  fetchSubCategory: PropTypes.bool.isRequired,
};

export default CategoriesList;
