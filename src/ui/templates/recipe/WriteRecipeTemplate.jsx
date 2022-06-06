import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Box from 'ui/atoms/Box';
import styled from 'styled-components';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ModalPopup from 'ui/molecules/ModalPopup';
import {Black20, Black5, Colar100, Navy100} from 'assets/colorSet';
import HeaderBar from 'ui/templates/header/HeaderBar';
import AddImgFileInput from 'ui/organisms/AddImgFileInput';
import AddImgSlider from 'ui/organisms/AddImgSlider';
import {useSelector} from 'react-redux';
import recipeApi from 'api/recipeApi';
import {useNavigate} from 'react-router';
import Divider from 'ui/atoms/Divider';

const WriteRecipeTemplate = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [ingredient, setIngredient] = useState([1]);
  const [process, setProcess] = useState([1]);

  const processImgs = useSelector((state) => state.img.processImgs);
  const sendCompleteImgs = useSelector((state) => state.img.sendCompleteImgs);

  const {
    register,
    handleSubmit,
    // todo : required 처리
    // formState: {errors},
  } = useForm();

  const onSubmit = async (data) => {
    const _cookTime =
      parseInt(data.cookTime_hour) * 60 + parseInt(data.cookTime_minute);
    const sendData = {
      ...data,
      category: category,
      processImages: processImgs,
      completeImages: sendCompleteImgs,
      cookTime: _cookTime,
    };

    recipeApi.addRecipeAxios(sendData).then((res) => {
      window.alert('레시피가 등록되었습니다.');
      navigate('/');
    });
  };

  const [category, setCategory] = useState('한식');

  const onChangeCategoryValue = (e) => {
    setCategory(e.target.value);
  };
  return (
    <>
      <HeaderBar />
      <Box padding="72px 0px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box padding="0px 1rem">
            <Title>레시피 등록하기</Title>
            <FilterTitle>제목</FilterTitle>
          </Box>
          <Box padding="0px 1rem">
            <FilterInputWrapper>
              <FilterInput
                placeholder="제목을 입력해주세요"
                {...register('title')}></FilterInput>
            </FilterInputWrapper>
          </Box>
          <Box mt={50} padding="0px 1rem">
            <FilterTitle>카테고리</FilterTitle>
            <FilterButtonGroup>
              <input
                type="radio"
                name="한식"
                id="한식"
                value="한식"
                style={{display: 'none'}}
                {...register('category')}
                onChange={(e) => onChangeCategoryValue(e)}
              />
              <FilterButton htmlFor="한식" isChecked={category === '한식'}>
                한식
              </FilterButton>
              <input
                type="radio"
                name="중식"
                id="중식"
                value="중식"
                style={{display: 'none'}}
                {...register('category')}
                onChange={(e) => onChangeCategoryValue(e)}
              />
              <FilterButton htmlFor="중식" isChecked={category === '중식'}>
                중식
              </FilterButton>
              <input
                type="radio"
                name="일식"
                id="일식"
                value="일식"
                style={{display: 'none'}}
                {...register('category')}
                onChange={(e) => onChangeCategoryValue(e)}
              />
              <FilterButton htmlFor="일식" isChecked={category === '일식'}>
                일식
              </FilterButton>
              <input
                type="radio"
                name="양식"
                id="양식"
                value="양식"
                style={{display: 'none'}}
                {...register('category')}
                onChange={(e) => onChangeCategoryValue(e)}
              />
              <FilterButton htmlFor="양식" isChecked={category === '양식'}>
                양식
              </FilterButton>
              <input
                type="radio"
                name="간식"
                id="간식"
                value="간식"
                style={{display: 'none'}}
                {...register('category')}
                onChange={(e) => onChangeCategoryValue(e)}
              />
              <FilterButton htmlFor="간식" isChecked={category === '간식'}>
                간식
              </FilterButton>
            </FilterButtonGroup>
          </Box>
          <Divider margin="1rem 0px" />
          <Box mt={50} padding="0px 1rem">
            <FilterTitle>양</FilterTitle>
            <Box display="flex">
              <AmountCounter>
                <RemoveIcon
                  onClick={() => {
                    if (quantity > 0) {
                      setQuantity(quantity - 1);
                    }
                  }}
                />
                <div>{quantity}</div>
                <AddIcon onClick={() => setQuantity(quantity + 1)} />
              </AmountCounter>
              <Typography>인분</Typography>
            </Box>
          </Box>
          <Box mt={50} padding="0px 1rem">
            <FilterTitle>소요시간</FilterTitle>
            <Box display="flex">
              <TimeInput
                type="number"
                width="50px"
                placeholder="0"
                {...register('cookTime_hour')}
              />
              <Typography>시간</Typography>
              <TimeInput
                type="number"
                width="50px"
                placeholder="0"
                {...register('cookTime_minute')}
              />
              <Typography>분</Typography>
            </Box>
          </Box>
          <Box mt={50} padding="0px 1rem">
            <FilterTitle>재료</FilterTitle>
            {ingredient.map((p, index) => {
              return (
                <Box key={index}>
                  <Box display="flex" gap="10px" margin="10px 0px">
                    <TimeInput
                      width="100%"
                      placeholder="재료를 입력해주세요"
                      {...register(`ingredient.${index}.name`)}
                    />
                    <TimeInput
                      width="100%"
                      placeholder="양을 입력해 주세요"
                      {...register(`ingredient.${index}.amount`)}
                    />
                  </Box>
                </Box>
              );
            })}
            <AddButtonWrapper
              onClick={() => setIngredient([...ingredient, ingredient + 1])}>
              <AddIcon />
              <AddButton type="button">재료 추가하기</AddButton>
            </AddButtonWrapper>
          </Box>
          <Box mt={50} padding="0px 1rem">
            <FilterTitle>과정</FilterTitle>
            {process.map((p, index) => {
              return (
                <Box key={index}>
                  <Box display="flex" gap="10px" margin="10px 0px">
                    <TimeInput
                      width="100%"
                      placeholder="과정을 입력해주세요"
                      {...register(`process.${index}`)}
                    />
                  </Box>
                  <AddImgFileInput
                    idx={`${index}${index}`}
                    {...register(`processImages.${index}`)}
                  />
                </Box>
              );
            })}

            <AddButtonWrapper
              onClick={() => setProcess([...process, process + 1])}>
              <AddIcon />
              <AddButton type="button">과정 추가하기</AddButton>
            </AddButtonWrapper>
          </Box>
          <Box mt={50} padding="0px 1rem">
            <FilterTitle>완성 사진</FilterTitle>
            <AddImgSlider />

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
    </>
  );
};
export default WriteRecipeTemplate;
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
`;

const TimeInput = styled.input`
  border: noe;
  border: none;
  width: ${(props) => props.width};
  height: 50px;
  padding: 0px 10px;
  border-bottom: 1px solid ${Black20};
`;

//Todo : atom으로 변경
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
  color: ${Navy100};
`;

//TODO : atom
const SubmitButton = styled.button`
  width: 100%;
  background: ${Colar100};
  position: fixed;
  bottom: 0px;
  margin-left: -1rem;
  border: none;
  padding: 20px;
  color: white;
`;
