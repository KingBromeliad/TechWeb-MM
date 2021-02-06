<template>
<div class="text-center container mx-auto flex justify-around sm:flex-row h-screen">
  <div class="container w-3/4 flex sm:flex-col h-screen">
    <div class="h-4/25">cfdf</div>
    <div class=" p-8 h-1/10">
    <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center border-2 border-purple-600">
      <h1 class="text-xl font-medium text-purple-700">I giochi </h1>
    </div>
  </div>
    <div class=" h-3/5 flex flex-row flex-wrap justify-center sm:flex-row  border overflow-auto">

<div v-for="(item,index) in items" :key="index" class=" w-1/4 p-4">
<div  class="bg-white px-2 py-4 rounded-lg shadow-lg text-center border-2 border-purple-600">
  <div class="mb-3">
    <img
      class="w-auto mx-auto rounded-full"
      src=item.url
      alt=""
    />
  </div>
  <h2 class="text-xl font-medium text-gray-700">{{index}} {{item.message}}</h2>
  <h4 v-if="item.modificato!=true" class="text-xl font-medium text-gray-700"> da modificare </h4>
  <button @click="modifica(index)" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Modifica</button>
  <button @click="elimina(index)" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" >Elimina</button>
</div>
</div>

<div class=" w-1/4 p-4">
<div class="bg-white px-2 py-4 rounded-lg shadow-lg text-center border-2 border-purple-600">
  <div class="mb-3">
    <img
      class="w-auto mx-auto rounded-full"
      src="./gattino.jpg"
      alt=""
    />
  </div>
  <button class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Aggiungi gioco</button>
</div>
</div>

    </div>
    <div class="h-1/5 flex sm:flex-row ">
      <div class="w-4/5">
        <textarea v-model="nomestoria" placeholder="add multiple lines"></textarea>
      </div>
      <div class="w-1/5 py-2 flex sm:flex-col ">
        <button @click="salvastoria()" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">salva</button>
        <button @click="modal()" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">elimina</button>
        <button @click="escistoria()" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">esci</button>
        <button @click="saveFile()" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">cosirobi</button>
      </div>
    </div>
  </div>

  <div class= "text-center flex h-screen justify-center sm:flex-col  w-1/4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
    <div class=" p-8">
    <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
      <h1 class="text-xl font-medium text-purple-700">Elenco giochi</h1>
    </div>
  </div>

    <div class=" h-full flex flex-row flex-wrap justify-center sm:flex-row  border overflow-auto">
      <div v-for="(item,index) in giochi" :key="index">
  <div v-if="item.categoria===numerocategoria && item.fascia===numerofascia" class=" p-10">
  <div  class="block bg-white p-10 px-6 py-6 rounded-lg shadow-lg text-center">
    <div class="mb-3">
      <img
        class="w-auto mx-auto rounded-full"
        src="./gattino.jpg"
        alt=""
      />
    </div>
    <h2 class="text-xl font-medium text-gray-700">{{item.message}}</h2>
    <span class="text-blue-500 block mb-5">{{index}}</span>
    <button class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" @click="premuto(index)">Aggiungi</button>
  </div>
</div>
</div>

    </div>
  </div>
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
v-if="openmodal"
class="absolute h-full inset-0 z-40 opacity-25 bg-black"
></div>
</div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      openmodal:false,
      numerocategoria:"",
      numerofascia:"",
      nomestoria:"",
      name:'cagnolino',
      listastorie:"",
      items: "",
    giochi: [
      {modificato: false,message:'quiz',categoria:0,fascia:0,url:'./gattino.jpg',src:'Creationsgame',opzioni:
      [{domanda:"qualcosa",risposta:"pompelmo"},
            {domanda:"qualcosa",risposta:"pompelmoneone"},
            {domanda:"qualcosa",risposta:"pompesssssssslmo"}
          ] },
      {modificato: false,message:'niente',categoria:0,fascia:0,url:'./gattino.jpg',src:'Creationquiz',opzioni: [
      { domanda: '',
      soluzione: 0,
      argomento:[' ']
      }] },
      {modificato: false,message:'gioco strano',categoria:0,fascia:0,url:'./gattino.jpg',src:'Creationquiz',opzioni: [
      { domanda: '',
      soluzione: 0,
      argomento:[' ']
      }] }
    ]
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
    premuto(data) {
      console.log(data);
      this.items.push(this.giochi[data]);
      console.log(this.items);
    },
    saveFile() {
        const data = JSON.stringify(this.giochi);
        window.localStorage.setItem('arr', data);
        console.log(JSON.parse(window.localStorage.getItem('arr')));
        localStorage.setItem("names", JSON.stringify(this.giochi));
        console.log("fatto");
  },
    modal() {
      console.log("modal aperto stronzetto");
      this.openmodal=true;
    },
    exitmodal(){
      this.openmodal=false;
    },
    elimina(data) {
      console.log(data);
      this.items.splice(data,1);
    },
    modifica(data) {
      console.log(this.items[data]);
      Vue.prototype.$appName[this.$numerostoria].giochi=JSON.parse(JSON.stringify(this.items));
      Vue.prototype.$numeroquiz =data;
      this.$router.push(this.items[data].src);
    },

    salvastoria() {
      Vue.prototype.$appName[this.$numerostoria].message=this.nomestoria;
      Vue.prototype.$appName[this.$numerostoria].giochi=JSON.parse(JSON.stringify(this.items));
      Vue.prototype.$appName2=JSON.parse(JSON.stringify(this.$appName));
    },

    escistoria() {
      console.log("storia salvata");
      Vue.prototype.$appName=JSON.parse(JSON.stringify(this.$appName2));
      this.$router.push('Creation');
    },

    eliminastoria() {
    this.$router.push('Creation');
    Vue.prototype.$appName.splice(this.$numerostoria,1);
    Vue.prototype.$appName2.splice(this.$numerostoria,1);
    }

  },

  mounted:function() {
    console.log("siamo nella View creation");
    this.items=JSON.parse(JSON.stringify(this.$appName[this.$numerostoria].giochi));
    this.numerofascia=this.$appName[this.$numerostoria].fascia;
    this.numerocategoria=this.$appName[this.$numerostoria].categoria;
    console.log(this.numerofascia);
    console.log(this.numerocategoria);
    console.log(this.$appName);
    console.log(this.$appName2);


  }
}
</script>
