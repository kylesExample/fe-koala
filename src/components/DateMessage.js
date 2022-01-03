import React from 'react';
import moment from 'moment';

const DateMessage = ({ endTime, timeIsUp }) => {
  if (!timeIsUp && endTime) {
    return <h2>Counting Down to {moment(endTime).format('MMMM Do YYYY, h:mm:ssa')}</h2>;
  }

  if (timeIsUp && endTime) {
    return <h2>{moment(endTime).format('MMMM Do YYYY, h:mm:ssa')} has passed</h2>;
  }

  return <h2>Set Timer</h2>;
};

export default DateMessage;
