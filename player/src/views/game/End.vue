<template>
  <div
    class="bg-fixed bg-center bg-cover bg-no-repeat min-h-screen m-0 p-0"
    v-bind:style="{ 'background-image': background }"
  >
    <div class="grid place-content-center h-screen">
      <h1
        class="text-center lg:text-6xl text-4xl text-black font-extrabold mb-10"
      >
        {{ text }}
      </h1>
      <div v-if="this.presiPunti == false" class="flex justify-center">
        <button
          @click="contaPunteggio()"
          class="bg-black hover:bg-gray-700 focus:outline-none rounded-lg font-extrabold text-center text-white lg:text-4xl text-2xl lg:p-4 p-2"
        >
          Premimi per vedere il punteggio finale!
        </button>
      </div>
      <p
        v-else
        class="text-center lg:text-4xl text-2xl text-gray-800 font-bold mb-60"
      >
        Hai completato la storia e ottenuto: <br />
        {{ punteggioFinale }} punti!
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "End",
  props: {
    data: Object,
  },
  computed: {
    text: function () {
      if (this.data != null) {
        return this.data.text;
      } else return "loading...";
    },

    background: function () {
      return "url(http://localhost:3000/" + this.data.images.background + ")";
    },
  },
  data: function () {
    return {
      playerId: "",
      giocatori: [],
      punteggioFinale: 0,
      presiPunti: false,
    };
  },
  methods: {
    contaPunteggio: function () {
      console.log(this.giocatori);
      for (var i = 0; i < this.giocatori.length; i++) {
        if (this.giocatori[i].playerId == this.playerId) {
          for (var j = 0; j < this.giocatori[i].punteggi.length; j++) {
            this.punteggioFinale += this.giocatori[i].punteggi[j].punti;
          }
        }
      }
      this.presiPunti = true;
    },
  },
  sockets: {
    player_points(data) {
      this.giocatori = data;
    },
    get_player_Id(data) {
      console.log(data);
      this.playerId = data;
    },
  },
  mounted: function () {
    this.$socket.client.emit("get_points");
    this.$socket.client.emit("req_player_id");
  },
};
</script>
