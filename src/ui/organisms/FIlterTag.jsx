import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import {Black5, Colar100} from 'assets/colorSet';

const FIlterTag = ({children}) => {
  return (
    <FilterInputTag>
      <p>{children}</p>
      <CloseIcon fontSize="small" />
    </FilterInputTag>
  );
};

const FilterInputTag = styled.div`
  color: ${Colar100};
  border: 2px solid ${Black5};
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 2px;
  font-size: 0.8rem;
  font-weight: 600;
  p {
    margin: 0;
    margin: 0px 10px;
  }
`;
export default FIlterTag;
