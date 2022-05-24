import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import {Black20} from 'assets/colorSet';
const CustomDatePicker = ({_onChange}) => {
  const [selectDate, setSelectDate] = React.useState(new Date());
  //   const ExampleCustomInput = React.forwardRef(({value, onClick}, ref) => (
  //     <div style={{textAlign: 'center'}} onClick={onClick} ref={ref}>
  //       {value}
  //     </div>
  //   ));
  return (
    <PickerWrapper>
      <TimePicker
        selected={selectDate}
        onChange={(date) => {
          setSelectDate(date);
          _onChange(date);
        }}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="시간"
        dateFormat="h:mm aa"
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
`;
const TimePicker = styled(DatePicker)`
  width: 160px;
  text-align: center;
  border: none;
  outline: none;
`;
export default CustomDatePicker;
