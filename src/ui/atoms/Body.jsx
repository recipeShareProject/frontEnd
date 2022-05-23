import React from 'react';
import styled from 'styled-components';
const Body = ({height, padding, children}) => {
  return (
    <StyledBody height={height} padding={padding}>
      {children}
    </StyledBody>
  );
};

const StyledBody = styled.div`
  padding: ${(props) => props.padding};
`;
export default Body;
