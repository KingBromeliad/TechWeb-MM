<template>
  <body
    class="bg-fixed bg-cover bg-center bg-no-repeat min-h-screen"
    v-bind:style="{ 'background-image': background }"
  >
    <section class="text-gray-600 body-font">
      <div
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt=""
          :src="questionImage"
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900"
          >
            {{ domande[currentQuestion].domanda }}
          </h1>

          <div class="container flex flex-row items-center justify-center">
            <div
              v-for="(option, index) in domande[currentQuestion].argomento"
              :key="index"
              class="p-4 bg-white rounded-xl shadow-md h-14 flex m-4"
            >
              <label class="flex items-center space-x-3" :for="index">
                <input
                  checked
                  aria-label="Risposta"
                  type="radio"
                  :id="index"
                  :value="index"
                  v-model="answers[currentQuestion]"
                  class="form-tick h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
                />
                <span class="text-gray-900 text-xs font-medium">{{
                  option
                }}</span>
              </label>
            </div>
          </div>
          <div class="flex justify-center">
            <!--<button
              class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Button
            </button>-->
            <button
              @click="nextQuestion()"
              role="button"
              aria-label="Passa alla domanda successiva"
              class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Successiva
            </button>
            <button
              role="button"
              aria-label="Completa il Quiz"
              v-if="currentQuestion == data.domande.length - 1"
              @click="checkAnswers()"
              class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Completa
            </button>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>
<script>
export default {
  name: "Question",
  props: {
    data: Object,
  },
  computed: {
    questionImage: function () {
      if (this.data.images.singleQuestionImage)
        return "http://localhost:3000/" + this.data.images.questionImage;
      else
        return (
          "http://localhost:3000/" +
          this.data.images.questionImages[this.currentQuestion]
        );
    },
    domande: function () {
      return this.data.domande;
    },
    background: function () {
      return "url(http://localhost:3000/" + this.data.images.background + ")";
    },
  },
  data: function () {
    return {
      currentQuestion: 0,
      answers: [],
      punti: 0,
      playerId: "",
    };
  },
  methods: {
    updateScore() {
      //punteggio aggiornato via via passandoli un valore
      let data = {
        playerId: this.playerId,
        punteggi: [
          {
            nomeGioco: "Quiz",
            punti: this.punti,
          },
        ],
      };
      this.$socket.client.emit("update_score", data);
    },
    nextQuestion() {
      if (this.currentQuestion < this.data.domande.length)
        this.currentQuestion++;
    },
    checkAnswers: function () {
      console.log(this.data.domande);
      for (var i = 0; i < this.data.domande.length; i++) {
        if (this.data.domande[i].soluzione != this.answers[i]) {
          console.log(
            this.data.domande[i].soluzione,
            "  ",
            this.answers.risposta[i]
          );
          this.punti += 5;
        } else {
          this.punti += 25;
        }
      }
      this.updateScore();
    },
  },
  sockets: {
    req_player_id(data) {
      this.playerId = data;
    },
  },
};
</script>
