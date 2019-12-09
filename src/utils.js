const RATING_NUMBERS = {
  'THREE': 3,
  'FIVE': 5,
  'EIGHT': 8,
  'TEN': 10,
};

const SECONDS_IN_MINUTE = 60;
// const MINUTES_IN_HOUR = 60;
const SECONDS_IN_HOUR = 3600;

const formatNumber = (number) => `${number < 10 ? 0 : ``}${number}`;


export const getRating = (num) => {
  if (num < RATING_NUMBERS.THREE) {
    return `Bad`;
  } else if (num >= RATING_NUMBERS.THREE && num < RATING_NUMBERS.FIVE) {
    return `Normal`;
  } else if (num >= RATING_NUMBERS.FIVE && num < RATING_NUMBERS.EIGHT) {
    return `Good`;
  } else if (num >= RATING_NUMBERS.EIGHT && num < RATING_NUMBERS.TEN) {
    return `Very good`;
  }
  return `Awesome`;
};

export const getNewDate = (dateString) => {
  return new Date(dateString);
};

export const changeButtonStatus = (review) => {
  if (review.length >= 50 && review.length <= 400) {
    return false;
  }
  return true;
};

export const parseTime = (seconds) => {
  const hours = Math.floor(seconds / SECONDS_IN_HOUR);
  seconds -= (hours * SECONDS_IN_HOUR);
  const minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
  seconds -= (minutes * SECONDS_IN_MINUTE);

  return {
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
  };
};
