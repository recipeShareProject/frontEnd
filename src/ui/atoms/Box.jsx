import React from 'react';
import styled from 'styled-components';

const Box = ({margin, padding, display, width, height, gap, children}) => {
  return (
    <StyledBox
      margin={margin}
      padding={padding}
      display={display}
      width={width}
      height={height}
      gap={gap}>
      {children}
    </StyledBox>
  );
};

const StyledBox = styled.div`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
`;
export default Box;
