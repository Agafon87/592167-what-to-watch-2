import PropTypes from "prop-types";

const PropType = {
  film: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    released: PropTypes.number,
    genre: PropTypes.string,
    previewVideoLink: PropTypes.string,
    previewImage: PropTypes.string,
    videoLink: PropTypes.string,
    runTime: PropTypes.number,
    isFavorite: PropTypes.bool,
  }),
  userData: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
  }),
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
};

export default PropType;
