<template>
  <body
    class="bg-fixed bg-cover bg-center bg-no-repeat min-h-screen"
    v-bind:style="{ 'background-image': background }"
  >
    <section v-show="!quizCompleted" class="text-gray-600 body-font">
      <div
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <img
          class="object-contain object-center rounded"
          alt=""
          :src="questionImage"
          style="height: 50vh"
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
                  v-model="answer"
                  class="form-tick h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
                />
                <span class="text-gray-900 text-s font-medium">{{
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
              v-if="currentQuestion < data.domande.length - 1"
              class="ml-4 inline-flex text-black bg-blue-300 border-0 py-2 px-8 focus:outline-none hover:bg-blue-500 rounded-md text-2xl font-bold"
            >
              Successiva
            </button>
            <button
              role="button"
              aria-label="Completa il Quiz"
              v-if="currentQuestion == data.domande.length - 1"
              @click="checkAnswers()"
              class="ml-4 inline-flex text-black bg-green-300 border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded-md text-2xl font-bold"
            >
              Completa
            </button>
          </div>
        </div>
      </div>
    </section>
    <section v-show="quizCompleted">
      <div class="grid place-content-center text-center h-screen">
        <h1
          class="text-white lg:text-8xl text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl lg:p-4 p-2 m-1"
        >
          COMPLIMENTI!
        </h1>
        <p class="text-black lg:text-8xl text-4xl font-medium lg:p-4 p-2">
          Hai ottenuto: <br />{{ this.punti + "" }} Punti
        </p>
        <div class="flex justify-center">
          <button
            @click="ContinueToNext()"
            class="bg-black hover:bg-gray-700 focus:outline-none rounded-lg font-bold text-center text-white md:text-2xl sm:text-xl p-2 mt-4"
          >
            Continue
          </button>
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
    questionImage: function() {
      if (this.data.images.singleQuestionImage)
        return "http://localhost:3000/" + this.data.images.questionImage;
      else
        return (
          "http://localhost:3000/" +
          this.data.images.questionImages[this.currentQuestion]
        );
    },
    domande: function() {
      return this.data.domande;
    },
    background: function() {
      return "url(http://localhost:3000/" + this.data.images.background + ")";
    },
  },
  data: function() {
    return {
      currentQuestion: 0,
      answers: [],
      answer: "",
      punti: 0,
      playerId: "",
      quizCompleted: false,
    };
  },
  methods: {
    ContinueToNext() {
      this.$emit("gameCompleted");
    },
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
      if (this.currentQuestion < this.data.domande.length) {
        if (this.answer == this.domande[this.currentQuestion].soluzione)
          this.punti += 25;
        else this.punti += 5;
        this.currentQuestion++;
      }
    },
    checkAnswers: function() {
      this.quizCompleted = true;
      this.updateScore();
    },
  },
  sockets: {
    req_player_id(data) {
      this.playerId = data;
      console.log(this.playerId);
    },
  },
};
</script>
