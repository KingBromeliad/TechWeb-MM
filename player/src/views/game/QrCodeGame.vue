<template>
  <body
    class="bg-fixed bg-cover bg-center bg-no-repeat min-h-screen"
    v-bind:style="{ 'background-image': background }"
  >
    <div class="grid place-content-center h-screen">
      <div class="space-y-2 flex-col place-content-center">
        <div
          class="flex place-content-center text-center bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-4"
        >
          <p class="md:text-6xl text-4xl font-bold">
            Inquadra un codice per decodificare
          </p>
        </div>
        <div class="pt-10 text-center">
          <qrcode-stream @decode="onDecode"></qrcode-stream>
        </div>
        <div class="flex place-content-center">
          <p class="text-black text-4xl font-medium  bg-white rounded-2xl text-center p-4">
            Mancano {{ this.numberOfStrings }} da decodificare
          </p>
          <p
            v-if="this.numberOfStrings == 0"
            class="p-2 text-white text-6xl font-medium"
          >
            Hai decodificato tutto!
          </p>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "QrCodeGame",
  props: {
    data: Object,
  },
  computed: {
    background: function() {
      return "url(http://localhost:3000/" + this.data.images.background + ")";
    },
  },
  data: function() {
    return {
      stringsToDecode: [],
      numberOfStrings: 2,
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
              punteggi: [{ nomeGioco: "qrCodeGame", punti: this.points }],
            });
          }
        }
      });
    },
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
