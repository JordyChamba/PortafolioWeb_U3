<template>
  <div class="opciones-container">
    <ul>
      <li
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(option)"
        :class="{
          selected: selectedOption === option,
          correct: showResult && option === correctAnswer,
          incorrect:
            showResult && selectedOption === option && option !== correctAnswer,
        }"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: null,
      showResult: false,
    };
  },
  methods: {
    selectOption(option) {
      if (this.showResult) return;

      this.selectedOption = option;
      this.showResult = true;

      const isCorrect = option === this.correctAnswer;
      this.$emit("answered", isCorrect);

      setTimeout(() => {
        this.selectedOption = null;
        this.showResult = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.opciones-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
}

li {
  background-color: white;
  border-radius: 5px;
  border: 2px solid #333;
  cursor: pointer;
  width: 250px;
  margin-top: 10px;
  text-align: center;
  padding: 15px;
  font-size: 1.1em;
  text-transform: capitalize;
  transition: all 0.3s ease;
}

li:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}

li.selected {
  border-width: 3px;
}

li.correct {
  background-color: #4caf50;
  color: white;
  border-color: #4caf50;
}

li.incorrect {
  background-color: #f44336;
  color: white;
  border-color: #f44336;
}
</style>
