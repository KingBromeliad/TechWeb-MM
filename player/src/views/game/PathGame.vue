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
        class="grid place-content-center grid-cols-4 grid-rows-4 gap-x-2 min-h-screen md:pt-20 md:pb-20"
      >
        <!-- ROCKS -->
        <Rock v-for="rock in rocks" v-bind:key="rock.id" :initialAngle="rock.angle" :rotates="rock.rotates"></Rock>

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
import Rock from '../../components/Rock.vue'
export default {
  props: {
    data: Object,

  },
  components: {
    Rock
  },
  computed: {
    text: function () {
      if (this.data != null) {
        return this.data.text[this.line];
      } else return "loading...";
    },

    background: function () {
      return (
        "url(http://localhost:3000/" + this.data.images.backgroundPath + ")"
      );
    },

    rock: function () {
      return "http://localhost:3000/" + this.data.images.rock;
    },
  },
  data: function () {
    return {
      line: 0,
      rocks: [
        {id: 1,angle: 0,rotates: true},
        {id: 2,angle: 2,rotates: false},
        {id: 3,angle: 2,rotates: false},
        {id: 4,angle: 0,rotates: false},
        {id: 5,angle: 2,rotates: false},
        {id: 6,angle: 3,rotates: false},
        {id: 7,angle: 0,rotates: false},
        {id: 8,angle: 1,rotates: false},
        {id: 9,angle: 1,rotates: false},
        {id: 10,angle: 2,rotates: false},
        {id: 11,angle: 0,rotates: false},
        {id: 12,angle: 0,rotates: false},
        {id: 13,angle: 0,rotates: false},
        {id: 14,angle: 1,rotates: false},
        {id: 15,angle: 1,rotates: false},
        {id: 16,angle: 1,rotates: false},
      ]
    };
  },
  methods: {},
};
</script>
