import React from 'react';
import styled from 'styled-components';

const Wrapper = ({
  margin,
  padding,
  display,
  direction,
  justify,
  align,
  width,
  height,
  background,
  position,
  boxSizing,
  gap,
  flexWrap,
  opacity,
  _onClick,
  children,
}) => {
  return (
    <StyledWrapper
      margin={margin}
      padding={padding}
      display={display}
      direction={direction}
      justify={justify}
      align={align}
      width={width}
      height={height}
      background={background}
      position={position}
      boxSizing={boxSizing}
      gap={gap}
      flexWrap={flexWrap}
      onClick={_onClick}
      opacity={opacity}>
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  position: ${(props) => props.position};
  box-sizing: ${(props) => props.boxSizing};
  gap: ${(props) => props.gap};
  flex-wrap: ${(props) => props.flexWrap};
  opacity: ${(props) => props.opacity};
`;

export default Wrapper;
