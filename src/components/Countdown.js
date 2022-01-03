import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { StyledCountdown, ResetButton, TweetButton } from './styles';
import { dateFromQuery, setQuery } from '../utils';
import CounterClock from './CounterClock';
import DateTimePicker from './DateTimePicker';
import TimeUnitForm from './TimeUnitForm';
import DateMessage from './DateMessage';

export const Countdown = () => {
  const [endTime, setEndTime] = useState(dateFromQuery() || localStorage.getItem('endTime') || null);
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [timeIsUp, setTimeIsUp] = useState(false);

  useEffect(() => {
    let counterInterval;

    if (endTime) {
      localStorage.setItem('endTime', endTime);
      // setQuery(`?target_date=${endTime}`);
      let endTimeMoment = moment(endTime);
      let seconds = endTimeMoment.diff(moment(), 'seconds');
      setSecondsRemaining(seconds);
      counterInterval = setInterval(() => {
        seconds = endTimeMoment.diff(moment(), 'seconds');
        if (!seconds || seconds < 0) {
          seconds = 0;
          setTimeIsUp(true);
          clearInterval(counterInterval);
        }

        setSecondsRemaining(seconds);
      }, 50);
    }

    setTimeIsUp(false);
    return () => clearInterval(counterInterval);
  }, [endTime]);

  function resetCountdownClock() {
    setEndTime(null);
    localStorage.setItem('endTime', '');
    setSecondsRemaining(0);
    setTimeIsUp(false);
  }

  function shareToTwitter() {
    let urlWithQuery = setQuery(`?target_date=${endTime}`);
    let twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(urlWithQuery)}`;
    window.open(twitterUrl, '_blank');
  }

  return (
    <StyledCountdown>
      <h4>Set Timer Duration</h4>
      <TimeUnitForm endTime={endTime} setEndTime={setEndTime} />
      <h4>Set Countdown by Date/Time</h4>
      <DateTimePicker endTime={endTime} setEndTime={setEndTime} />
      <DateMessage endTime={endTime} timeIsUp={timeIsUp} />
      <CounterClock seconds={secondsRemaining} timeIsUp={timeIsUp} />
      <ResetButton onClick={resetCountdownClock}>Reset Countdown</ResetButton>
      <TweetButton onClick={shareToTwitter}>Share On Twitter</TweetButton>
    </StyledCountdown>
  );
};
