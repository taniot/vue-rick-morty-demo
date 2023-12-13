<script>
import { store } from '../store';
import CharacterCard from './CharacterCard.vue';

export default {
  name: 'CharacterList',
  components: {
    CharacterCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="characters-list row">
      <div class="col col-md-3" v-for="character in store.characters">
        <CharacterCard
          :name="character.name"
          :status="character.status"
          :genre="character.species"
          :img="character.image"
        />
      </div>
    </div>
  </div>
</template>
<style></style>
