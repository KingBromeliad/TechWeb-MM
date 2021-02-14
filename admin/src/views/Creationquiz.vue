<template>
  <div>
    <h1>This is the creation page</h1>
    <button @click="premuto()">premimi</button>
    <div class="space-y-4">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="block py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex flex-col sm:items-center sm:space-y-0 sm:space-x-2"
      >
        <div class="block text-center py-4 space-y-6 sm:items-center">
          <h1>Le risposte</h1>
          <div
            v-for="(item2, index2) in items[index].argomento"
            :key="index2"
            class="flex flex-row"
          >
            <button
              class="uppercase p-3 flex items-center bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12"
            >
              {{ index2 }}
            </button>
            <input
              type="text"
              v-model="item.argomento[index2]"
              class="focus:ring-indigo-500 focus:border-indigo-500 rounded sm:text-sm border-2 border-purple-600"
              placeholder="aggiunta"
            />
          </div>
          <button
            @click="aggiungirisposta(index)"
            class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Aggiungi risposta
          </button>
        </div>
        <div class="flex flex-col">
          <h1>La domanda</h1>
          <input
            type="text"
            name="company_website"
            v-model="item.domanda"
            class="focus:ring-indigo-500 focus:border-indigo-500 rounded sm:text-sm border-2 border-purple-600"
            placeholder="inserisci una domanda"
          />
        </div>
        <div>
          <button
            class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Elimina {{ index }}
          </button>
        </div>
      </div>
      <div
        class="block py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
      >
        <div class="sm:items-center text-center space-y-2">
          <button
            @click="aggiungidomanda()"
            class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Aggiungi
          </button>
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">
              Aggiungi una domanda al tuo quiz
            </p>
          </div>
        </div>
      </div>
      <button @click="salvamodifiche()">salva modifiche</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      name: [[]],
      listastorie: "",
      items: "",
    };
  },

  sockets: {
    grabjson(data) {
      this.listastorie = data.storie;
      console.log(this.listastorie);
      console.log(this.items);
    },
  },

  methods: {
    premuto() {
      console.log("mi hai premuto, ahia");
    },
    aggiungirisposta(i) {
      this.items[i].argomento.push(" ");
    },
    salvamodifiche() {
      Vue.prototype.$SavedFile.game[
        this.$numeroquiz
      ].modificato = true;
      Vue.prototype.$SavedFile.game[this.$numeroquiz].option = JSON.parse(JSON.stringify(this.items));
    },
    aggiungidomanda() {
      var a = {
        domanda: "un altra domanda",
        soluzione: 1,
        argomento: ["risposta"],
      };
      this.items.push(a);
      console.log(this.items);
    },
  },

  mounted: function () {
    console.log("siamo nella quiz creation");
    console.log(this.$numeroquiz);
    console.log(Vue.prototype.$SavedFile.game[Vue.prototype.$numeroquiz].option);
    this.items = JSON.parse(JSON.stringify(Vue.prototype.$SavedFile.game[Vue.prototype.$numeroquiz].option));
  },
};
</script>
