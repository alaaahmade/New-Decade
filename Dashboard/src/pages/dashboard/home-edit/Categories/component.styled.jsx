import { styled } from '@mui/material/styles';
import { Button, Select, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { CreateNewFolderOutlined } from '@mui/icons-material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const DescriptionInput = styled(TextField)({
  borderRadius: '0.5rem',
  input: { marginLeft: '1rem', color: '#000' },
  label: { color: '#b1a9a9' },
  width: '50%',
  textarea: { color: '#000' },
  background:
    'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
});

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${190}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  height: '100%',
}));

export const CategoryDescriptionInput = styled(DescriptionInput)`
  width: 100%;
  color: '#000';
  background: linear-gradient(
    130.79deg,
    rgba(255, 255, 255, 0.08) -37.1%,
    rgba(255, 255, 255, 0) 134.47%
  );
`;

export const AddCategoryButton = styled(Button)`
  width: 100%;
  background-color: #2292F9;
  height: 54px;
  border-radius: 12px;
  color: #fff;
  margin-top: 0px;
  &:hover {
    background-color: #22C0c9;
  }
`;

export const CustomTextField = styled(TextField)`
  width: 100%;
  border-radius: 0.5rem;
  height: 50px;
  background: linear-gradient(
    130.79deg,
    rgba(255, 255, 255, 0.08) -37.1%,
    rgba(255, 255, 255, 0) 134.47%
  );
`;

export const CategoryNameWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`;

export const CategoryDetailsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`;

export const CategoryMain = styled(Main)`
  background: #fff;
  color: #000;
  max-width: 35%;
  border: 1px solid #000;
  
`;

export const CategoryWrapper = styled('div')`
  height: 100%;
  padding: 25px;
  background: #D6F1E8;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  min-width: 100%;
  // overflow-y: scroll;
  // margin-left: 100px;
`;

export const CustomTypography = styled(Typography)`
  display: flex;
  align-items: center;
`;

export const FolderIcon = styled(CreateNewFolderOutlined)`
  margin-right: 1rem;
  font-size: 28px;
`;

export const CustomCoverButton = styled(Button)(
  ({ component, variant, startIcon }) => ({
    borderRadius: '0.5rem',
    padding: '1rem',
    width: '100%',
    background:
      'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
  }),
);


export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '1em ',
  // background: '#141417',
  backgroundColor: '#D6F1E8',
  color: '#000',
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  height: 'fit-content',
  minHeight: '100px !important',
}));

export const arrowIcon = styled(KeyboardDoubleArrowDownIcon)({
  color: '#000 !important',
});

export const SelectCats = styled(Select)({
  borderRadius: '0.5rem',
  background:
    'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
  width: '50%',
  color: '#000',
});