<template>
  <div class="grid place-items-center w-screen h-screen">
    <div class="flex-col place-content-center h-4/5 w-3/5">
      <div class="flex place-content-center text-center">
        <p class="text-4xl font-semibold">
          Inserisci nella casella di testo le parole da decodificare
        </p>
      </div>
      <div
        class="space-y-8 flex-col place-content-center bg-gradient-to-r from-red-200 to-pink-500 rounded-2xl"
      >
        <div class="pt-10 text-center">
          <input
            type="text"
            v-model="newString"
            class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-3/5"
            placeholder="String"
          />
          
          <button
            class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-2"
            type="button"
            style="transition: all 0.15s ease"
            @click="addString(newString)"
          >
            Accetta
          </button>
        </div>
        <p class="text-center text-2xl">Parole da decodificare:</p>
        <div v-for="(string, i) in stringsToSubmit" :key="i">
              <div class="row-auto text-center text-lg">{{ string }}</div>  
        </div>
        <div class="pb-10 flex place-content-center">
          <button
            class="bg-green-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style="transition: all 0.15s ease"
            @click="sendStrings()"
          >
            Invia
          </button>
        </div>
        <div class="pb-10 flex place-content-center">
            <p class="text-center text-lg">
              Ricorda di Convertire le parole in codici QR, vedi: <a class="underline" href="https://it.qr-code-generator.com/">Questo Sito</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreationQrGame",
  data: function () {
    return {
      newString: "",
      stringsToSubmit: [],
    };
  },
  methods: {
    addString: function (newString) {
      this.stringsToSubmit.push(newString);
      console.log(this.stringsToSubmit);
      this.newString = "";
    },
    sendStrings: function () {
      this.$socket.client.emit('strings_to_decode', this.stringsToSubmit);
    },
  },
};
</script>
