// import { LDiv, LoaderBox, LoaderContainer } from './index.jsx';

import { LDiv, LoaderBox, LoaderContainer } from './loader.styled';

export const Loader = () => (
    <LoaderContainer>
      <LoaderBox>
        <LDiv
          style={{
            animationDelay: ' -0.45s',
          }}
        />
        <LDiv
          style={{
            animationDelay: '-0.3s',
          }}
        />
        <LDiv
          style={{
            animationDelay: '-0.15s',
          }}
        />
        <LDiv />
      </LoaderBox>
    </LoaderContainer>
  );
