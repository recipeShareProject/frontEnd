import React from 'react';
import styled from 'styled-components';
function Header() {
  return (
    <StyleHeader>
      <StyleLogo></StyleLogo>
      <StyleDiv>
        <StyleAlert>
          <svg
            width="17"
            height="21"
            viewBox="0 0 17 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.59388 20.3182C9.69347 20.2883 10.5687 19.3641 10.5387 18.2645L6.54022 18.3733C6.57014 19.4729 7.48429 20.3484 8.59388 20.3182ZM14.4285 14.1572L14.2925 9.15907C14.209 6.09021 12.4997 3.56576 9.62227 2.96379L9.60378 2.28404C9.58121 1.45435 8.89323 0.802821 8.06354 0.825395C7.23385 0.847968 6.58232 1.53594 6.60489 2.36563L6.62338 3.04538C3.77294 3.80319 2.21316 6.40657 2.29693 9.48543L2.43291 14.4836L0.488048 16.5372L0.515245 17.5369L16.5093 17.1017L16.4821 16.1021L14.4285 14.1572Z"
              fill="black"
            />
          </svg>
        </StyleAlert>
        <StyleAvata></StyleAvata>
      </StyleDiv>
      {/* <StyleBtn>로그인</StyleBtn> */}
    </StyleHeader>
  );
}
const StyleBtn = styled.div`
  height: 1rem;
  line-height: 1rem;

  cursor: pointer;
`;

const StyleHeader = styled.div`
  border: 1px solid green;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyleLogo = styled.div`
  background-color: gray;
  height: 2rem;
  width: 6rem;
  cursor: pointer;
`;
const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
const StyleAlert = styled.div`
  background-color: gray;
  height: 2rem;
  width: 2rem;
  margin-right: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleAvata = styled.div`
  border-radius: 50%;
  background-color: gray;
  height: 1.5rem;
  width: 1.5rem;
`;

export default Header;
