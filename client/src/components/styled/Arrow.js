import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledArrow = styled(Box)(({ arrow }) => {
  const SIZE = 8;

  // const POSITION = -(SIZE / 2) + 0.5;

  const topStyle = {
    // top: POSITION,
    transform: 'rotate(135deg)',
  };

  const bottomStyle = {
    // bottom: POSITION,
    transform: 'rotate(-45deg)',
  };

  const leftStyle = {
    // left: POSITION,
    transform: 'rotate(45deg)',
  };

  const rightStyle = {
    // right: POSITION,
    transform: 'rotate(-135deg)',
  };

  return {
    width: SIZE,
    height: SIZE,
    // position: 'absolute',
    margin: '0.5em',
    borderBottomLeftRadius: SIZE / 4,
    clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
    border: `solid 2px #FF5630`,
    ...(arrow === 'top-left' && { ...topStyle }),
    ...(arrow === 'top-center' && {
      ...topStyle,
      // left: 0,
      // right: 0,
      // margin: 'auto',
    }),
    // ...bgBlur({
    //   color: theme.palette.background.paper,
    // }),
    ...(arrow === 'top-right' && { ...topStyle }),
    // Bottom
    ...(arrow === 'bottom-left' && { ...bottomStyle }),
    ...(arrow === 'bottom-center' && {
      ...bottomStyle,
      // left: 0,
      // right: 0,
      // margin: 'auto',
    }),
    ...(arrow === 'bottom-right' && { ...bottomStyle }),
    // Left
    ...(arrow === 'left-top' && { ...leftStyle }),
    ...(arrow === 'left-center' && {
      ...leftStyle,
      // top: 0,
      // bottom: 0,
      // margin: 'auto',
    }),
    ...(arrow === 'left-bottom' && { ...leftStyle }),
    // Right
    ...(arrow === 'right-top' && { ...rightStyle }),
    ...(arrow === 'right-center' && {
      ...rightStyle,
      // top: 0,
      // bottom: 0,
      // margin: 'auto',
    }),
    ...(arrow === 'right-bottom' && { ...rightStyle }),
  };
});
