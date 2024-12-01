import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Box } from '@mui/material';

export const CategoriesListWrapper = styled(Box)(
  () => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '115vh',
    maxHeight: '120vh',
    backgroundColor: '#D6F1E8',
    width: '60%',
    paddingBottom: '4rem !important',
    overflowY: 'auto',
    WebkitScrollSnapType: 'both',
    padding: '2em !important',
    borderTopRightRadius: '2rem',
    borderBottomRightRadius: '2rem',
  }),
  `
    ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f6cd06;
    outline: 1px solid #f6cd06;
    border-radius: 8px;
  }
  `,
);

export const ParentListItem = styled(List)(() => ({
  background:
    'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
  borderRadius: '12px',
  border: '1px solid #ccc',
  marginTop: '2 0px',
  // color: '#000'
}));

export const CloseSign = styled('div')`
  background-color: #f6cd06;
  width: 16px;
  height: 2px;
`;

export const OpenSign = styled('div')`
  color: #000;
  font-size: 2rem;
`;

export const CustomSpan = styled('span')`
  color: #000;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
`;

export const SubLIstItemWrapper = styled('div')`
  border-top: 2px solid #424244;
`;

export const EditIcon = styled(ModeEditOutlineOutlinedIcon)(() => ({
  marginRight: '20px',
}));
