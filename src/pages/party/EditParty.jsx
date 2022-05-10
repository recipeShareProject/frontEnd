import React from 'react';
import styled from 'styled-components';

import AddImgSlider from 'components/common/AddImgSlider';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
function EditParty() {
  return (
    <>
      <h1>게시글 등록하기</h1>
      <h4>제목</h4>
      <form>
        <FlexDiv>
          <Radio id="content1" type="radio" value="share" name="share"></Radio>
          <Label htmlFor="content1">나눔해요</Label>

          <Radio id="content2" type="radio" value="share" name="share"></Radio>
          <Label htmlFor="content2">나눔해줘요</Label>
        </FlexDiv>
      </form>
      <h4>사진</h4>
      <AddImgSlider></AddImgSlider>
      <TextArea placeholder="게시글에 들어갈 내용을 입력해 주세요"></TextArea>

      <Link>
        <LinkRoundedIcon />
        <p>Potluck의 레시피 링크를 추가해 보세요</p>
      </Link>

      <TagBtn>
        <p>태그를 추가해 주세요</p>
        <AddRoundedIcon />
      </TagBtn>

      <TagSlider>태그영역</TagSlider>

      <h4>나눔 종료 일시</h4>
      <FlexDiv>
        <Days>00/00/00</Days>
        <Time>00:00</Time>
      </FlexDiv>
      <AddBtn>등록하기</AddBtn>
    </>
  );
}

const Radio = styled.input`
  margin-right: 1rem;
`;

const FlexDiv = styled.div`
  display: flex;
`;

const Label = styled.label`
  height: 48px;
  width: 50%;
  display: inline-block;
  background-color: gray;
`;

const TextArea = styled.textarea`
  height: 110px;
  width: 100%;
  margin-top: 4.5rem;
  box-sizing: border-box;
  resize: none;
  padding: 1rem;
  margin-bottom: 0.5rem;
`;

const Link = styled.div`
  height: 48px;
  background-color: lightgray;
  margin-bottom: 0.5rem;
`;

const TagBtn = styled.div`
  height: 48px;
  background-color: lightgray;
  margin-bottom: 1rem;
  p {
    /* margin: 0.5rem; */
    padding: 0;
  }
`;

const TagSlider = styled.div`
  height: 28px;
  background-color: lightgray;
`;

const Days = styled.div`
  height: 48px;
  width: 50%;
  background-color: lightgray;
  margin-right: 0.5rem;
`;

const Time = styled.div`
  height: 48px;
  width: 30%;
  background-color: lightgray;
`;

const AddBtn = styled.div`
  height: 48px;
  background-color: lightgray;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default EditParty;
