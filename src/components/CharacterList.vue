<script>
import CharacterCard from './CharacterCard.vue';

export default {
  name: 'CharacterList',
  components: {
    CharacterCard,
  },
  props: ['characters'],
};
</script>
<template>
  <div class="container">
    <div class="characters-list d-flex flex-wrap">
      <CharacterCard
        v-for="character in characters"
        :name="character.name"
        :status="character.status"
        :genre="character.species"
        :img="character.image"
      />
    </div>
  </div>
</template>
<style></style>
