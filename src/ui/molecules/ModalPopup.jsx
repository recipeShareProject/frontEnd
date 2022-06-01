import React from 'react';
import styled from 'styled-components';
import {Colar100, Beige60} from 'assets/colorSet';

import BadSelectIcon from 'common/icons/BadSelectIcon';
import BadUnselectIcon from 'common/icons/BadUnselectIcon';
import SosoSelectIcon from 'common/icons/SosoSelectIcon';
import SosoUnselectIcon from 'common/icons/SosoUnselectIcon';
import BestSelectIcon from 'common/icons/BestSelectIcon';
import BestUnselectIcon from 'common/icons/BestUnselectIcon';
const Popup = ({content, closeEvent, yesEvent, isOn}) => {
  const [state, setState] = React.useState('괜찮아요');
  const _height = isOn ? '190px' : '142px';
  const yesText = isOn ? '완료' : '네';
  const noText = isOn ? '닫기' : '아니오';
  return (
    <React.Fragment>
      <Container onClick={() => closeEvent(false)}>
        <div>
          <Box height={_height}>
            <ContentWrapper>
              {content.split('\n').map((txt, idx) => (
                <Content key={idx}>{txt}</Content>
              ))}
              {isOn && (
                <EvalWrapper>
                  <IconWrapper onClick={() => setState('별로에요')}>
                    {state === '별로에요' ? (
                      <React.Fragment>
                        <BadSelectIcon />
                        <IconContent color={Colar100}>별로에요</IconContent>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <BadUnselectIcon />
                        <IconContent>별로에요</IconContent>
                      </React.Fragment>
                    )}
                  </IconWrapper>
                  <IconWrapper onClick={() => setState('괜찮아요')}>
                    {state === '괜찮아요' ? (
                      <React.Fragment>
                        <SosoSelectIcon />
                        <IconContent color={Colar100}>괜찮아요</IconContent>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <SosoUnselectIcon />
                        <IconContent>괜찮아요</IconContent>
                      </React.Fragment>
                    )}
                  </IconWrapper>
                  <IconWrapper onClick={() => setState('추천해요')}>
                    {state === '추천해요' ? (
                      <>
                        <BestSelectIcon />
                        <IconContent color={Colar100}>추천해요</IconContent>
                      </>
                    ) : (
                      <>
                        <BestUnselectIcon />
                        <IconContent>추천해요</IconContent>
                      </>
                    )}
                  </IconWrapper>
                </EvalWrapper>
              )}
            </ContentWrapper>
          </Box>
          <StyleFlex>
            <Button side="left" bgcolor={Beige60}>
              {noText}
            </Button>
            <Button
              onClick={yesEvent}
              side="right"
              bgcolor={Colar100}
              color={Beige60}>
              {yesText}
            </Button>
          </StyleFlex>
        </div>
      </Container>
    </React.Fragment>
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
const IconWrapper = styled.div`
  margin-top: 24px;
  margin-right: 20px;
`;
const IconContent = styled.p`
  color: ${(props) => (props.color ? props.color : '#D1D0CF')};
  font-size: 12px;
  margin: 0;
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
