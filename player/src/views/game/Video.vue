<template>
  <body
    class="bg-fixed bg-cover bg-no-repeat min-h-screen"
    v-bind:style="{ 'background-image': background }"
  >

    <div v-show="resourceType" class="grid place-content-center">
      <iframe :src="source" frameborder="0"></iframe>
    </div>
  <div v-show="!resourceType" class="grid place-content-center">
      <img :src="source"/>
  </div>
  </body>
</template>
<script>
export default {
  props: {
    data: Object,
  },
  computed: {
    source: function() {
      return ('http:localhost:3500/' + this.data.resource);
    },
    background: function() {
      return "url(http://localhost:3500/" + this.data.images.background + ")";
    },
    resourceType: function(){
      return this.data.resourceType
    }
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
