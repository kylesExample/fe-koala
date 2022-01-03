import React, { useEffect, useRef } from 'react';
import moment from 'moment';
import { Form } from './styles';

const DateTimePicker = ({ endTime, setEndTime }) => {
  const dateTimeInput = useRef();

  function handleDateInput(e) {
    e.preventDefault();
    const date = moment(e.target.datetime.value);
    const newEndTime = date.format('yyyy-MM-DDTHH:mm:ss');
    setEndTime(newEndTime);
  }

  useEffect(() => {
    dateTimeInput.current.value = endTime || moment().format('yyyy-MM-DDTHH:mm:ss');
  }, [endTime]);

  return (
    <Form onSubmit={handleDateInput}>
      <input type="datetime-local" name="datetime" ref={dateTimeInput} step="1"></input>
      <button type="submit" name="setTimer">
        Set Timer by Date/Time
      </button>
    </Form>
  );
};

export default DateTimePicker;
