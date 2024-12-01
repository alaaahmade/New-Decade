import { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PropTypes from 'prop-types';
import DeleteDialogSlide from 'src/components/DeleteDialog';
import UpdateCategory from '../UpdateCategory';
import { SubLIstItemWrapper, EditIcon } from './component.style';


const SubLIstItem = ({
  id,
  setSubCategory,
  selectedCategory,
  ele,
  reFetchSub,
  fetchCategories,
}) => {
  const [open, setOpen] = useState(false);
  const [selectItemToDelete, setSelectItemToDelete] = useState('');
  const [openUpdateCategory, setOpenUpdateCategory] = useState(false);

  const handleDeleteBtn = (e) => {
    e.stopPropagation();
    setOpen(true);
    console.log(e.currentTarget.parentElement.parentElement.id);
    setSelectItemToDelete(e.currentTarget.parentElement.parentElement.id);
  };
  const handleEditBtn = (e) => {
    e.stopPropagation();
    setOpenUpdateCategory(true);
  };


  return (
    <>
      <SubLIstItemWrapper id={`${id}`}>
        <ListItemButton sx={{ pl: 4.5 }}>
          <ListItemIcon>
            <img src="/timeline.svg" alt="logo" />
          </ListItemIcon>
          <p style={{ marginLeft: '0' }}>{ele.title_ar}</p>
          <ListItemText />
          <EditIcon onClick={handleEditBtn} />
          <DeleteOutlinedIcon onClick={handleDeleteBtn} />
        </ListItemButton>
      </SubLIstItemWrapper>
      <DeleteDialogSlide
        setOpen={setOpen}
        open={open}
        selectItemToDelete={selectItemToDelete}
        setSubCategory={setSubCategory}
        selectedCategory={selectedCategory}
        isSubcategory
      />
      <UpdateCategory
        open={openUpdateCategory}
        setOpenUpdateCategory={setOpenUpdateCategory}
        categoryId={id}
        fetchCategories={fetchCategories}
        reFetchSub={reFetchSub}
      />
    </>
  );
};

SubLIstItem.propTypes = {
  id: PropTypes.string.isRequired,
  setSubCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  ele: PropTypes.object.isRequired,
  reFetchSub: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

export default SubLIstItem;
