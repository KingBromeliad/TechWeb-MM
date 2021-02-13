<template>
  <body
    class="bg-fixed bg-cover bg-center bg-no-repeat min-h-screen"
    v-bind:style="{ 'background-image': background }"
  >
    <div class="grid place-content-center min-h-screen grid-cols-2 grid-rows-1">
      <div class="grid place-content-center gap-2">
        <div
          class="bg-white rounded-lg p-10"
          v-for="(q, j) in this.domande"
          :key="q.domanda"
        >
          <h1 class="text-6xl text-black font-bold">{{ q.domanda }}</h1>
          <div v-for="(arg, index) in q.argomento" :key="arg">
            <input
              type="radio"
              :id="index"
              :value="index"
              v-model="chosenAnswers.risposta[j]"
            />
            <label class="text-xs text-gray-800 font-bold" :for="arg">
              {{ arg }}
            </label>
          </div>
        </div>
        <button
          class="bg-blue-500 px-4 py-2 transition duration-100 ease-in-out text-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed mt-1 rounded"
          @click="checkAnswers"
        >
          Check Answers
        </button>
        <button
          class="bg-blue-500 px-4 py-2 transition duration-100 ease-in-out text-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed mt-1 ml-1 mr-1 rounded"
          v-if="result"
          @click="next()"
        >
          Next
        </button>
      </div>
    </div>
  </body>
</template>
<script>
export default {
  name: "Question",
  props: {
    data: Object,
  },
  computed: {
    domande: function () {
      return this.data.domande;
    },
    background: function () {
      return "url(http://localhost:3000/" + this.data.images.background + ")";
    },
  },
  data: function () {
    return {
      chosenAnswers: {
        risposta: [],
      },
      result: false,
    };
  },
  methods: {
    updateScore() {
      //punteggio aggiornato via via passandoli un valore
      let data = {
        gioco: "intro",
        punti: 1,
      };
      this.$socket.client.emit("update_score", data);
      //console.log(this.score);
    },

    checkAnswers: function () {
      for (var i = 0; i < this.domande.length; i++) {
        if (this.domande[i].soluzione != this.chosenAnswers.risposta[i]) {
          console.log(
            this.domande[i].soluzione,
            "  ",
            this.chosenAnswers.risposta[i]
          );
          alert(
            "OOPS, c'è qualcosa di sbagliato nella domanda: " +
              this.domande[i].domanda
          );
          return (this.result = false);
        }
      }
      alert("Bravissim* ce l'hai fatta!");
      return (this.result = true);
    },
  },
};
</script>