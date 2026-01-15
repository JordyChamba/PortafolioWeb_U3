<template>
  <div class="hola-mundo">
    <h2>Hola Mundo</h2>
    <h1>Consultando los datos del estudiante</h1>

    <button @click="mostrarId = true" class="btn-presentar">
      Presentar ID
    </button>

    <div v-if="mostrarId" class="id-display">
      <h3>
        ID del Estudiante: <span class="id-value">{{ idEstudiante }}</span>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idEstudiante: null,
      mostrarId: false,
    };
  },
  created() {
    console.log(this.$route);
    console.log(this.$route.params.id);
    this.idEstudiante = this.$route.params.id;
    console.log(this.$route.query.anio);
    console.log(this.$route.query.mes);
    console.log(this.$route.query.apellido);
    //http://localhost:8080/hola/1?anio=1254&mes=45&apellido=galarga
  },
};
</script>

<style scoped>
.hola-mundo {
  padding: 20px;
  text-align: center;
}

.btn-presentar {
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #42b983;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-presentar:hover {
  background-color: #35a372;
}

.btn-presentar:active {
  transform: scale(0.98);
}

.id-display {
  margin-top: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-in;
  margin: 0% 20%;
}

.id-display h3 {
  color: white;
  margin: 0;
  font-size: 24px;
}

.id-value {
  color: #ffd700;
  font-weight: bold;
  font-size: 28px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
