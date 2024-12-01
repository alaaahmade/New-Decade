import { Box, styled } from '@mui/material';

export const LoaderContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  translate: '-50% -50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100% !important',
  zIndex: 4000,
});

export const LoaderBox = styled(Box)({
  display: 'inline-block',
  position: 'relative',
  width: '80px',
  zIndex: 40,
  height: '80px',
});

export const LDiv = styled('div')`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 55px;
  height: 55px;
  margin: 8px;
  border: 4px solid #2292F9;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #b8b8b8 transparent transparent transparent;

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
