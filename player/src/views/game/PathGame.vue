<template>
  <body
    class="bg-center bg-cover bg-no-repeat min-h-screen"
    v-bind:style="{ 'background-image': background }"
  >
    <div
      class="grid place-content-center grid-cols-4 gap-8 min-h-screen md:mr-40 md:ml-40 sm:ml-20 sm:mr-20"
    >
      <!-- HYPER GRID -->
    <div class="object-contain h-80 w-80 object-center">
        <img src="http://localhost:3000/Rock.png" >
    </div>
    <div class="object-contain h-80 w-80 object-center">
        <img src="http://localhost:3000/Rock.png" >
    </div>
        <div class="object-contain h-80 w-80 object-center">
        <img src="http://localhost:3000/Rock.png" >
    </div>
    <div class="object-contain h-80 w-80 object-center">
        <img src="http://localhost:3000/Rock.png" >
    </div>
        <div class="object-contain h-80 w-80 object-center">
        <img src="http://localhost:3000/Rock.png" >
    </div>
    <div class="object-contain h-80 w-80 object-center">
        <img src="http://localhost:3000/Rock.png" >
    </div>
        <div class="object-contain h-80 w-80 object-center">
        <img src="http://localhost:3000/Rock.png" >
    </div>
    <div class="object-contain h-80 w-80 object-center">
        <img src="http://localhost:3000/Rock.png" >
    </div>
        <div class="object-contain h-80 w-80 object-center">
        <img src="http://localhost:3000/Rock.png" >
    </div>
    <div class="object-contain h-80 w-80 object-center">
        <img src="http://localhost:3000/Rock.png" >
    </div>
        <div class="object-contain h-80 w-80 object-center">
        <img src="http://localhost:3000/Rock.png" >
    </div>
    <div class="object-contain h-80 w-80 object-center">
        <img src="http://localhost:3000/Rock.png" >
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
    text: function() {
      if (this.data != null) {
        return this.data.text[this.line];
      } else return "loading...";
    },

    background: function() {
      return (
        "url(http://localhost:3000/" + this.data.images.backgroundPath + ")"
      );
    },

    rock: function() {
      return "http://localhost:3000/" + this.data.images.rock;
    },
  },
  data: function() {
    return {
      line: 0,
    };
  },
  methods: {},
};
</script>
