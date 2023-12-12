<script>
export default {
  name: 'CharacterCard',
  props: ['name', 'status', 'genre', 'img'],
};
</script>
<template>
  <div>
    <div>
      <img :src="img" :alt="name" class="img-fluid" />
    </div>
    <h3>{{ name }}</h3>
    <div>
      <p>{{ status }}</p>
      <p>{{ genre }}</p>
    </div>
  </div>
</template>
<style></style>
