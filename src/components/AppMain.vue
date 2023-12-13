<script>
import axios from 'axios';
import AppSearch from './AppSearch.vue';
import CharacterList from './CharacterList.vue';

import { store } from '../store';
export default {
  name: 'AppMain',
  components: {
    AppSearch,
    CharacterList,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
      axios
        .get(
          this.store.apiRickAndMorty.defaultURL +
            this.store.apiRickAndMorty.characters,
          {
            params: {
              name: this.store.searchKey,
              status: this.store.searchStatus,
            },
          }
        )
        .then((response) => {
          this.store.characters = response.data.results;
        });
    },
  },
  created() {
    this.search();
  },
};
</script>
<template>
  <AppSearch @pippo="search" />
  <CharacterList />
</template>
<style></style>
