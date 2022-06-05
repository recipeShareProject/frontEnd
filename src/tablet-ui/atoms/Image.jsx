import React from 'react';
import styled from 'styled-components';
const Image = ({
  width,
  height,
  src = 'https://i.pinimg.com/564x/b9/cd/cc/b9cdccde10d5a581874f58bb7e914962.jpg',
  alt,
  radius = '4px',
  margin,
}) => {
  return (
    <ImgWrapper width={width} height={height} margin={margin}>
      <StyledImage
        width={width}
        height={height}
        src={src}
        alt={alt}
        radius={radius}
      />
    </ImgWrapper>
  );
};

export default Image;

const ImgWrapper = styled.div`
  margin: ${(props) => props.margin};
  object-fit: contain;
`;
const StyledImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : '120px')};
  object-fit: cover;
  border-radius: ${(props) => props.radius};
`;
