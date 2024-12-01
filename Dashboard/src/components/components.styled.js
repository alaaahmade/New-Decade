import { styled, TextField }  from '@mui/material';

export const DescriptionInput = styled(TextField)({
  borderRadius: '0.5rem',
  input: { marginLeft: '1rem', color: '#000' },
  label: { color: '#b1a9a9' },
  width: '100%',
  textarea: { color: '#000' },
  background:
    'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
});