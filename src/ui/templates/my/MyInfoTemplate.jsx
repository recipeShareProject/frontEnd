import React from 'react';
import HeaderBar from 'ui/templates/header/HeaderBar';
import ChangeInfo from 'ui/templates/ChangeInfo';
const MyInfoTemplate = () => {
  return (
    <React.Fragment>
      <HeaderBar />
      <ChangeInfo title="나의 정보" btnText="변경하기" />
    </React.Fragment>
  );
};

export default MyInfoTemplate;
