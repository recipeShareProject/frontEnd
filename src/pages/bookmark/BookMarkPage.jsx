import {Box, Button} from '@mui/material';
import MainBannerImg from 'components/main/MainBannerImg';
import styled from 'styled-components';

const BookMarkPage = () => {
  return (
    <Box>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Title>북마크</Title>
        <BookmarkCount>n개</BookmarkCount>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'right'}}>
        <Button>편집</Button>
      </Box>

      <MainBannerGroup>
        {/* Todo : 공통 컴포넌트 제작 */}
        <CheckboxWrapper>
          <Checkbox type="checkbox" id="scales" name="scales" />
          <label for="scales">
            <MainBannerImg />
          </label>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox type="checkbox" id="scales" name="scales" />
          <label for="scales">
            <MainBannerImg />
          </label>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox type="checkbox" id="scales" name="scales" />
          <label for="scales">
            <MainBannerImg />
          </label>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox type="checkbox" id="scales" name="scales" />
          <label for="scales">
            <MainBannerImg />
          </label>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox type="checkbox" id="scales" name="scales" />
          <label for="scales">
            <MainBannerImg />
          </label>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox type="checkbox" id="scales" name="scales" />
          <label for="scales">
            <MainBannerImg />
          </label>
        </CheckboxWrapper>
      </MainBannerGroup>
    </Box>
  );
};
export default BookMarkPage;
const Title = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  margin-right: 1rem;
`;
const BookmarkCount = styled.p`
  margin: 0;
`;

const MainBannerGroup = styled.div`
  gap: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const CheckboxWrapper = styled.div`
  position: relative;
`;
const Checkbox = styled.input`
  position: absolute;
  top: 0px;
  z-index: 10;
`;
