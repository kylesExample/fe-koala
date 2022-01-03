import React, { useState, useEffect } from 'react';
import { FlexRow, ClockContainer } from './styles';
import { getTimeInUnits } from '../utils';

const CounterClock = ({ seconds, timeIsUp }) => {
  const [timeInUnits, setTimeUnits] = useState(getTimeInUnits(seconds || 0));

  useEffect(() => {
    setTimeUnits(getTimeInUnits(seconds));
  }, [seconds]);

  return (
    <ClockContainer timeIsUp={timeIsUp}>
      <FlexRow fontSize="14px" margin="40px auto 0px auto">
        <div>days</div>
        <div>&nbsp;</div>
        <div>hours</div>
        <div>&nbsp;</div>
        <div>minutes</div>
        <div>&nbsp;</div>
        <div>seconds</div>
      </FlexRow>
      <FlexRow fontSize="76px" margin="10px auto">
        <div>{timeInUnits.days}</div>
        <div>:</div>
        <div>{String(timeInUnits.hours).padStart(2, '0')}</div>
        <div>:</div>
        <div>{String(timeInUnits.minutes).padStart(2, '0')}</div>
        <div>:</div>
        <div>{String(timeInUnits.seconds).padStart(2, '0')}</div>
      </FlexRow>
    </ClockContainer>
  );
};

export default CounterClock;
