<script>
import { store } from '../store';
export default {
  name: 'CharacterFound',
  data() {
    return {
      store: store, //=> { key: value, key: value},
      prova: true,
    };
  },
};
</script>
<template>
  <footer>Trovati {{ store.characters.length }} personaggi</footer>
</template>
