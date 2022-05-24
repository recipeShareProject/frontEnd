import React from 'react';
import MyInfo from 'ui/templates/ChangeInfo';

const ProfileTemplate = (props) => {
  return (
    <React.Fragment>
      <MyInfo title="프로필 설정하기" btnText="가입하기" />
    </React.Fragment>
  );
};

export default ProfileTemplate;
