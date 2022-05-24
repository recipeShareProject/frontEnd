import React from 'react';
import styled from 'styled-components';
const Image = ({
  width,
  height,
  src = 'https://i.pinimg.com/564x/b9/cd/cc/b9cdccde10d5a581874f58bb7e914962.jpg',
  alt,
  radius,
  margin,
}) => {
  return (
    <ImgWrapper width={width} height={height} margin={margin}>
      <StyledImage src={src} alt={alt} radius={radius} />
    </ImgWrapper>
  );
};

export default Image;

const ImgWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : '120px')};
  margin: ${(props) => props.margin};
  object-fit: contain;
  /* position: relative; */
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${(props) => props.radius};
`;
