<template>
  <div>
    <div v-for="(player, index) in this.players" :key="index">
      <div
        v-if="index != 0"
        class="py-8 px-8 max-w-sm mx-auto bg-gray-100 rounded-xl shadow-md space-y-2 sm:py-4 sm:space-y-0 sm:space-x-6 m-1 text-center"
      >
        <p class="text-xl text-black align-top">{{ player.playerId }}</p>

        <button
          class="align-bottom px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          @click="updateIndex(index)"
        >
          Visualizza il progresso del Giocatore
        </button>
      </div>
    </div>
    <div>
      <PlayerProgress :image="getImage()" :player="players[shownPlayerIndex]">
      </PlayerProgress>
    </div>
  </div>
</template>

<script>
import PlayerProgress from "../components/PlayerProgress.vue";
export default {
  name: "SchermataValutazione",
  components: {
    PlayerProgress,
  },
  data: function () {
    return {
      players: [],
      shownPlayerIndex: 1,
    };
  },
  methods: {
    getConnectedPlayers: function () {
      //chiamata all'API per prendere il numero di giocatori
    },
    getPlayerPoints: function () {
      //chiamata al socket al momento del mounted per prendere i progressi
      this.player_points;
    },
    getImage: function () {
      //chiamata all'API per prendere un immagine e ritorna l'URL come stringa
      this.axios.get("http://localhost:3500/immagineDaValutare").then((response) => {
          console.log(response.status);
          let imageUrl = "http://localhost:3000" + response.data;
          console.log(imageUrl);
          return imageUrl;
      });
    },
    updateIndex: function (index) {
      this.shownPlayerIndex = index;
    },
  },
  sockets: {
    player_points(data) {
      this.players = data;
      //console.log(this.players);
    },
  },
};
</script>

<style>
</style>