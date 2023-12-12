<script>
import CharacterCard from './CharacterCard.vue';
export default {
  name: 'CharacterList',
  components: {
    CharacterCard,
  },
  data() {
    return {
      characters: [],
    };
  },
};
</script>
<template>
  <CharacterCard v-for="character in characters" />
</template>
<style></style>
