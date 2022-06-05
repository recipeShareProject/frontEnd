import React from 'react';
import styled from 'styled-components';
import profile from 'assets/imgs/profile48.png';
const AvataImg = ({width, height, src = profile, alt, radius, margin}) => {
  return (
    <ImgWrapper width={width} height={height} margin={margin}>
      <StyledImage src={src} alt={alt} radius={radius} />
    </ImgWrapper>
  );
};

export default AvataImg;

const ImgWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : '36px')};
  height: ${(props) => (props.height ? props.height : '36px')};
  margin-right: 0.5rem;
  margin: ${(props) => props.margin};

  object-fit: contain;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
