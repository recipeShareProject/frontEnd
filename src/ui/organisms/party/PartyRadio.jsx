import React from 'react';
import styled from 'styled-components';
import {Black5, Black20, Colar100} from 'assets/colorSet';
import Wrapper from 'ui/atoms/Wrapper';
const Radio = ({handleChkChange, category, disabled}) => {
  return (
    <React.Fragment>
      <Wrapper disabled={disabled} margin="16px 0 0 0" display="flex">
        <StyleRadio
          onChange={handleChkChange}
          id="나눔해요"
          type="radio"
          name="share"
          value={category}></StyleRadio>
        <Label check={category === '나눔해요'} htmlFor="나눔해요">
          나눔해요
        </Label>

        <StyleRadio
          onChange={handleChkChange}
          id="나눔해줘요"
          type="radio"
          name="share"
          value={category}></StyleRadio>
        <Label check={category === '나눔해줘요'} htmlFor="나눔해줘요">
          나눔해줘요
        </Label>
      </Wrapper>
    </React.Fragment>
  );
};
const StyleRadio = styled.input`
  display: none;
`;

const Label = styled.label`
  height: 48px;
  width: 44vw;
  display: inline-block;
  background-color: ${Black5};
  color: ${Black20};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  ${(props) =>
    props.check
      ? `border: 1px solid ${Colar100}; border-color:${Colar100}; background-color:  #FFFFFF; color:${Colar100};`
      : ''}
  margin-right: 1rem;
  margin-bottom: 24px;
`;
export default Radio;
