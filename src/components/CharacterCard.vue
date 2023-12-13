<script>
export default {
  name: 'CharacterCard',
  props: ['name', 'status', 'genre', 'img'],
};
</script>
<template>
  <article class="text-center">
    <img :src="img" :alt="name" class="img-fluid rounded-circle shadow" />
    <h3 class="my-3">{{ name }}</h3>
    <h5>{{ status }}</h5>
    <h5>{{ genre }}</h5>
  </article>
</template>
<style></style>
