import React from 'react';
import TabletWrapper from 'tablet-ui/atoms/TabletWrapper';
import Header from 'tablet-ui/templates/header/TabletHeader';
import ChangeInfo from 'tablet-ui/templates/ChangeInfo';
const ProfileTabletTemplate = () => {
  return (
    <TabletWrapper>
      <Header />
      <ChangeInfo title="프로필 설정하기" btnText="가입하기" />
    </TabletWrapper>
  );
};

export default ProfileTabletTemplate;
