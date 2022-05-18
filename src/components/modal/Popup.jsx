import React from 'react';
import styled from 'styled-components';
function Popup() {
  return (
    <>
      <Container>
        <Box>
          <Content>레시피를 등록하시겠어요?</Content>
        </Box>
        <FlexDiv>
          <Button>아니오</Button>
          <Button>예</Button>
        </FlexDiv>
      </Container>
    </>
  );
}

const Container = styled.div``;
const Box = styled.div``;
const Content = styled.div``;
const FlexDiv = styled.div``;
const Button = styled.div``;

export default Popup;
