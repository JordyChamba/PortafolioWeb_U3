<template>
  <div v-if="pokemon && pokemonOptions.length > 0">
    <h1>¿Quién es este Pokémon?</h1>
    <PokemonImage :imageUrl="imageUrl" />
    <PokemonOpciones
      :options="pokemonOptions"
      :correctAnswer="pokemon.name"
      @answered="handleAnswer"
    />
    <div v-if="message" :class="['message', messageClass]">
      {{ message }}
    </div>
  </div>
  <div v-else>
    <p>Cargando...</p>
  </div>
</template>

<script>
import PokemonImage from "../components/pokemonImage.vue";
import PokemonOpciones from "../components/pokemonOpciones.vue";
import { obtenerPokemons, obtenerImagen } from "../clients/pokemonClient";

export default {
  components: {
    PokemonImage,
    PokemonOpciones,
  },
  data() {
    return {
      pokemon: null,
      imageUrl: null,
      pokemonOptions: [],
      message: "",
      messageClass: "",
    };
  },
  methods: {
    async cargarJuego() {
      try {
        const pokemons = await obtenerPokemons();
        this.pokemonList = pokemons;
        this.pokemonOptions = pokemons.map((p) => p.name);

        const randomIndex = Math.floor(Math.random() * 4);
        this.pokemon = pokemons[randomIndex];

        this.imageUrl = await obtenerImagen(this.pokemon.id);
      } catch (error) {
        console.error("Error al cargar el juego:", error);
      }
    },
    handleAnswer(isCorrect) {
      if (isCorrect) {
        this.message = "¡Ha seleccionado el Pokemon correcto!";
        this.messageClass = "correct";
      } else {
        this.message = `Ha seleccionado el Pokemon incorrecto. Era ${this.pokemon.name}`;
        this.messageClass = "incorrect";
      }
      setTimeout(() => {
        this.message = "";
        this.pokemon = null;
        this.imageUrl = null;
        this.pokemonOptions = [];
        this.cargarJuego();
      }, 2000);
    },
  },

  // === CREACIÓN: Inicialización del componente ===
  beforeCreate() {
    console.log(
      "beforeCreate: Instancia creada, data y métodos aún no disponibles"
    );
  },
  created() {
    console.log(
      "created: Data, computed, methods y watchers ya están disponibles"
    );
  },

  // === MONTAJE: Renderización en el DOM ===
  beforeMount() {
    console.log("beforeMount: Antes de insertar el componente en el DOM");
  },
  mounted() {
    console.log(
      "mounted: Componente insertado en el DOM, elementos accesibles"
    );
    this.cargarJuego();
  },

  // === ACTUALIZACIÓN: Cambios reactivos ===
  beforeUpdate() {
    console.log(
      "hubo cambio en un data o props del componente y view esta por renderizar el cambio"
    );
  },
  updated() {
    console.log("updated: ya se actualizo, tras la re-renderizacion");
  },

  // === DESTRUCCIÓN: Limpieza del componente ===
  beforeUnmount() {
    console.log("beforeUnmount: Antes de destruir el componente");
  },
  unmounted() {
    console.log("unmounted: Componente destruido, limpieza completada");
  },
};
</script>

<style>
h1 {
  text-align: center;
  text-transform: capitalize;
  font-size: 2em;
  margin: 20px 0;
}

.message {
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  margin: 20px 0;
  padding: 10px;
  border-radius: 5px;
  margin-left: 650px;
}

.correct {
  background-color: #4caf50;
  color: white;
  width: 500px;
}

.incorrect {
  background-color: #f44336;
  color: white;
  width: 600px;
}
</style>
