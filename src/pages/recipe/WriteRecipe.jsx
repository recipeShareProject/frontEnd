import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Box} from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ModalPopup from 'components/common/ModalPopup';
import {Black20, Black5, Colar100, Navy100} from 'assets/colorSet';

const WriteRecipe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const [modal, setModal] = useState(false);

  const onSubmitSearchFilter = (data) => {
    console.log(data);
    console.log(category);
  };

  const [category, setCategory] = useState('korea');

  const onChangeCategoryValue = (e) => {
    setCategory(e.target.value);
  };
  return (
    <Box mb={10}>
      <form onSubmit={handleSubmit(onSubmitSearchFilter)}>
        <Box>
          {/* Todo : 공통으로 빼기 */}
          <Title>레시피 등록하기</Title>
          <FilterTitle>제목</FilterTitle>
        </Box>
        <Box>
          <FilterInputWrapper>
            <FilterInput placeholder="제목을 입력해주세요"></FilterInput>
          </FilterInputWrapper>
        </Box>
        <Box mt={5}>
          <FilterTitle>카테고리</FilterTitle>
          <FilterButtonGroup>
            <input
              type="radio"
              name="korea"
              id="korea"
              value="korea"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="korea" isChecked={category === 'korea'}>
              한식
            </FilterButton>
            <input
              type="radio"
              name="china"
              id="china"
              value="china"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="china" isChecked={category === 'china'}>
              중식
            </FilterButton>
            <input
              type="radio"
              name="japan"
              id="japan"
              value="japan"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="japan" isChecked={category === 'japan'}>
              일식
            </FilterButton>
            <input
              type="radio"
              name="america"
              id="america"
              value="america"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="america" isChecked={category === 'america'}>
              양식
            </FilterButton>
            <input
              type="radio"
              name="snack"
              id="snack"
              value="snack"
              style={{display: 'none'}}
              {...register('category')}
              onChange={(e) => onChangeCategoryValue(e)}
            />
            <FilterButton htmlFor="snack" isChecked={category === 'snack'}>
              간식
            </FilterButton>
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
            <TimeInput type="number" width="50px" placeholder="0" />
            <Typography>시간</Typography>
            <TimeInput type="number" width="50px" placeholder="0" />
            <Typography>분</Typography>
          </Box>
        </Box>
        <Box mt={5}>
          <FilterTitle>재료</FilterTitle>
          <Box sx={{display: 'flex', gap: '10px'}} my={1}>
            <TimeInput width="100%" placeholder="재료를 입력해주세요" />
            <TimeInput width="100%" placeholder="양을 입력해 주세요" />
          </Box>
          <AddButtonWrapper>
            <AddIcon />
            <AddButton>재료 추가하기</AddButton>
          </AddButtonWrapper>
        </Box>
        <Box mt={5}>
          <FilterTitle>과정</FilterTitle>
          <Box sx={{display: 'flex', gap: '10px'}} my={1}>
            <TimeInput width="100%" placeholder="과정을 입력해주세요" />
          </Box>
          {/* TODO : 공통 컴포넌트추가하기 */}

          <AddButtonWrapper>
            <AddIcon />
            <AddButton>과정 추가하기</AddButton>
          </AddButtonWrapper>
        </Box>
        <Box mt={5}>
          <FilterTitle>완성 사진</FilterTitle>
          {/* TODO : 공통 컴포넌트추가하기 */}

          <SubmitButton type="submit">등록하기</SubmitButton>
        </Box>

        {modal && (
          <ModalPopup
            isOn={false}
            content="레시피 등록 하시겠어요?"
            closeEvent={setModal}
            yesEvent={() => {}}></ModalPopup>
        )}
      </form>
    </Box>
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid ${Black20};
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
const FilterButton = styled.label`
  height: 48px;
  width: 100%;
  border: none;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.isChecked ? Colar100 : 'none')};
  background: white;
  color: ${(props) => (props.isChecked ? Colar100 : Black20)};
  background: ${(props) => (props.isChecked ? 'white' : Black5)};
  font-weight: bold;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 14px;
`;
const AmountCounter = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  padding: 10px 0px;
  align-items: center;
  border-bottom: 1px solid ${Black20};
  color: ${Black20};
`;

const TimeInput = styled.input`
  border: noe;
  border: none;
  width: ${(props) => props.width};
  height: 50px;
  padding: 0px 10px;
  border-bottom: 1px solid ${Black20};
  color: ${Black20};
  text-align: center;
`;

//Todo : 공통으로 뺴기
const Typography = styled.p`
  margin: auto 1rem;
`;
//Todo : 공통으로 뺴기
const AddButtonWrapper = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0px;
  color: ${Navy100};
`;
const AddButton = styled.button`
  border: none;
  background: none;
  font-weight: 500;
`;

const SubmitButton = styled.button`
  width: 100%;
  background: ${Colar100};
  position: fixed;
  bottom: 60px;
  margin-left: -1rem;
  border: none;
  padding: 20px;
  color: white;
`;
