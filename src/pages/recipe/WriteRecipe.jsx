import React from 'react';
import {useForm} from 'react-hook-form';
import {Box} from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ModalPopup from 'components/common/ModalPopup';
const WriteRecipe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();
  const [modal, setModal] = React.useState(false);
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        {/* Todo : 공통으로 빼기 */}
        <Title>레시피 등록하기</Title>
        <FilterTitle>제목</FilterTitle>
      </Box>
      <Box>
        <FilterInputWrapper>
          <FilterInput placeholder="레시피 제목을 입력해주세요"></FilterInput>
          <CloseIcon />
        </FilterInputWrapper>
      </Box>
      <Box mt={5}>
        <FilterTitle>카테고리</FilterTitle>
        <FilterButtonGroup>
          <FilterButton background="#5C5C5C" color="white">
            한식
          </FilterButton>
          <FilterButton background="#F3F3F3">중식</FilterButton>
          <FilterButton background="#F3F3F3">일식</FilterButton>
          <FilterButton background="#F3F3F3">양식</FilterButton>
          <FilterButton background="#F3F3F3">간식</FilterButton>
        </FilterButtonGroup>
      </Box>
      <Box mt={5}>
        <FilterTitle>양</FilterTitle>
        <Box sx={{display: 'flex'}}>
          <AmountCounter>
            <RemoveIcon />
            <div>0</div>
            <AddIcon />
          </AmountCounter>
          <Typography>인분</Typography>
        </Box>
      </Box>
      <Box mt={5}>
        <FilterTitle>소요시간</FilterTitle>
        <Box sx={{display: 'flex'}}>
          <TimeInput type="number" width="50px" />
          <Typography>시간</Typography>
          <TimeInput type="number" width="50px" />
          <Typography>분</Typography>
        </Box>
      </Box>
      <Box mt={5}>
        <FilterTitle>재료</FilterTitle>
        <Box sx={{display: 'flex', gap: '10px'}} my={1}>
          <TimeInput width="100%" placeholder="재료를 입력해주세요" />
          <TimeInput width="100%" placeholder="양을 입력해 주세요" />
        </Box>
        <FilterButton background="#5C5C5C" color="white">
          재료 추가하기
        </FilterButton>
      </Box>
      <Box mt={5}>
        <FilterTitle>과정</FilterTitle>
        <Box sx={{display: 'flex', gap: '10px'}} my={1}>
          <TimeInput width="100%" placeholder="과정을 입력해주세요" />
        </Box>
        {/* TODO : 공통 컴포넌트추가하기 */}

        <FilterButton background="#5C5C5C" color="white">
          과정추가하기
        </FilterButton>
      </Box>
      <Box mt={5}>
        <FilterTitle>완성 사진</FilterTitle>
        {/* TODO : 공통 컴포넌트추가하기 */}

        <FilterButton
          onClick={() => setModal(true)}
          background="#5C5C5C"
          color="white">
          등록하기
        </FilterButton>
      </Box>

      {/* Todo : form 연결하기 */}
      {/* <label>First Name</label>
      <input
        {...register('firstName', {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.firstName?.type === 'required' && <p>This field is required</p>}
      {errors?.firstName?.type === 'maxLength' && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === 'pattern' && (
        <p>Alphabetical characters only</p>
      )}
      <label>Laste Name</label>
      <input {...register('lastName', {pattern: /^[A-Za-z]+$/i})} />
      {errors?.lastName?.type === 'pattern' && (
        <p>Alphabetical characters only</p>
      )}
      <label>Age</label>a
      <input {...register('age', {min: 18, max: 99})} />
      {errors.age && (
        <p>You Must be older then 18 and younger then 99 years old</p>
      )}
      <input type="submit" /> */}
      {modal && (
        <ModalPopup
          isOn={false}
          content="레시피 등록 하시겠어요?"
          closeEvent={setModal}
          yesEvent={() => {}}></ModalPopup>
      )}
    </form>
  );
};
export default WriteRecipe;
const Title = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;
const FilterTitle = styled.p`
  font-weight: bold;
`;
const FilterInputWrapper = styled.div`
  width: 100%;
  height: 48px;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
`;

const FilterInput = styled.input`
  width: 100%;
  border: none;
  background: none;
`;

const FilterButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
const FilterButton = styled.button`
  height: 48px;
  width: 100%;
  border: none;
  background: ${(props) => props.background};
  // margin: 10px 10px 5px 0px;
  color: ${(props) => (props.color ? props.color : 'black')};
`;
const AmountCounter = styled.div`
  background: #e5e5e5;
  display: flex;
  width: 50%;
  justify-content: space-around;
  padding: 10px 0px;
  align-items: center;
`;

const TimeInput = styled.input`
  background: #e5e5e5;
  border: noe;
  border: none;
  width: ${(props) => props.width};
  height: 50px;
  padding: 0px 10px;
`;

//Todo : 공통으로 뺴기
const Typography = styled.p`
  margin: auto 1rem;
`;
