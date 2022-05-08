import React from 'react';
import styled from 'styled-components';
function Navigation() {
  return (
    <StyleNavi>
      <StyleWrapper>
        <StyleIcon>
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0L0 6V18H5V11H11V18H16V6L8 0Z" fill="black" />
          </svg>
        </StyleIcon>
        <StyleText>홈</StyleText>
      </StyleWrapper>
      <StyleWrapper>
        <StyleIcon>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.06 21.99H18.72C19.56 21.99 20.25 21.35 20.35 20.53L22 4.05H17V0H15.03V4.05H10.06L10.36 6.39C12.07 6.86 13.67 7.71 14.63 8.65C16.07 10.07 17.06 11.54 17.06 13.94V21.99ZM0 20.99V20H15.03V20.99C15.03 21.54 14.58 21.99 14.02 21.99H1.01C0.45 21.99 0 21.54 0 20.99ZM15.03 13.99C15.03 5.99 0 5.99 0 13.99H15.03ZM0.02 16H15.02V18H0.02V16Z"
              fill="black"
            />
          </svg>
        </StyleIcon>
        <StyleText>레시피</StyleText>
      </StyleWrapper>
      <StyleWrapper>
        <StyleIcon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.99 2C19.99 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H16L20 20L19.99 2Z"
              fill="black"
            />
          </svg>
        </StyleIcon>
        <StyleText>파티</StyleText>
      </StyleWrapper>
      <StyleWrapper>
        <StyleIcon>
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18L7 15L14 18V2C14 0.9 13.1 0 12 0Z"
              fill="black"
            />
          </svg>
        </StyleIcon>
        <StyleText>북마크</StyleText>
      </StyleWrapper>
    </StyleNavi>
  );
}

const StyleNavi = styled.div`
  width: 100%;
  border: 1px solid green;
  height: 60px;
  background-color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;
`;

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;
const StyleIcon = styled.div`
  border: 1px solid orange;
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.5rem;
`;

const StyleText = styled.div`
  line-height: 1rem;
  text-align: center;
  width: 3rem;
`;
export default Navigation;
