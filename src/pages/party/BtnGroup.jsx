import React, {useState} from 'react';
import styled from 'styled-components';
function BtnGroup({buttons}) {
  const [clickedId, setClickedId] = useState(-1);
  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <Button
          key={i}
          name={buttonLabel}
          onClick={() => setClickedId(i)}
          active={i === clickedId}>
          {buttonLabel}
        </Button>
      ))}
    </>
  );
}

const Button = styled.div`
  width: 150px;
  height: 50px;
  letter-spacing: 0.5px;
  background-color: #e0314b;
  color: white;
  font-size: 32px;
  border: 1.5px solid #e0314b;
  border-radius: 5px;
  cursor: pointer;
  ${(props) =>
    props.active
      ? 'background-color: rgb(25, 26, 24); border: 1.5px solid rgb(25, 26, 24);'
      : ''}
`;

export default BtnGroup;
