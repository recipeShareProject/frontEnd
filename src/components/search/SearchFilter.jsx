import {Black10, Black20, Colar100} from 'assets/colorSet';
import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router';
import styled from 'styled-components';

const SearchFilter = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState();
  const [toggleValue, setToggleValue] = useState('인기순');

  const moveToSetFilterPage = () => {
    navigate('/search/filter');
  };

  const onOpenFilterMenu = () => {
    setOpen(!open);
  };

  const selectFilterValue = (value) => {
    setToggleValue(value);
    setOpen(false);
  };

  return (
    <>
      <ButtonGroup>
        <Button onClick={() => moveToSetFilterPage()}>필터</Button>
        <Button onClick={() => onOpenFilterMenu()} color>
          {toggleValue}
        </Button>
        {open && (
          <ToggleMenu>
            <p onClick={() => selectFilterValue('인기순')}>인기순</p>
            <p onClick={() => selectFilterValue('매칭률순')}>매칭률순</p>
            <p onClick={() => selectFilterValue('조리시간 빠른 순')}>
              조리시간 빠른 순
            </p>
          </ToggleMenu>
        )}
      </ButtonGroup>
    </>
  );
};

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0px;
  position: relative;
`;

const Button = styled.button`
  border: none;
  background: none;
  width: 100%;
  padding: 10px;
  font-weight: 500;
  color: ${(props) => (props.color ? Colar100 : '')};
`;

const ToggleMenu = styled.div`
  background: white;
  position: absolute;
  z-index: 100;
  top: 50px;
  right: 0;
  width: 50%;
  border: 1px solid ${Black10};
  border-radius: 4px;
  font-size: 14px;
  color: ${Black20};
  p {
    text-align: center;
  }
`;

export default SearchFilter;
