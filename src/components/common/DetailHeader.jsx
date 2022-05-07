import React from 'react';
import styled from 'styled-components';
function Header() {
  return (
    <StyleHeader>
      <StyleBack>
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
            fill="black"
          />
        </svg>
      </StyleBack>
      {/* <StyleBtn>
        <svg
          width="4"
          height="16"
          viewBox="0 0 4 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
            fill="black"
          />
        </svg>
      </StyleBtn> */}
      {/* <StyleDiv>
        <StyleBtn>
          <svg
            width="20"
            height="11"
            viewBox="0 0 20 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.9 5.78599C1.9 4.04239 3.29 2.62508 5 2.62508H9V0.687744H5C2.24 0.687744 0 2.97176 0 5.78599C0 8.60023 2.24 10.8842 5 10.8842H9V8.94691H5C3.29 8.94691 1.9 7.52959 1.9 5.78599ZM6 6.80564H14V4.76634H6V6.80564ZM15 0.687744H11V2.62508H15C16.71 2.62508 18.1 4.04239 18.1 5.78599C18.1 7.52959 16.71 8.94691 15 8.94691H11V10.8842H15C17.76 10.8842 20 8.60023 20 5.78599C20 2.97176 17.76 0.687744 15 0.687744Z"
              fill="black"
            />
          </svg>
        </StyleBtn>
        <StyleBtn>
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
        </StyleBtn>
      </StyleDiv> */}
    </StyleHeader>
  );
}

const StyleHeader = styled.div`
  border: 1px solid green;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleBack = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  line-height: 1rem;

  text-align: center;
  cursor: pointer;
`;

const StyleBtn = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  line-height: 1rem;

  text-align: center;
  cursor: pointer;
`;

const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  div:first-child {
    padding-right: 0.5rem;
  }
`;
export default Header;
