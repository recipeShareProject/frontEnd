import React from 'react';
import styled from 'styled-components';

const Box = ({
  margin,
  padding,
  display,
  width,
  height,
  gap,
  justifyContent,
  mt,
  children,
}) => {
  return (
    <StyledBox
      mt={mt}
      margin={margin}
      padding={padding}
      display={display}
      width={width}
      height={height}
      gap={gap}
      justifyContent={justifyContent}>
      {children}
    </StyledBox>
  );
};

const StyledBox = styled.div`
  margin-top: ${(props) => props.mt}px;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
`;
export default Box;
