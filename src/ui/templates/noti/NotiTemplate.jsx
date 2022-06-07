import React from 'react';

import HeaderBar from 'ui/templates/header/HeaderBar';
import Wrapper from 'ui/atoms/Wrapper';
import Divider from 'ui/atoms/Divider';
import NotiProfile from 'ui/organisms/NotiProfile';
import Typography from 'ui/atoms/Typography';
import NotFound from 'ui/templates/NotFound';
const NotiTemplate = () => {
  return (
    <React.Fragment>
      <HeaderBar />
      <Wrapper padding="72px 0 0 0">
        <Wrapper padding="0 1rem">
          <Typography margin="1rem 0 0 0" fontSize="20px" fontWeight="700">
            알림
          </Typography>
          <Wrapper display="flex" justify="flex-end">
            <Typography margin=" 0 0 1rem 0" fontSize="14px" fontWeight="500">
              비우기
            </Typography>
          </Wrapper>
        </Wrapper>
        <Divider />
        <Wrapper padding="0 1rem">
          <NotiProfile />
          {/*todo:서버개발  <NotFound desc="새로운 알림이 없어요" /> */}
        </Wrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default NotiTemplate;
