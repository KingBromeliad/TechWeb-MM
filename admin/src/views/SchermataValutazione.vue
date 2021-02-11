<template>
  <div>
    <div v-for="(giocatore, index) in this.giocatori" :key="index">
      <div
        class="py-8 px-8 max-w-sm mx-auto bg-gray-100 rounded-xl shadow-md space-y-2 sm:py-4 sm:space-y-0 sm:space-x-6 m-1 text-center"
      >
        <p class="text-xl text-black align-top">{{ giocatore.playerId }}</p>
        <button
          class="align-bottom px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          @click="updateIndex(index)"
        >
          Visualizza il progresso del Giocatore
        </button>
      </div>
    </div>
    <p class="text-xl text-black align-top font-bold text-center">
      Giocatore: {{ giocatori[shownPlayerIndex].playerId }}
    </p>
    <div
      v-for="punteggio in giocatori[shownPlayerIndex].punteggi"
      :key="punteggio.nomeGioco"
    >
      <div class="text-center">
        <p class="text-lg text-gray-500">
          {{ punteggio.nomeGioco }} -> {{ punteggio.punti }}
        </p>
      </div>
    </div>
    <img v-bind:src="getImage()" />

    <modal name="playerNeedsHelp"> 
      <div class="text-xl text-center text-black font-bold py-5">
        Il giocatore: <br> {{ giocatoreDaAiutare }} <br> ha bisogno di aiuto!
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: "SchermataValutazione",
  data: function () {
    return {
      giocatori: [],
      shownPlayerIndex: 0,
      giocatoreDaAiutare: ''
    };
  },
  methods: {
    getPlayerPoints: function () {
      //chiamata al socket al momento del mounted per prendere i progressi
      this.player_points;
    },
    getImage: function () {
      //chiamata all'API per prendere un immagine e ritorna l'URL come stringa
      this.axios
        .get("http://localhost:3500/immagineDaValutare")
        .then((response) => {
          console.log(response.data);
          let imageUrl = "http://localhost:3000" + response.data;
          console.log(imageUrl);
          return imageUrl;
        });
    },
    updateIndex: function (index) {
      this.shownPlayerIndex = index;
    },
    showModal: function () {
      this.$modal.show("playerNeedsHelp");
    },
    hideModal: function () {
      this.$modal.hide("playerNeedsHelp");
    },
  },
  sockets: {
    player_points(data) {
      this.giocatori = data;
    },
    needs_help(data) {
      this.giocatoreDaAiutare = data.playerId;
      this.showModal();
    }
  },
};
</script>
<style>
</style>