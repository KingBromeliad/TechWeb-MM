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
    <div class="content-center max-w-sm bg-gray-100 mx-auto">
      <div
        v-for="punteggio in giocatori[shownPlayerIndex].punteggi"
        :key="punteggio.nomeGioco"
      >
        <div class="border-2">
          <p class="text-lg text-gray-500 text-center">
            Gioco: {{ punteggio.nomeGioco }} <br />
            Punteggio: {{ punteggio.punti }}
          </p>
          <div v-if="imagePresent == true">
            <img :src="imageUrl" />
            <button @click="evalImagePositive()">Giusta</button>
            <button @click="evalImageNegative()">Sbagliata</button>
          </div>
        </div>
      </div>
    </div>
    <modal name="playerNeedsHelp">
      <div class="text-xl text-center text-black font-bold py-5">
        Il giocatore: <br />
        {{ giocatoreDaAiutare }} <br />
        ha bisogno di aiuto!
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
      giocatoreDaAiutare: "",
      immagineDaValutare: {
        imageUrl: "",
        playerIdSendingImage: "",
      },
      imagePresent: false,
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
          this.immagineDaValutare.imageUrl =
            "http://localhost:3500" + response.data.url;
          this.immagineDaValutare.playerIdSendingImage = response.data.playerId;
          this.imagePresent = true;
        })
        .catch((err) => {
          console.log(err);
          this.imagePresent = false;
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
    evelImagePositive: function () {
      this.$socket.emit("image_eval", true);
    },
    evelImageNegative: function () {
      this.$socket.emit("image_eval", false);
    },
  },
  sockets: {
    player_points(data) {
      this.giocatori = data;
    },
    needs_help(data) {
      this.giocatoreDaAiutare = data.playerId;
      this.showModal();
    },
    image_present() {
      this.getImage();
    },
  },
  mounted: function () {
    //this.getImage();
  },
};
</script>
<style>
</style>