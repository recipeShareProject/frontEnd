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
