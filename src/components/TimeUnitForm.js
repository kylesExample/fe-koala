import React, { useState } from 'react';
import moment from 'moment';
import { Form } from './styles';
import { endTimeInUnits, getTimeInUnits } from '../utils';

const TimeUnitForm = ({ endTime, setEndTime }) => {
  const [timeInUnits, setTimeUnits] = useState(endTimeInUnits(endTime));

  function handleTimeForm(e) {
    e.preventDefault();

    const daysInSeconds = (parseInt(e.target.days.value, 0) || 0) * 86400;
    const hoursInSeconds = (parseInt(e.target.hours.value, 0) || 0) * 3600;
    const minutesInSeconds = (parseInt(e.target.minutes.value, 0) || 0) * 60;
    const seconds = parseInt(e.target.seconds.value, 0) || 0;
    const totalSeconds = daysInSeconds + hoursInSeconds + minutesInSeconds + seconds;
    setTimeUnits(getTimeInUnits(totalSeconds));

    const newEndTime = moment().add(totalSeconds, 'seconds').format('yyyy-MM-DDTHH:mm:ss');
    setEndTime(newEndTime);
  }

  function setUnitOfTime(e) {
    let value = e.target.value;

    let unitName = e.target.name;

    let updatedTimeInUnits = { ...timeInUnits };
    updatedTimeInUnits[unitName] = parseInt(value, 10);

    setTimeUnits(updatedTimeInUnits);
  }

  return (
    <Form onSubmit={handleTimeForm} fontSize="18px">
      <label>Days</label>
      <input
        type="number"
        name="days"
        placeholder="0"
        min="0"
        value={timeInUnits.days || 0}
        onChange={setUnitOfTime}
      ></input>

      <label>Hours</label>
      <input
        type="number"
        name="hours"
        placeholder="0"
        min="0"
        value={timeInUnits.hours || 0}
        onChange={setUnitOfTime}
      ></input>

      <label>Minutes</label>
      <input
        type="number"
        name="minutes"
        placeholder="0"
        min="0"
        value={timeInUnits.minutes || 0}
        onChange={setUnitOfTime}
      ></input>

      <label>Seconds</label>
      <input
        type="number"
        name="seconds"
        placeholder="0"
        min="0"
        value={timeInUnits.seconds || 0}
        onChange={setUnitOfTime}
      ></input>
      <br />
      <button type="submit" name="setTimer">
        Set Timer With Units
      </button>
    </Form>
  );
};

export default TimeUnitForm;
