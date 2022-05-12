import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import styled from 'styled-components';
function Tag({type}) {
  switch (type) {
    case 'input':
      return (
        <FilterInputTagWrapper>
          <FilterInputTag>
            <p>스팸</p>
            <CloseIcon fontSize="small" />
          </FilterInputTag>
          <FilterInputTag>
            <p>돼지고기</p>
            <CloseIcon fontSize="small" />
          </FilterInputTag>
          <FilterInputTag>
            <p>돼지고기</p>
            <CloseIcon fontSize="small" />
          </FilterInputTag>
          <FilterInputTag>
            <p>스팸</p>
            <CloseIcon fontSize="small" />
          </FilterInputTag>
        </FilterInputTagWrapper>
      );
    default:
      return (
        <FilterInputTagWrapper>
          <FilterInputTag>
            <p>스팸</p>
          </FilterInputTag>
          <FilterInputTag>
            <p>돼지고기</p>
          </FilterInputTag>
          <FilterInputTag>
            <p>돼지고기</p>
          </FilterInputTag>
          <FilterInputTag>
            <p>스팸</p>
          </FilterInputTag>
        </FilterInputTagWrapper>
      );
  }
}

const FilterInputTagWrapper = styled.div`
  margin: 1.2rem 0px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const FilterInputTag = styled.div`
  color: white;
  background: #5c5c5c;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 5px;
  font-size: 0.8rem;
  p {
    margin: 0;
    margin: 0px 10px;
  }
`;
export default Tag;
