import { reactive } from 'vue';

export const store = reactive({
  searchText: '',
  loading: true,
  characters: [],
  apiRickAndMorty: {
    defaultURL: 'https://rickandmortyapi.com/api/',
    characters: 'character',
    locations: 'location',
    episodes: 'episode',
  },
});
