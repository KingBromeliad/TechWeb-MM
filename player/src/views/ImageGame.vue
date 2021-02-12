<template>
  <div class="flex justify-center">
    <form enctype="multipart/form-data">
      <input type="file" name="image" accept="image/*" capture="camera" @change="sendFile($event)" />
    </form>
  </div>
</template>

<script>
export default {
  name: "imageGame",
  data: function () {
    return {
      playerId: "",
    };
  },
  methods: {
    sendFile: function (event) {
      let formData = new FormData();
      formData.append("image", event.target.files[0]);
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
    }
  },
  sockets: {
    get_player_Id(data) {
      this.playerId = data;
      console.log(this.playerId);
    },

  },
  mounted: function () {},
};
</script>
