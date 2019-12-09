import {createSelector} from "reselect";

export const getFilms = (state) => state[`DATA`].films;
export const getGenre = (state) => state[`DATA`].genre;
export const getFilmPromo = (state) => state[`DATA`].filmPromo;
export const getComments = (state) => state[`DATA`].comments;
export const getFavoriteFilms = (state) => state[`DATA`].favoriteFilms;

export const getFilmsLikeGenre = createSelector(getFilms, getGenre, (films, genre) => {
  const filmsLikeGenre = films.filter((elem) => elem.genre === genre);
  const isAllGenres = genre.toLowerCase() === `all genres`;
  return (isAllGenres) ? films : filmsLikeGenre;
});

export const getFilmsGenres = createSelector(getFilms, (films) => {
  const tempSet = new Set(films.map((it) => it.genre));
  const tempList = [...tempSet];
  return tempList;
});

export const getSortComments = createSelector(getComments, (comments) => {
  let tempComments = comments;
  // window.console.log(tempComments);
  if (comments.length > 0) {
    tempComments = comments.splice(0).sort((a, b) => {
      return a.rating > b.rating;
    });
  }

  window.console.log(tempComments);
  return tempComments;
});
