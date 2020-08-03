const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:3333'
  : 'https://cursosflix.herokuapp.com';

export default {
  URL_BACKEND,
};
