<template>
  <body
    class="bg-fixed bg-cover bg-center bg-no-repeat min-h-screen"
    v-bind:style="{ 'background-image': background }"
  >
    <div class="grid place-content-center h-screen">
        <div
          class="flex place-content-center text-center bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl lg:p-4 p-2 m-1"
        >
          <p class="lg:text-4xl text-2xl font-bold">
            Inquadra un codice per decodificare
          </p>
        </div>
        <div class="h-full w-1/2 mx-auto">
          <qrcode-stream @decode="onDecode"></qrcode-stream>
        </div>
        <div class="flex place-content-center m-1">
          <p class="text-black lg:text-4xl font-2xl font-medium  bg-white rounded-2xl text-center lg:p-4 p-2">
            Mancano {{ this.numberOfStrings }} da decodificare
          </p>
          <p
            v-if="this.numberOfStrings == 0"
            class="p-2 text-white text-6xl font-medium"
          >
            Hai decodificato tutto!
          </p>
        </div>
              <div class="flex justify-center">
        <button
          @click="ContinueToNext()"
          class="bg-black hover:bg-gray-700 focus:outline-none rounded-lg font-bold text-center text-white md:text-2xl sm:text-xl p-2 mt-4"
        >
          Continue
        </button>
      </div>
      </div>
  </body>
</template>

<script>
export default {
  name: "QrCodeGame",
  props: {
    data: Object,
    time: String,
  },
  computed: {
    background: function() {
      return "url(http://localhost:3000/" + this.data.images.background + ")";
    },
  },
  data: function() {
    return {
      stringsToDecode: [],
      numberOfStrings: 0,
      points: 0,
      playerId: "",
    };
  },
  methods: {
    onDecode: function(decodedString) {
      console.log(this.stringsToDecode);
      this.stringsToDecode.forEach((string) => {
        if (string.text == decodedString) {
          string.decoded = true;
          this.numberOfStrings--;
          this.points += 50;
          if (this.numberOfStrings == 0) {
            this.$socket.client.emit("update_score", {
              playerId: this.playerId,
              nome: this.playerId,
              punteggi: [{ nomeGioco: "qrCodeGame", punti: this.points }],
            });
          }
        }
      });    
    },
      ContinueToNext() {
      this.$emit("gameCompleted");
    }
  },
  sockets: {
    qr_code_game(data) {
      data.forEach((string) => {
        let newString = {
          text: string,
          decoded: false,
        };
        this.stringsToDecode.push(newString);
      });
      this.numberOfStrings = this.stringsToDecode.length;
    },
    get_player_Id(data) {
      this.playerId = data;
      console.log(this.playerId);
    },
  },
};
</script>

<style>
.qrcode-stream__camera,
.qrcode-stream__pause-frame {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  background-size: cover;
  max-width: inherit !important;
  max-height: inherit !important;
}
.qrcode-stream__inner-wrapper {
  position: inherit !important;
  max-width: inherit !important;
  max-height: inherit !important;
  z-index: inherit !important;
}
</style>
