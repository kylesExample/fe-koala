import moment from 'moment';

export function timeDifferenceInSeconds(start, end) {
  start = new Date(start);
  end = new Date(end);
  return end.diff(start, 'seconds');
}

export function endTimeInUnits(endTime) {
  if (!endTime || moment(endTime).isValid()) {
    return getTimeInUnits(0);
  }

  let seconds = moment(endTime).diff(moment(), 'seconds');

  if (!seconds || seconds < 0) {
    return getTimeInUnits(0);
  }

  return getTimeInUnits(seconds);
}

export function getTimeInUnits(total) {
  total = total && total > 0 ? total : 0;
  return {
    days: getDaysFromTime(total),
    hours: getHoursFromTime(total),
    minutes: getMinutesFromTime(total),
    seconds: getSecondsFromTime(total),
  };
}

export function getDaysFromTime(total) {
  return (total - (total % 86400)) / 86400;
}

export function getHoursFromTime(total) {
  let daysLeft = getDaysFromTime(total);
  total = total - daysLeft * 86400;
  return (total - (total % 3600)) / 3600;
}

export function getMinutesFromTime(total) {
  let daysLeft = getDaysFromTime(total);
  total = total - daysLeft * 86400;
  let hoursLeft = getHoursFromTime(total);
  total = total - hoursLeft * 3600;
  return (total - (total % 60)) / 60;
}

export function getSecondsFromTime(total) {
  return total % 60;
}

export function dateFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const targetDate = params.get('target_date') || '';

  return targetDate && moment(targetDate).isValid() ? moment(targetDate).format('yyyy-MM-DDTHH:mm:ss') : null;
}

export function setQuery(params) {
  const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + params;
  return newurl;
}
