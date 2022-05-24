import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import styled from 'styled-components';
import {Black20} from 'assets/colorSet';

const CustomDatePicker = ({_onChange}) => {
  const now = dayjs();
  const maxDay = now.add(5, 'day').$d;
  const startDay = now.add(1, 'day').$d;
  const [selectDate, setSelectDate] = React.useState(startDay);
  const ExampleCustomInput = React.forwardRef(({value, onClick}, ref) => (
    <div style={{textAlign: 'center'}} onClick={onClick} ref={ref}>
      {value}
    </div>
  ));

  return (
    <PickerWrapper>
      <DatePicker
        dateFormat="yy / MM / dd"
        minDate={new Date()}
        maxDate={maxDay}
        selected={selectDate}
        onChange={(date) => {
          setSelectDate(date);
          _onChange(date);
        }}
        customInput={<ExampleCustomInput />}
      />
    </PickerWrapper>
  );
};

const PickerWrapper = styled.div`
  width: 160px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid ${Black20};
  margin-right: 0.5rem;
`;
export default CustomDatePicker;
