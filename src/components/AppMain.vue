<script>
import AppSearch from './AppSearch.vue';
import CharacterList from './CharacterList.vue';
export default {
  name: 'AppMain',
  components: {
    AppSearch,
    CharacterList,
  },
};
</script>
<template>
  <AppSearch />
  <CharacterList />
</template>
<style></style>
