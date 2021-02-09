<template>
  <body
    class="bg-fixed bg-cover bg-no-repeat min-h-screen"
    v-bind:style="{ 'background-image': background }"

  ></body>
</template>
<script>
export default {
  name: 'Question',
  props: {
    data: Object,
  },
  computed: {
    background: function() {
      return "url(http://localhost:3000/" + this.data.images.background + ")";
    },
  },
  data: function() {
    return {};
  },
  methods: {
    updateScore() {
      //punteggio aggiornato via via passandoli un valore
      let data = {
        gioco: "intro",
        punti: 1,
      };
      this.$socket.client.emit("update_score", data);
      //console.log(this.score);
    },
  },
};
</script>
