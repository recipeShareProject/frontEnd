import styled from 'styled-components';
import MainBannerImg from 'ui/organisms/MainBannerImg';

const SearchResultContent = () => {
  return (
    //Todo : atom grid로 변경
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
  gap: 10px;
`;

export default SearchResultContent;