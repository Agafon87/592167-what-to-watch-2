import {createSelector} from "reselect";

export const getFilms = (state) => state[`DATA`].films;
export const getGenre = (state) => state[`DATA`].genre;
export const getFilmPromo = (state) => state[`DATA`].filmPromo;

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
