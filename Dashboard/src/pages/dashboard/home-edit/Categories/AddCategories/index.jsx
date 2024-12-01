import React, {
  useEffect,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from 'react';
import { CreateNewFolderOutlined } from '@mui/icons-material';
import { Checkbox, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import useCategories from 'src/hooks/useCategories';
import { axiosReq } from 'src/utils/axiosReq';
import { DashboardContext } from '../../../../../context/DashboardContext';
import {
  AddCategoryButton,
  CategoryDescriptionInput,
  CategoryNameWrapper,
  CategoryDetailsWrapper,
  CustomTextField,
  CategoryMain,
  CategoryWrapper,
  CustomTypography,
  FolderIcon,
  CustomCoverButton,
  DrawerHeader,
} from '../component.styled';
import { SelectCategories } from './SelectCategory';
import { Loader } from 'src/components/loader';
import { categorySchema } from 'src/validation/categorySchema';

export const AddCategory = ({
  categories,
  setCategories,
  setFetchSubCategory,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [hover, setHover] = useState(false);
  const [data, setData] = useState({
    title_ar: '',
    description_ar: '',
    title_en: '',
    description_en: '',
    title_fr: '',
    description_fr: '',
    parentId: '',
  });
  const [loading, setLoading] = useState(false);


  const handleOnChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
    console.log(data);
  };

  const fetchCategories = useCategories();

  const handleIsChecked = () => {
    setIsChecked(!isChecked);
  };

  const AddCategoryCB = async () => {

    if (isChecked && (!data.parentId)) {
      toast.error('يجب عليك اختيار الصنف الاساسي');
    } else {
      setLoading(true);
      try {
        const validData = await categorySchema.validateSync(data)
        const res = await axiosReq.post('/categories', validData);
        if (res.status === 201) {
          toast.success(`added category successfully`);
          setCategories(await fetchCategories());
          setFetchSubCategory(false);
          if (data.category) {
            setFetchSubCategory(true);
          }
          setLoading(false);

          setData({
            title_ar: '',
            description_ar: '',
            title_en: '',
            description_en: '',
            title_fr: '',
            description_fr: '',
            parentId: '',
          })
          setIsChecked(false)
        }
      } catch (err) {
        setLoading(false);
        if(err.response){
          toast.error(`${err?.response?.data?.msg}`);
        }
        else {
          console.log(err);
          toast.error(`${err?.message}`);
        }
      }
    }
  };

  useEffect(() => {
    (async () => {
      setCategories(await fetchCategories());
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        width: '38%',
        height: '100%',
        overflow: 'auto',
      }}
    >
      {loading && <Loader />}
      {/* <DrawerHeader /> */}
      <CategoryWrapper>
        <CustomTypography paragraph>
          <FolderIcon />
          إضافة صنف
        </CustomTypography>

        <CategoryNameWrapper>
          <CustomTextField
            id="standard-basic"
            label="إسم الصنف"
            variant="standard"
            name="title_ar"
            onChange={handleOnChange}
            value={data.title_ar}
            sx={{
              input: { color: '#000', pl: '20px' },
              label: { color: '#b1a9a9', marginLeft: '1rem' },
            }}
          />
          <CustomTextField
            id="standard-basic"
            label="إسم الصنف بالانجليزية"
            variant="standard"
            name="title_en"
            onChange={handleOnChange}
            value={data.title_en}
            sx={{
              input: { color: '#000', pl: '20px' },
              label: { color: '#b1a9a9', marginLeft: '1rem' },
            }}
          />
          <CustomTextField
            id="standard-basic"
            label="إسم الصنف بالفرنسية"
            variant="standard"
            name="title_fr"
            onChange={handleOnChange}
            value={data.title_fr}
            sx={{
              input: { color: '#000', pl: '20px' },
              label: { color: '#b1a9a9', marginLeft: '1rem' },
            }}
          />
        </CategoryNameWrapper>
        <CategoryDetailsWrapper>
          <CategoryDescriptionInput
            key="Category Description_ar"
            name="description_ar"
            onChange={handleOnChange}
            id="outlined-multiline-static"
            value={data.description_ar}
            label="وصف الصنف"
            multiline
            rows={3}
            sx={{
              input: { color: '#000' },
              label: { color: '#b1a9a9', marginLeft: '1rem' },
            }}
          />

          <CategoryDescriptionInput
            key="Category Description_en"
            name="description_en"
            onChange={handleOnChange}
            id="outlined-multiline-static"
            value={data.description_en}
            label="وصف الصنف بالانجليزية"
            multiline
            rows={3}
            sx={{
              input: { color: '#000' },
              label: { color: '#b1a9a9', marginLeft: '1rem' },
            }}
          />
          <CategoryDescriptionInput
            key="Category Description_fr"
            name="description_fr"
            onChange={handleOnChange}
            id="outlined-multiline-static"
            value={data.description_fr}
            label="وصف الصنف بالفرنسية"
            multiline
            rows={3}
            sx={{
              input: { color: '#000' },
              label: { color: '#b1a9a9', marginLeft: '1rem' },
            }}
          />
          <div>
            <Checkbox
              onChange={handleIsChecked}
              value={isChecked}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              checked={isChecked}
            />
            صنف فرعي
          </div>
          {isChecked && (
            <SelectCategories
              category={data.parentId}
              categories={categories}
              handleCategory={handleOnChange}
            />
          )}
          <AddCategoryButton onClick={AddCategoryCB}>
            <CreateNewFolderOutlined />
          </AddCategoryButton>
        </CategoryDetailsWrapper>
      </CategoryWrapper>
    </Box>
  );
};
AddCategory.propTypes = {
  categories: PropTypes.array,
  setCategories: PropTypes.func,
  setFetchSubCategory: PropTypes.func,
};
