import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {tagActions} from 'redux/slice/tagSlice';
import dayjs from 'dayjs';

import AddImgSlider from 'components/common/AddImgSlider';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import BtnGroup from 'pages/party/BtnGroup';
import Tag from 'components/common/Tag';

function EditParty() {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tag.tags);
  const tagInput = React.useRef();
  const [check, setCheck] = React.useState('content1');
  const handleChkChange = (e) => {
    setCheck(e.target.id);
  };

  const onTag = (e) => {
    //enter 키코드 = 0
    if (e.keyCode === 0 || e.type === 'click') {
      dispatch(tagActions.addTag(tagInput.current.value));
      tagInput.current.value = '';
    }
  };
  const now = dayjs().format();
  const date = dayjs(now, 'YY/MM/DD');
  console.log(date.format);
  return (
    <>
      <h1>게시글 등록하기</h1>
      <h4>제목</h4>

      <FlexDiv>
        <div>
          <Radio
            onChange={handleChkChange}
            id="content1"
            type="radio"
            name="share"></Radio>
          <Label check={check === 'content1'} htmlFor="content1">
            나눔해요
          </Label>
        </div>
        <div>
          <Radio
            onChange={handleChkChange}
            id="content2"
            type="radio"
            name="share"></Radio>
          <Label check={check === 'content2'} htmlFor="content2">
            나눔해줘요
          </Label>
        </div>
      </FlexDiv>
      <h4>사진</h4>
      <AddImgSlider></AddImgSlider>
      <TextArea placeholder="게시글에 들어갈 내용을 입력해 주세요"></TextArea>
      <Link>
        <LinkRoundedIcon />
        <p>Potluck의 레시피 링크를 추가해 보세요</p>
      </Link>
      <TagBtn>
        <TagInput onKeyPress={onTag} ref={tagInput} />
        <PlusBtn onClick={onTag} />
      </TagBtn>
      <Tag type="input">태그영역</Tag>
      <h4>나눔 종료 일시</h4>
      <FlexDiv>
        <Days>date</Days>
        <Time>00:00</Time>
      </FlexDiv>
      <AddBtn>등록하기</AddBtn>
    </>
  );
}

const Radio = styled.input`
  display: none;
  margin-right: 1rem;
`;

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  div:first-child {
    margin-right: 0.5rem;
  }
`;

const Label = styled.label`
  height: 48px;
  width: 44vw;
  display: inline-block;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.check ? 'background-color:  #5C5C5C; color:white;' : '')}
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

  display: flex;
  align-items: center;
  padding-left: 10px;
  p {
    padding-left: 10px;
  }
`;

const TagBtn = styled.div`
  height: 48px;
  background-color: lightgray;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
  p {
    padding-left: 0.5rem;
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

const TagInput = styled.input`
  width: 100%;
  border: none;
  background: none;

  line-height: 1.5rem;
`;

const PlusBtn = styled(AddRoundedIcon)`
  cursor: pointer;
`;

export default EditParty;
