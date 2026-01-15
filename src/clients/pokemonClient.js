import axios from "axios";

const consumirAPI = async (id) => {
  const respuesta = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((r) => r.data);
  console.log(respuesta);
  return respuesta;
};

function obtenerAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const obtenerVectorNumerico = () => {
  const vector = [];
  for (let i = 0; i < 4; i++) {
    vector[i] = obtenerAleatorio(1, 600);
  }
  return vector;
};

export const obtenerPokemons = async () => {
  const vector = obtenerVectorNumerico();
  const pokemon1 = await consumirAPI(vector[0]);
  const pokemon2 = await consumirAPI(vector[1]);
  const pokemon3 = await consumirAPI(vector[2]);
  const pokemon4 = await consumirAPI(vector[3]);

  return [
    { name: pokemon1.name, id: pokemon1.id },
    { name: pokemon2.name, id: pokemon2.id },
    { name: pokemon3.name, id: pokemon3.id },
    { name: pokemon4.name, id: pokemon4.id },
  ];
};

export const obtenerImagen = async (id) => {
  const pokemon = await consumirAPI(id);
  return pokemon.sprites.other.dream_world.front_default;
};

export default {
  obtenerPokemons,
  obtenerImagen,
};
