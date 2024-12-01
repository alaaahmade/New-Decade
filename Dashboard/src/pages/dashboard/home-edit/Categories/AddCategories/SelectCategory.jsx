import { MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import { SelectCats, arrowIcon } from '../component.styled';

export const SelectCategories = ({ categories, handleCategory, category }) => (
    <SelectCats
      IconComponent={arrowIcon}
      name="parentId"
      MenuProps={{
        PaperProps: {
          style: { width: '250px', overflowY: 'scroll' },
        },
      }}
      value={category}
      onChange={handleCategory}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      style={{ width: '100%' }}
    >
      <MenuItem value="">
        <em>صنف</em>
      </MenuItem>
      {categories.map((ele) => (
          <MenuItem key={ele.id} value={`${ele.id}`}>
            {ele.title_ar}
          </MenuItem>
        ))}
    </SelectCats>
  );

SelectCategories.propTypes = {
  categories: PropTypes.array.isRequired,
  handleCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
}
