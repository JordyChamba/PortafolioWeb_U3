<template>
  <div class="view-container"></div>
  <Pregunta />
</template>

<script>
import Pregunta from "../components/Pregunta.vue";
export default {
  components: {
    Pregunta,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
}

h2 {
  font-size: 50px;
}
</style>
