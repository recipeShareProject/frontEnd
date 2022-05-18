import {Box} from '@mui/material';
import {Black40} from 'assets/colorSet';
import MainBannerImg from 'components/main/MainBannerImg';
import styled from 'styled-components';

const BookMarkPage = () => {
  return (
    <Box>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Title>북마크</Title>
        <BookmarkCount>n개</BookmarkCount>
      </Box>
      {/* TODO: 북마크 있을때 */}
      {/* <MainBannerGroup>
        <MainBannerImg width="160px" />
        <MainBannerImg width="160px" />
        <MainBannerImg width="160px" />
        <MainBannerImg width="160px" />
        <MainBannerImg width="160px" />
      </MainBannerGroup> */}

      {/* TODO: 북마크 없을때 */}
      <NotFoundWrapper>
        <NotFoundImg src="imgs/illust.png" alt="" />
        <p>북마크가 존재하지 않아요.</p>
      </NotFoundWrapper>
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
  color: ${Black40};
  font-size: 14px;
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
  top: 5px;
  left: 5px;
  z-index: 10;
`;

const NotFoundWrapper = styled.div`
  width: 100%;
  height: 50vh;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
const NotFoundImg = styled.img`
  width: 160px;
  height: 160px;
`;
