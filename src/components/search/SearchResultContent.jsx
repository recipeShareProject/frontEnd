import styled from 'styled-components';
import MainBannerImg from 'components/main/MainBannerImg';

const SearchResultContent = () => {
  return (
    //   TODO : 간격 맞추기
    <ImgGroup>
      <MainBannerImg width="100%" />
      <MainBannerImg width="100%" />
      <MainBannerImg width="100%" />
      <MainBannerImg width="100%" />
      <MainBannerImg width="100%" />
      <MainBannerImg width="100%" />
      <MainBannerImg width="100%" />
      <MainBannerImg width="100%" />
      <MainBannerImg width="100%" />
    </ImgGroup>
  );
};

const ImgGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default SearchResultContent;
