import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import styled from 'styled-components';

import {useDispatch, useSelector} from 'react-redux';
import {tagActions} from 'redux/slice/tagSlice';

import {Colar100, Black5} from 'assets/colorSet';

const Tag = ({type, Children, tag}) => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tag.tags);

  const deleteTag = (idx) => {
    dispatch(tagActions.delTag(idx));
  };

  switch (type) {
    case 'input':
      return (
        <FilterInputTagWrapper>
          {tags.map((tag, idx) => (
            <FilterInputTag key={idx}>
              <p>{tag}</p>
              <CloseBtn onClick={() => deleteTag(idx)} fontSize="small" />
            </FilterInputTag>
          ))}
        </FilterInputTagWrapper>
      );
    default:
      return (
        <FilterInputTagWrapper>
          {tag.map((tag, idx) => (
            <FilterInputTag key={idx}>
              <p>{tag}</p>
            </FilterInputTag>
          ))}
        </FilterInputTagWrapper>
      );
  }
};

const FilterInputTagWrapper = styled.div`
  margin: 1.2rem 0px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const FilterInputTag = styled.div`
  color: ${Colar100};
  border: 2px solid ${Black5};
  background: white;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 5px;

  p {
    margin: 0;
    margin: 0px 10px;
    font-size: 12px;
    line-height: 130%;
    font-weight: 600;
    text-align: center;
  }
`;

const CloseBtn = styled(CloseIcon)`
  cursor: pointer;
`;
export default Tag;
