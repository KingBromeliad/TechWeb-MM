<template>
  <div>
    <div class="space-y-4">
    <div v-for="(item,index) in items" :key="item.nome" class="block py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src=item.url alt="Woman's Face">
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
        {{item.message}}{{index}}
      </p>
      <p class="text-gray-500 font-medium">
        {{item.descrizione}}
      </p>
    </div>
    <button @click="creazionestoria(index)" class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Modifica</button>
        <button @click="modal(index)" class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Elimina</button>
  </div>
</div>
<div class="block py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
<div class= "sm:items-center text-center space-y-2">
<button @click="modal2()" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Crea</button>
<div class="space-y-0.5">
  <p class="text-lg text-black font-semibold">
    Crea una storia da capo
  </p>
  <p class="text-gray-500 font-medium">
    Crea una storia divertente ed inedita per i tuoi alunni
  </p>
</div>
</div>
</div>
</div>
            <router-link href="#" :to="{name:'Creationquiz'}" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Creationquiz</router-link>
            <router-link href="#" to="/team" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">guardiamo i Team</router-link>
              <router-link href="#" to="/Gamequiz" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">gioco strano</router-link>
                <router-link href="#" to="/Games" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">quiz</router-link>
                <button @click="modal()">apri il modalsdfasdf</button>
                <div
                class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify center items-center z-50"
                v-if="openmodal"
                >
                <div class="block py-16 px-8 mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center">
                <div class= "sm:items-center text-center space-y-2">
                <div class="space-y-0.5 flex flex-col">
                  <p class="text-lg text-black font-semibold">
                    sei sicuro di voler eliminare la storia?
                  </p>
                  <p class="text-gray-500 font-medium">
                    Non sarà possibile recuperarla
                  </p>
                  <div class="flex flex-row">
                    <button @click="eliminastoria()" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">elimina</button>
                    <button @click="exitmodal()" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">annulla</button>
                </div>
                </div>
                </div>
                </div>
              </div>
              <div
              class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify center items-center z-50"
              v-if="openmodal2"
              >
              <div class="block py-16 px-8 mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center">
              <div class= "sm:items-center text-center space-y-2">
              <div class="space-y-0.5 flex flex-col">
                <p class="text-lg text-black font-semibold">
                  Crea una nuova storia
                </p>
                <p class="text-lg text-black font-semibold">
                  Scegli la fascia alla quale il gioco è dedicato
                </p>
                <div class="flex flex-row">
                  <button @click="cambiafascia(0)" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">singolo</button>
                  <button @click="cambiafascia(1)" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">coppia</button>
                  <button @click="cambiafascia(2)" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">gruppo</button>
              </div>
              <p class="text-lg text-black font-semibold">
                Scegli il numero di giocatori
              </p>
                <div class="flex flex-row">
                  <button @click="cambiacategoria(0)" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">bambini</button>
                  <button @click="cambiacategoria(1)" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">ragazzi</button>
                  <button @click="cambiacategoria(2)" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">adulti</button>
              </div>
                <div class="flex flex-row justify-centr">
                  <button @click="creazionestorianuova()" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Crea</button>
                  <button @click="exitmodal()" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">annulla</button>
              </div>
              </div>
              </div>
              </div>
            </div>
              <div
              v-if="openmodal || openmodal2"
              class="absolute h-full inset-0 z-40 opacity-25 bg-black"
              ></div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      storiadaeliminare:0,
      numerocategoria:0,
      numerofascia:0,
      openmodal:false,
      openmodal2:false,
      name:'cagnolino',
      listastorie:"",
      items:"",
    };
  },

  sockets: {
    grabjson(data) {
      this.listastorie=data.storie;
      console.log(this.listastorie);
      console.log(this.items);
    }
  },

  methods: {
    premuto() {
      console.log("ciao");
    },
    modal(data) {
      console.log("modal aperto stronzetto");
      this.openmodal=true;
      this.storiadaeliminare=data;
    },
    cambiafascia(data) {
      this.numerofascia=data;
    },
    cambiacategoria(data) {
      this.numerocategoria=data;
    },
    modal2() {
      console.log("modal aperto stronzetto");
      this.numerofascia=0;
      this.numerocategoria=0;
      this.openmodal2=true;
    },
    exitmodal() {
      this.openmodal=false;
      this.openmodal2=false;
    },
    eliminastoria() {
      Vue.prototype.$appName.splice(this.storiadaeliminare,1);
      this.items=JSON.parse(JSON.stringify(this.$appName));
      this.openmodal=false;
    },
    creazionestoria(data) {
        Vue.prototype.$numerostoria =data;
        Vue.prototype.$appName2=JSON.parse(JSON.stringify(Vue.prototype.$appName));
      this.$router.push('Creationstory');
    },
    creazionestorianuova() {
      var a= { message: 'Bar',categoria:this.numerocategoria,fascia:this.numerofascia, giochi: [
  { src:'Creationquiz',modificato: false, message: "colesterolo",url:"./gattino.jpg", opzioni: [
  { domanda: '',
  soluzione: 0,
  argomento:[' ']
  }]  }
  ] };
  console.log("qui");
    Vue.prototype.$appName2=JSON.parse(JSON.stringify(this.items));
    Vue.prototype.$numerostoria=this.items.length;
    Vue.prototype.$appName.push(a);
    this.$router.push('Creationstory');
    console.log(this.$appName[this.$numerostoria].categoria);
    }
  },
    mounted: function() {
      console.log("ho montato qua")
    this.items=JSON.parse(JSON.stringify(this.$appName));
    console.log(this.items);
  }

}
</script>
