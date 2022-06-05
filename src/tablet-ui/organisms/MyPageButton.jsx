import React from 'react';
import MyButton from 'tablet-ui/atoms/MyButton';

const MyPageButton = ({src, alt, content, _onClick}) => {
  return (
    <MyButton _onClick={_onClick}>
      <img src={src} alt={alt} />
      <p>{content}</p>
    </MyButton>
  );
};

export default MyPageButton;
