<template>
  <div
    class="text-center container mx-auto flex justify-around sm:flex-row h-screen"
  >
    <div
      class="text-center flex h-full justify-center sm:flex-col w-1/4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
    >
      <div class="h-1/4"></div>
      <div class="h-3-4 flex flex-col sm:flex-col border overflow-auto">
        <div v-for="(item, index) in oggetto" :key="index" class="p-2">
          <div
            class="block bg-white px-6 py-6 rounded-lg shadow-lg text-center"
          >
            <h2 class="text-xl font-medium text-gray-700">
              {{ item.cognome }}
            </h2>
            <span class="text-blue-500 block mb-5">{{ item.nome }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container w-3/4 flex sm:flex-col h-screen">
      <div class="h-4/25">cfdf</div>
      <div class="p-8 h-1/10">
        <div
          class="bg-white px-6 py-8 rounded-lg shadow-lg text-center border-2 border-purple-600"
        >
          <h1 class="text-xl font-medium text-purple-700">I giochi</h1>
        </div>
      </div>
      <div
        class="h-3/5 flex flex-row flex-wrap justify-center sm:flex-row border overflow-auto"
      >
        <div v-for="(item2, index) in oggetto2" :key="index" class="w-1/4 p-4">
          <div
            class="bg-white px-2 py-4 rounded-lg shadow-lg text-center border-2 border-purple-600"
          >
            <div class="mb-3"></div>
            <h2 class="text-xl font-medium text-gray-700">{{ item2 }}</h2>
          </div>
        </div>
      </div>
    </div>
    <!--{{ cane }}-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "cagnolino",
      oggetto: [
        { nome: "asdasd", cognome: "asfasf" },
        { nome: "asdasd", cognome: "asfasf" },
        { nome: "asdasd", cognome: "asfasf" },
        { nome: "asdasd", cognome: "asfasf" },
      ],
      oggetto2: [
        { nome: "asdasd", cognome: "asfasf" },
        { nome: "asdasd", cognome: "asfasf" },
        { nome: "asdasd", cognome: "asfasf" },
        { nome: "asdasd", cognome: "asfasf" },
      ],
    };
  },

  methods: {
    premuto() {
      console.log("ciao");
    },
  },
  mounted: function () {
    console.log("ho montato qua");
  },
};
</script>
