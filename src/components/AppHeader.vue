<script>
import CharacterFound from './CharacterFound.vue';

export default {
  name: 'AppHeader',
  components: {
    CharacterFound,
  },
};
</script>
<template>
  <header>
    <div class="container my-5">
      <h1 class="text-center">Rick and Morty App</h1>
      <CharacterFound />
    </div>
  </header>
</template>
<style></style>
