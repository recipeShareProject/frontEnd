import React from 'react';
import styled from 'styled-components';

import AddImgSlider from 'components/common/AddImgSlider';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
function DetailParty() {
  return (
    <>
      <ShareText>나눔해요</ShareText>
      <Title>게시글 제목</Title>
      <FlexDiv>
        <TextDiv>OO동</TextDiv>
        <TextDiv>n분 뒤까지</TextDiv>
      </FlexDiv>
      <AddImgSlider></AddImgSlider>
      <ProfillDiv>
        <StyleAvata></StyleAvata>
        <div>
          <div>닉네임</div>
          <div>n분전</div>
        </div>
      </ProfillDiv>
      <Content>
        숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어 내세요.
        내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
      </Content>
      <TagSlider>태그영역</TagSlider>
      <Link>
        <LinkRoundedIcon />
        레시피명 보러 가기
      </Link>

      <ProfillDiv>
        <StyleAvata></StyleAvata>
        <div>
          <div>닉네임</div>
          <div>n분전</div>
        </div>
      </ProfillDiv>
      <Content>
        숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어 내세요.
        내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
      </Content>
      <div>답글달기</div>

      <ProfillDiv>
        <StyleAvata></StyleAvata>
        <div>
          <div>닉네임</div>
          <div>n분전</div>
        </div>
      </ProfillDiv>
      <Content>
        숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어 내세요.
        내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
      </Content>
      <div>답글달기</div>
    </>
  );
}

const ShareText = styled.div`
  font-size: 14px;
  line-height: 140%;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
`;

const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const TextDiv = styled.div`
  font-size: 14px;
  line-height: 140%;
  margin-right: 0.5rem;
`;

const StyleAvata = styled.div`
  border-radius: 50%;
  background-color: gray;
  height: 2.25rem;
  width: 2.25rem;
  margin-right: 0.75rem;
`;

const ProfillDiv = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.125rem;
  display: flex;
`;

const Content = styled.div`
  height: 60px;

  font-size: 14px;
  line-height: 140%;

  letter-spacing: 0.25px;
`;

const TagSlider = styled.div`
  height: 28px;
  background-color: lightgray;

  margin-bottom: 1rem;
`;

const Link = styled.div`
  height: 48px;
  background-color: lightgray;
  margin-bottom: 3rem;
`;
export default DetailParty;
