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
  created() {
    axios
      .get(
        this.store.apiRickAndMorty.defaultURL +
          this.store.apiRickAndMorty.characters
      )
      .then((response) => {
        this.store.characters = response.data.results;
      });
  },
};
</script>
<template>
  <AppSearch />
  <CharacterList :characters="store.characters" />
</template>
<style></style>
