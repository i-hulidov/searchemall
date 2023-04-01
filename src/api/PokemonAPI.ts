import { api } from './config/axiosConfig';

export const PokemonAPI = {
  getAll: async function () {
    const response = await api.request({
      url: '/pokemon',
      method: 'GET',
      params: {
        limit: 2000,
      },
    });

    return response.data.results;
  },

  getPokemonDetails: async function (pokemonName: string) {
    const response = await api.request({
      url: `/pokemon/${pokemonName}`,
      method: 'GET',
    });

    return response.data;
  },
};
