import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { UpdateOutlined } from '@mui/icons-material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { axiosReq } from 'src/utils/axiosReq';
import { useCategory } from 'src/hooks/useCategory';
import {
  CategoryDescriptionInput,
  CustomTextField,
  CustomCoverButton,
} from '../component.styled';
import { Loader } from 'src/components/loader';
import { categorySchema } from 'src/validation/categorySchema';


const UpdateCategory = ({
  open,
  setOpenUpdateCategory,
  categoryId,
  reFetchSub,
  fetchCategories,
}) => {
  const [loader, setLoader] = useState(true);
  const [hover, setHover] = useState(false);
  const fetchCategory = useCategory(categoryId);
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState(false);
  const [data, setData] = useState({
    title_ar: '',
    description_ar: '',
    title_en: '',
    description_en: '',
    title_fr: '',
    description_fr: '',
  });
  const getCategory = async () => {
    const { title_ar, description_ar, title_en, description_en, title_fr, description_fr, cover, coverCloudId, isChild } =
      await fetchCategory();
    setData({
      title_ar,
      description_ar,
      title_en,
      description_en,
      title_fr,
      description_fr,
    })
    setPosition(isChild);
    setLoader(false);

  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // "Async"  function to send the data

  const AddCategoryCB = async () => {
    setLoading(true);

    let requestData = {
      id: categoryId,
      ...data
    };

    try {
      const validData = await categorySchema.validateSync(requestData)
      const res = await axiosReq.put(`/categories/${categoryId}`, validData);
      if (res.status === 200) {
        toast.success(`added category successfully`);
        setOpenUpdateCategory(false);
        if (!position) {
          await fetchCategories();
        } else {
          await reFetchSub();
        }
        setLoading(false);
        setLoader(false);
      }
    } catch (err) {
      setLoader(false);
      setLoading(false);
      getCategory();
      if(err.response){
        toast.error(`${err?.response?.data?.msg}`);
      } else {
        console.log(err);
        toast.error(`${err?.message}`);

      }
    }
  };

  const handleClose = () => {
    setOpenUpdateCategory(false);
  };

  useEffect(() => {
    
    getCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            background: '#D6F1E8',
            minHeight: '50vh',
            minWidth: '50vw',
          },
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',

          }}
        >
          <Typography
            paragraph
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {loading && <Loader />}
            <UpdateOutlined
              fontSize="large"
              sx={{
                marginRight: '1rem',
                fontSize: '28px',
              }}
            />
            تعديل الصنف
          </Typography>
          {loader && <CircularProgress size={25} />}
        </DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          <CustomTextField
            sx={{
              label: { color: '#b1a9a9', marginLeft: '1rem' },
            }}
            id="standard-basic"
            label="إسم الصنف"
            variant="standard"
            name="title_ar"
            onChange={handleInput}
            value={data.title_ar}
          />
          <CustomTextField
            sx={{
              label: { color: '#b1a9a9', marginLeft: '1rem' },
            }}
            id="standard-basic"
            label="إسم الصنف بالانجليزية"
            variant="standard"
            name="title_en"
            onChange={handleInput}
            value={data.title_en}
          />
          <CustomTextField
            sx={{
              label: { color: '#b1a9a9', marginLeft: '1rem' },
            }}
            id="standard-basic"
            label="إسم الصنف بالفرنسية"
            variant="standard"
            name="title_fr"
            onChange={handleInput}
            value={data.title_fr}
          />
          <CategoryDescriptionInput
            key="Category Description__ar"
            name="description_ar"
            onChange={handleInput}
            value={data.description_ar}
            id="outlined-multiline-static"
            label="وصف الصنف"
            multiline
            rows={4}
          />
          <CategoryDescriptionInput
            key="Category Description__en"
            name="description_en"
            onChange={handleInput}
            value={data.description_en}
            id="outlined-multiline-static"
            label="وصف الصنف بالانجليزية"
            multiline
            rows={4}
          />
          <CategoryDescriptionInput
            key="Category Description__fr"
            name="description_fr"
            onChange={handleInput}
            value={data.description_fr}
            id="outlined-multiline-static"
            label="وصف الصنف بالفرنسية"
            multiline
            rows={4}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>إلغاء</Button>
          <Button onClick={AddCategoryCB} disabled={loader}>
            حفظ
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

UpdateCategory.propTypes = {
  open: PropTypes.bool,
  setOpenUpdateCategory: PropTypes.func,
  categoryId: PropTypes.string,
  reFetchSub: PropTypes.func,
  fetchCategories: PropTypes.func,
}

export default UpdateCategory;
