import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import DeleteDialogSlide from 'src/components/DeleteDialog';
import { useSubcategories } from 'src/hooks/useSubcategories';
import {
  ParentListItem,
  CloseSign,
  OpenSign,
  CustomSpan,
} from './component.style';
import SubLIstItem from './SubLIstItem';
import { DrawerHeader } from '../component.styled';
import UpdateCategory from '../UpdateCategory';

const theme = createTheme({
  palette: {
    info: {
      main: '#F6CD06',
    },
  },
});

const ListItem = ({
  categoryItem,
  id,
  setCategory,
  setFetchSubCategory,
  fetchSubCategory,
  fetchCategories,
}) => {
  const [openList, setOpenList] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategory, setSubCategory] = useState();
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
  const [openUpdateCategory, setOpenUpdateCategory] = useState(false);
  const fetchSubcategories = useSubcategories(selectedCategory);

  const reFetch = async () => {
    const data = await fetchSubcategories(selectedCategory);
    setSubCategory(data);
    setFetchSubCategory(false);
  };

  useEffect(() => {
    reFetch(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchSubCategory, selectedCategory]);

  const handleClick = (e) => {
    e.stopPropagation();
    setSelectedCategory(e.currentTarget.id);
    setOpenList(!openList);
  };

  const handleEditBtn = (e) => {
    e.stopPropagation();
    setOpenUpdateCategory(true);
  };

  const handleDeleteBtn = (e) => {
    e.stopPropagation();
    setSelectedCategory(e.currentTarget.parentElement.id);
    setOpenDeleteConfirmation(true);
  };

  return (
    <>
      {/* <DrawerHeader /> */}
      <ParentListItem aria-labelledby="nested-list-subheader" >
        <ListItemButton
          onClick={handleClick}
          sx={{
            height: '54px',
          }}
          id={`${id}`}
        >
          <ListItemIcon sx={{ pl: 2 }}>
            {openList ? <CloseSign /> : <OpenSign>+</OpenSign>}
          </ListItemIcon>
          <ListItemText>
            <p>
              {categoryItem?.title_ar}
              <CustomSpan>
                {`${
                  subCategory?.length
                    ? `صنف فرعي - ${subCategory?.length}`
                    : 'صنف فرعي'
                }`}
              </CustomSpan>
            </p>
          </ListItemText>
          <ModeEditOutlineOutlinedIcon
            onClick={handleEditBtn}
            sx={{ marginRight: '20px' }}
          />
          <DeleteOutlinedIcon onClick={handleDeleteBtn} />
        </ListItemButton>

        <Collapse in={openList} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subCategory?.length ? (
              subCategory?.map(ele => (
                  <SubLIstItem
                    key={ele.id}
                    ele={ele}
                    id={`${ele.id}`}
                    setSubCategory={setSubCategory}
                    selectedCategory={selectedCategory}
                    fetchCategories={fetchCategories}
                    reFetchSub={reFetch}
                  />
                ))
            ) : (
              <Stack>
                <ThemeProvider theme={theme}>
                  <Alert
                    sx={{ pl: 3.8, backgroundColor: 'inherit', color: '#000' }}
                    severity="info"
                  >
                    ! لا توجد صفات فرعية  
                  </Alert>
                </ThemeProvider>
              </Stack>
            )}
          </List>
        </Collapse>
      </ParentListItem>
      <DeleteDialogSlide
        setOpen={setOpenDeleteConfirmation}
        open={openDeleteConfirmation}
        selectItemToDelete={selectedCategory}
        setSubCategory={setCategory}
        selectedCategory={selectedCategory}
        isSubcategory={false}
      />
      <UpdateCategory
        open={openUpdateCategory}
        setOpenUpdateCategory={setOpenUpdateCategory}
        categoryId={`${id}`}
        fetchCategories={fetchCategories}
        reFetchSub={reFetch}
      />
    </>
  );
};

ListItem.propTypes = {
  categoryItem: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  setCategory: PropTypes.func.isRequired,
  setFetchSubCategory: PropTypes.func.isRequired,
  fetchSubCategory: PropTypes.bool.isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

export default ListItem;
