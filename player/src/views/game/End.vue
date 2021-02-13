<template>
  <div
    class="bg-fixed bg-center bg-cover bg-no-repeat min-h-screen m-0 p-0"
    v-bind:style="{ 'background-image': background }"
  >
    <div class="grid place-content-center h-screen">
      <h1 class="text-center lg:text-6xl text-4xl text-black font-extrabold mb-10">
        {{ text }}
      </h1>
      <p class="text-center lg:text-4xl text-2xl text-gray-800 font-bold mb-60">
        Hai completato la storia e ottenuto: <br />
        n punti!
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "End",
  props: {
    data: Object,
  },
  computed: {
    text: function() {
      if (this.data != null) {
        return this.data.text;
      } else return "loading...";
    },

    background: function() {
        return "url(http://localhost:3000/" + this.data.images.background + ")"
    },
  },
  data: function() {
    return {};
  },
  methods: {},
};
</script>
