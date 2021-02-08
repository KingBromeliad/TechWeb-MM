<template>
  <body
    class="bg-fixed bg-cover bg-no-repeat min-h-screen"
    v-bind:style="{ 'background-image': background }"
  >
    <div class="grid grid-cols-2 gap-4 min-h-screen">
      <!-- WELCOME INSIDE THE GRID LAYOUT-->
      <div class="flex items-center justify-center"></div>

      <div
        class="flex content-center justify-center flex-wrap row-span-2 space-y-8"
      >
        <div class="bg-white rounded-md text-center md:mr-4">
          <p class="text-black font-extrabold md:text-4xl md:m-10 sm:m-2">
            {{ text }}
          </p>
        </div>

        <button
          @click="Continue()"
          class="bg-black hover:bg-gray-700 focus:outline-none rounded-lg font-extrabold text-center text-white md:text-6xl sm:text-2xl md:ml-40 sm:ml-10 p-3"
        >
          {{ option }}
        </button>
      </div>

      <div class="flex items-center justify-center m-2">
        <img src="http://localhost:3000/Dino1.svg" />
      </div>
    </div>
  </body>
</template>
<script>
export default {
  props: {
    data: Object,
  },
  computed: {
    text: function () {
      if (this.data != null) {
        return this.data.text[this.line];
      } else return "loading...";
    },
    option: function () {
      if (this.data != null) {
        return this.data.option[this.line];
      } else return "...";
    },
    background: function () {
      return "url(http://localhost:3000/" + this.data.images.background + ")";
    },
  },
  data: function () {
    return {
      line: 0,
    };
  },
  methods: {
    Continue() {
      if (this.line < this.data.text.length - 1) {
        this.line++;
      }
      this.updateScore();
    },
    updateScore() {
      //punteggio aggiornato via via passandoli un valore
      let data = {
        gioco: 'gioco2',
        punti: 1
      }; 
      this.$socket.client.emit('update_score', data);
      //console.log(this.score);
    }
  },
};
</script>
