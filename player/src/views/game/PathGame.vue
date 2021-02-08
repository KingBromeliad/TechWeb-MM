<template>
  <body class="bg-blue-400 min-h-screen">
    <div class="grid place-content-center grid-cols-3 gap-2 min-h-screen">
      <!-- shore-->
      <div>
        <img
          class="object-fill min-h-full"
          src="http://localhost:3000/ShoreL.png"
          alt="shoreL"
        />
      </div>
      <div
        class="grid place-content-center grid-cols-4 grid-rows-3 gap-2 min-h-screen"
      >
        <!-- ROCKS -->
        <div class="flex items-center justify-items-center">
          <img src="http://localhost:3000/Rock.png" alt="rock" />
        </div>
        <div class="flex items-center justify-items-center">
          <img src="http://localhost:3000/Rock.png" alt="rock" />
        </div>
        <div class="flex items-center justify-items-center">
          <img src="http://localhost:3000/Rock.png" alt="rock" />
        </div>
                <!-- ROCKS -->
        <div class="flex items-center justify-items-center">
          <img src="http://localhost:3000/Rock.png" alt="rock" />
        </div>
        <div class="flex items-center justify-items-center">
          <img src="http://localhost:3000/Rock.png" alt="rock" />
        </div>
        <div class="flex items-center justify-items-center">
          <img src="http://localhost:3000/Rock.png" alt="rock" />
        </div>
                <!-- ROCKS -->
        <div class="flex items-center justify-items-center">
          <img src="http://localhost:3000/Rock.png" alt="rock" />
        </div>
        <div class="flex items-center justify-items-center">
          <img src="http://localhost:3000/Rock.png" alt="rock" />
        </div>
        <div class="flex items-center justify-items-center">
          <img src="http://localhost:3000/Rock.png" alt="rock" />
        </div>
                <!-- ROCKS -->
        <div class="flex items-center justify-items-center">
          <img src="http://localhost:3000/Rock.png" alt="rock" />
        </div>
        <div class="flex items-center justify-items-center">
          <img src="http://localhost:3000/Rock.png" alt="rock" />
        </div>
        <div class="flex items-center justify-items-center">
          <img src="http://localhost:3000/Rock.png" alt="rock" />
        </div>

        <!--end-->
      </div>
      <!-- shore-->
      <div>
        <img
          class="object-fill min-h-full"
          src="http://localhost:3000/ShoreR.png"
          alt="shoreR"
        />
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
