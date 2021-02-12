<template>
  <div class="grid place-items-center w-screen h-screen">
    <div class="flex-col place-content-center h-4/5 w-2/5">
      <div class="flex place-content-center text-center">
        <form enctype="multipart/form-data">
          <input
            type="file"
            name="image"
            accept="image/*"
            capture="camera"
            @change="sendFile($event)"
          />
        </form>
        <div v-show="esitoValutazione">
          <h1 class="text-2xl text-black font-semibold">
            L'immagine inviata è corretta! E vale ben {{ punti }} punti!
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "imageGame",
  data: function () {
    return {
      playerId: "",
      esitoValutazione: false,
      punti: 0,
    };
  },
  methods: {
    sendFile: function (event) {
      let formData = new FormData();
      formData.append("image", event.target.files[0]);
      console.log(this.playerId);
      formData.append("playerId", this.playerId);
      this.axios
        .post("http://localhost:3500/immagineRicevuta", formData)
        .then((response) => {
          console.log(response);
          this.$socket.client.emit("image_sent", true);
        })
        .catch((errors) => {
          console.log("Invalid Data", errors);
        });
    },
  },
  sockets: {
    get_player_Id(data) {
      this.playerId = data;
      console.log(this.playerId);
    },
    image_eval(data) {
      this.esitoValutazione = data.eval;
      this.punti = data.punti;
      if (data.eval == true) {
        console.log((this.punti = data.punti));
        let gioco = {
          playerId: this.playerId,
          punteggi: [{ nomeGioco: "imageGame", punti: this.punti }],
        };
        this.$socket.client.emit("update_score", gioco);
      }
    },
  },
  mounted: function () {
    this.$socket.client.emit("req_player_id");
  },
};
</script>
