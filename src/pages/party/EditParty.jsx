import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {tagActions} from 'redux/slice/tagSlice';

import AddImgSlider from 'components/common/AddImgSlider';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

import BtnGroup from 'pages/party/BtnGroup';
import Tag from 'components/common/Tag';

function EditParty() {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tag.tags);
  const tagInput = React.useRef();
  const [check, setCheck] = React.useState('share');

  const now = dayjs();
  const puls = now.add(5, 'day').$d;
  const start = now.add(1, 'day').$d;
  const [startDate, setStartDate] = React.useState(start);
  const [startTime, setStartTime] = React.useState(new Date());
  const date = React.useRef();
  const time = React.useRef();
  const [radioVal, setRadioVal] = React.useState('');

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

  const onCheck = (e) => {};
  const onRadio = (e) => {
    console.log(e.target.id);
  };
  return (
    <>
      <h1>게시글 등록하기</h1>
      <h4>제목</h4>
      <FlexDiv>
        <div>
          <Radio
            onChange={handleChkChange}
            id="share"
            type="radio"
            name="share"
            value={radioVal}
            onClick={onRadio}></Radio>
          <Label check={check === 'share'} htmlFor="share">
            나눔해요
          </Label>
        </div>
        <div>
          <Radio
            onChange={handleChkChange}
            id="noshare"
            type="radio"
            name="share"
            value={radioVal}
            onClick={onRadio}></Radio>
          <Label check={check === 'noshare'} htmlFor="noshare">
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
        <DatePicker1
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          maxDate={puls}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          ref={date}
        />

        <TimePicker1
          selected={startTime}
          onChange={(date) => setStartTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="시간"
          dateFormat="h:mm aa"
          ref={time}
        />
      </FlexDiv>
      <AddBtn onClick={onCheck}>등록하기</AddBtn>
    </>
  );
}

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  div:first-child {
    margin-right: 0.5rem;
  }
`;
const Radio = styled.input`
  display: none;
  margin-right: 1rem;
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

const AddBtn = styled.div`
  height: 48px;
  background-color: lightgray;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
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
const DatePicker1 = styled(DatePicker)`
  background-color: red;
  width: 50%;
`;
const TimePicker1 = styled(DatePicker)`
  width: 50%;
`;
export default EditParty;
