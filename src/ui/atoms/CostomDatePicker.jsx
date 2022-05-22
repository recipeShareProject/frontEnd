import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

const CostomDatePicker = ({_ref}) => {
  const now = dayjs();
  const maxDay = now.add(5, 'day').$d;
  const startDay = now.add(1, 'day').$d;
  const [startDate, setStartDate] = React.useState(new Date());
  const ExampleCustomInput = React.forwardRef(({value, onClick}, ref) => (
    <div style={{textAlign: 'center'}} onClick={onClick} ref={ref}>
      {value}
    </div>
  ));
  return (
    <DatePicker
      dateFormat="yy / MM / dd"
      minDate={new Date()}
      maxDate={maxDay}
      selected={startDate}
      onChange={(date) => setStartDate(startDay)}
      ref={_ref}
      customInput={<ExampleCustomInput />}
    />
  );
};
export default CostomDatePicker;
