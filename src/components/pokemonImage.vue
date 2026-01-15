<template>
  <div class="pokemon-container">
    <img :src="imageUrl" alt="No se puede cargar la imagen" />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 200px;
  display: block;
  margin: 0 auto;
}
</style>

<style scoped>
.pokemon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 200px;
  display: block;
  margin: 0 auto;
}
</style>
