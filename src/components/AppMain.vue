<script>
import axios from 'axios';
import AppSearch from './AppSearch.vue';
import CharacterList from './CharacterList.vue';
import CharacterFound from './CharacterFound.vue';
export default {
  name: 'AppMain',
  components: {
    AppSearch,
    CharacterList,
    CharacterFound,
  },
  data() {
    return {
      characters: [],
      apiURL: 'https://rickandmortyapi.com/api/character',
    };
  },
  created() {
    axios.get(this.apiURL).then((response) => {
      this.characters = response.data.results;
    });
  },
};
</script>
<template>
  <AppSearch />
  <CharacterList :characters="characters" />
  <CharacterFound :found="characters.length" />
</template>
<style></style>
