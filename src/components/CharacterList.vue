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
  <div class="container my-5">
    <div class="row gy-4">
      <div
        class="col-12 col-md-3 col-sm-6"
        v-for="character in store.characters"
      >
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
