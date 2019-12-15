const RatingNumbers = {
  'THREE': 3,
  'FIVE': 5,
  'EIGHT': 8,
  'TEN': 10,
};

const MIN_MESSAGE_LENGTH = 50;
const MAX_MESSAGE_LENGTH = 400;

const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 3600;

const formatNumber = (number) => `${number < 10 ? 0 : ``}${number}`;


export const getRating = (num) => {
  if (num < RatingNumbers.THREE) {
    return `Bad`;
  } else if (num >= RatingNumbers.THREE && num < RatingNumbers.FIVE) {
    return `Normal`;
  } else if (num >= RatingNumbers.FIVE && num < RatingNumbers.EIGHT) {
    return `Good`;
  } else if (num >= RatingNumbers.EIGHT && num < RatingNumbers.TEN) {
    return `Very good`;
  }
  return `Awesome`;
};

export const getNewDate = (dateString) => {
  return new Date(dateString);
};

export const changeButtonStatus = (review) => {
  if (review.length >= MIN_MESSAGE_LENGTH && review.length <= MAX_MESSAGE_LENGTH) {
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
