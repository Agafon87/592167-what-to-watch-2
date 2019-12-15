const RatingNumber = {
  'THREE': 3,
  'FIVE': 5,
  'EIGHT': 8,
  'TEN': 10,
};

const MessageLength = {
  'MIN': 50,
  'MAX': 400,
};

const SecondsIn = {
  'MINUTE': 60,
  'HOUR': 3600,
};


const formatNumber = (number) => `${number < 10 ? 0 : ``}${number}`;


export const getRating = (num) => {
  if (num < RatingNumber.THREE) {
    return `Bad`;
  } else if (num >= RatingNumber.THREE && num < RatingNumber.FIVE) {
    return `Normal`;
  } else if (num >= RatingNumber.FIVE && num < RatingNumber.EIGHT) {
    return `Good`;
  } else if (num >= RatingNumber.EIGHT && num < RatingNumber.TEN) {
    return `Very good`;
  }
  return `Awesome`;
};

export const getNewDate = (dateString) => {
  return new Date(dateString);
};

export const changeButtonStatus = (review) => {
  return !(review.length >= MessageLength.MIN && review.length <= MessageLength.MAX);
};

export const parseTime = (seconds) => {
  const hours = Math.floor(seconds / SecondsIn.HOUR);
  seconds -= (hours * SecondsIn.HOUR);
  const minutes = Math.floor(seconds / SecondsIn.MINUTE);
  seconds -= (minutes * SecondsIn.MINUTE);

  return {
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
  };
};
