<template>
  <div class="container">
    <img v-if="imagen" :src="imagen" alt="Yes or No" />
    <br />
    <div class="pregunta-container">
      <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
      <p>Recuerda terminar con el signo de interrogación (?)</p>
      <h2 v-if="pregunta">{{ pregunta }}</h2>
      <h1 v-if="respuesta">{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
import { consumirFacade } from "../clients/YesNoClient.js";

export default {
  data() {
    return {
      pregunta: "",
      respuesta: "",
      imagen: "",
    };
  },
  watch: {
    pregunta(value) {
      this.consumirAPI(value);
    },
  },
  methods: {
    async consumirAPI(pregunta) {
      if (!pregunta.endsWith("?")) {
        return;
      }

      try {
        const data = await consumirFacade();
        this.respuesta = data.answer;
        this.imagen = data.image;
      } catch (error) {
        console.error("Error al consumir la API:", error);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 50px;
  color: white;
}

h1 {
  color: white;
  margin-top: 20px;
}

p {
  color: white;
  font-size: 20px;
}

input {
  color: white;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  padding: 15px;
  font-size: 18px;
  border-radius: 10px;
  width: 350px;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

img {
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}

.pregunta-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  border: 3px solid white;
  padding: 40px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
</style>

<style>
body {
  background-color: #1a1a1a;
  color: white;
  margin: 0;
  padding: 0;
}
</style>
