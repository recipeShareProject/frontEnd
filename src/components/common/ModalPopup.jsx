import React from 'react';
import styled from 'styled-components';

const Popup = ({content, closeEvent, yesEvent, isOn}) => {
  const [state, setState] = React.useState('괜찮아요');
  const _height = isOn ? '190px' : '142px';
  const yesText = isOn ? '완료' : '네';
  const noText = isOn ? '닫기' : '아니오';
  return (
    <>
      <Container onClick={() => closeEvent(false)}>
        <div>
          <Box height={_height}>
            <ContentWrapper>
              <Content>{content}</Content>
              {isOn && (
                <EvalWrapper>
                  <ButtonWrapper onClick={() => setState('별로에요')}>
                    {state === '별로에요' ? (
                      <>
                        <Icon src="imgs/bad_select.png"></Icon>
                        <IconContent color="#F17751">별로에요</IconContent>
                      </>
                    ) : (
                      <>
                        <Icon src="imgs/bad_select.png"></Icon>
                        <IconContent>별로에요</IconContent>
                      </>
                    )}
                  </ButtonWrapper>
                  <ButtonWrapper onClick={() => setState('괜찮아요')}>
                    {state === '괜찮아요' ? (
                      <>
                        <Icon src="imgs/soso_select.png"></Icon>
                        <IconContent color="#F17751">괜찮아요</IconContent>
                      </>
                    ) : (
                      <>
                        <Icon src="imgs/soso_unselect.png"></Icon>
                        <IconContent>괜찮아요</IconContent>
                      </>
                    )}
                  </ButtonWrapper>
                  <ButtonWrapper onClick={() => setState('추천해요')}>
                    {state === '추천해요' ? (
                      <>
                        <Icon src="imgs/best_select.png"></Icon>
                        <IconContent color="#F17751">추천해요</IconContent>
                      </>
                    ) : (
                      <>
                        <Icon src="imgs/best_unselect.png"></Icon>
                        <IconContent>추천해요</IconContent>
                      </>
                    )}
                  </ButtonWrapper>
                </EvalWrapper>
              )}
            </ContentWrapper>
          </Box>
          <StyleFlex>
            <Button side="left" bgcolor="#FAF7F6">
              {noText}
            </Button>
            <Button
              onClick={yesEvent}
              side="right"
              bgcolor="#F17751"
              color="#F6F2F0">
              {yesText}
            </Button>
          </StyleFlex>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  height: ${(props) => props.height};
  width: 328px;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px 8px 0 0;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled.p`
  /* word-wrap: break-word; */
  font-size: 14px;
  line-height: 150%;
  word-break: keep-all;
  padding: 0;
  margin: 0;
`;
const EvalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 24px;
  margin-right: 20px;
`;
const Icon = styled.img``;
const IconContent = styled.div`
  color: ${(props) => (props.color ? props.color : '#D1D0CF')};
  font-size: 12px;
`;
const StyleFlex = styled.div`
  display: flex;
`;
const Button = styled.div`
  width: 100%;
  height: 48px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${(props) =>
    props.side === 'left' ? '0 0 0 8px' : '0 0 8px 0'};
`;

export default Popup;
