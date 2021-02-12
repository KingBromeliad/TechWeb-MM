<template>
  <body
    class="bg-fixed bg-cover bg-no-repeat min-h-screen"
    v-bind:style="{ 'background-image': background }"
  >
 
    <div class="grid place-content-center h-screen">
       <div class="flex justify-center align-center text-center mb-4">
    <h1 class="text-black md:text-6xl text-2xl font-extrabold">{{title}}</h1>
  </div>
      <iframe
        width="720"
        height="400"
        :src="source"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="flex justify-center">
        <button
          @click="Continue()"
          class="bg-black hover:bg-gray-700 focus:outline-none rounded-lg font-bold text-center text-white md:text-2xl sm:text-xl p-2 mt-4"
        >
          Continue
        </button>
      </div>
    </div>

    <div v-show="!resourceType" class="grid place-content-center h-screen">
      <img :src="source" />
    </div>
  </body>
</template>
<script>
export default {
  props: {
    data: Object,
  },
  computed: {
    title: function(){
      return this.data.title[this.line]
    },
    source: function() {
      return this.data.source[this.line];
    },
    background: function() {
      return "url(http://localhost:3500/" + this.data.images.background + ")";
    },
    resourceType: function() {
      return this.data.resourceType;
    },
  },
  data: function(){
    return{
      line: 0
    }
  },
  methods: {
    Continue() {
      if (this.line < this.data.source.length - 1) {
        this.line++;
      } else if (this.line == this.data.source.length - 1) {
        this.ContinueToNext();
      }
    },
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
