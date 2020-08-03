import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível acessar o servidor 😭');
    });
}

function getCategories() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível acessar o servidor 😭');
    });
}

export default {
  getVideos,
  getCategories,
};

// setCategorias([
//   ...data,
// ]);
// console.log('Loading Complete : ', data);
