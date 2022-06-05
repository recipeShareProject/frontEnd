import React from 'react';

import TabletWrapper from 'tablet-ui/atoms/TabletWrapper';
import Header from 'tablet-ui/templates/header/TabletHeaderBar';
import ChangeInfo from 'tablet-ui/templates/ChangeInfo';
const MyInfoTemplate = () => {
  return (
    <TabletWrapper>
      <Header />
      <ChangeInfo title="나의 정보" btnText="변경하기" />
    </TabletWrapper>
  );
};

export default MyInfoTemplate;
