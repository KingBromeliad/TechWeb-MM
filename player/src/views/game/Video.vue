<template>
  <body
    class="bg-fixed bg-cover bg-no-repeat min-h-screen"
    v-bind:style="{ 'background-image': background }"
  >
    <div class="grid place-content-center">
      <iframe :src="video" frameborder="0"></iframe>
    </div>
  </body>
</template>
<script>
export default {
  props: {
    data: Object,
  },
  computed: {
    video: function() {
      return this.data.resource;
    },
    background: function() {
      return "url(http://localhost:3000/" + this.data.images.background + ")";
    },
  },
  methods: {
    ContinueToNext() {
      this.$emit("gameCompleted");
    },
    updateScore() {
      //punteggio aggiornato via via passandoli un valore
      let data = {
        nomeGioco: "intro",
        punti: 1,
      };
      this.$socket.client.emit("update_score", data);
      //console.log(this.score);
    },
  },
};
</script>
