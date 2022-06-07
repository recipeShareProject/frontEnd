import React from 'react';
import styled from 'styled-components';
import {Black5, Colar100} from 'assets/colorSet';

const FIlterTag = ({children}) => {
  return (
    <StyledTag>
      <p>{children}</p>
    </StyledTag>
  );
};

const StyledTag = styled.div`
  color: ${Colar100};
  border: 2px solid ${Black5};
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 2px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 16px;
  p {
    margin: 0;
    margin: 0px 10px;
  }
`;
export default FIlterTag;
