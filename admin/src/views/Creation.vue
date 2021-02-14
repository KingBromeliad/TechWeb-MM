<template>
  <div>
    <button @click="openmodal=true"> celeste</button>
    <div class="space-y-4">
      <div
        v-for="(item, index) in lista"
        :key="index"
        class="block py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
      >
        <!--
          <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
          src="item.url"
          alt="Woman's Face"
        />
        -->
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">
              {{ item.name }}
            </p>
            <p  class="text-gray-500 font-medium">
              {{ item.edizione }}
            </p>
            <p v-if="item.archiviato!=false" class="text-gray-500 font-medium">
              archiviato
            </p>
            <p v-else class="text-gray-500 font-medium">
              disponibile
            </p>
          </div>
          <button
            @click="modal3(index)"
            class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            opzioni
          </button>
          <button
            @click="modal(index)"
            class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Elimina
          </button>
        </div>
      </div>
      <div
        class="block py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
      >
        <div class="sm:items-center text-center space-y-2">
          <button
            @click="modal2()"
            class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Crea
          </button>
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
    <router-link
      href="#"
      :to="{ name: 'Creationquiz' }"
      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >Creationquiz</router-link
    >
    <router-link
      href="#"
      to="/team"
      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >guardiamo i Team</router-link
    >
    <router-link
      href="#"
      to="/Gamequiz"
      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >gioco strano</router-link
    >
    <router-link
      href="#"
      to="/Games"
      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >quiz</router-link
    >
    <button @click="modal()">apri il modalsdfasdf</button>
    <div
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify center items-center z-50"
      v-if="openmodal3"
    >
      <div
        class="block py-16 px-8 mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center"
      >
        <div class="sm:items-center text-center space-y-2">
          <div class="space-y-0.5 flex flex-col">
            <p class="text-lg text-black font-semibold">
              sei sicuro di voler eliminare la storia?
            </p>
            <p class="text-gray-500 font-medium">
              Non sarà possibile recuperarla
            </p>
            <div class="flex flex-row">
              <button
                @click="dublica()"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                duplica
              </button>
              <button v-if="lista[storiadamodificare].archiviato!=true"
                @click="archivia()"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                archivia
              </button>
              <button v-else
                @click="archivia()"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                Rendi disponibile
              </button>
              <button
                @click="creazionestoria()"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                modifica
              </button>
              <button
                @click="exitmodal()"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                annulla
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify center items-center z-50"
      v-if="openmodal"
    >
      <div
        class="block py-16 px-8 mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center"
      >
        <div class="sm:items-center text-center space-y-2">
          <div class="space-y-0.5 flex flex-col">
            <p class="text-lg text-black font-semibold">
              sei sicuro di voler eliminare la storia?
            </p>
            <p class="text-gray-500 font-medium">
              Non sarà possibile recuperarla
            </p>
            <div class="flex flex-row">
              <button
                @click="eliminastoria()"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                elimina
              </button>
              <button
                @click="exitmodal()"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                annulla
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify center items-center z-50"
      v-if="openmodal2"
    >
      <div
        class="block py-16 px-8 mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center"
      >
        <div class="sm:items-center text-center space-y-2">
          <div class="space-y-0.5 flex flex-col">
            <div class="flex flex-row">
              <h3> nome della storia </h3>
              <input
              type="text"
                v-model="storyname"
                placeholder="inserisci un nome"
              />
            </div>
            <p class="text-lg text-black font-semibold">
              Crea una nuova storia
            </p>
            <p class="text-lg text-black font-semibold">
              Scegli la fascia alla quale il gioco è dedicato
            </p>
            <div class="flex flex-row">
              <button
                @click="cambiafascia(0)"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                singolo
              </button>
              <button
                @click="cambiafascia(1)"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                coppia
              </button>
              <button
                @click="cambiafascia(2)"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                gruppo
              </button>
            </div>
            <p class="text-lg text-black font-semibold">
              Scegli il numero di giocatori
            </p>
            <div class="flex flex-row">
              <button
                @click="cambiacategoria(0)"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                bambini
              </button>
              <button
                @click="cambiacategoria(1)"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                ragazzi
              </button>
              <button
                @click="cambiacategoria(2)"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                adulti
              </button>
            </div>
            <div class="flex flex-row justify-centr">
              <button
                @click="creazionestorianuova()"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                Crea
              </button>
              <button
                @click="exitmodal()"
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                annulla
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="openmodal || openmodal2 || openmodal3"
      class="absolute h-full inset-0 z-40 opacity-25 bg-black"
    ></div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      openmodal3: "",
      storyname:"ddd",
      storiadaeliminare: 0,
      storiadamodificare:0,
      numerocategoria: 0,
      numerofascia: 0,
      openmodal: false,
      openmodal2: false,
      jsoncreato:"",
      name: "cagnolinonononoe",
      listastorie: "",
      items: "",
      lista: [
      {
      name:"clausoladdddddddddddddd",
      edizione:"ciaolo",
      },
      {
        name:"clausola",
        edizione:"ciaolo",
      },
      {
        name:"clausola",
        edizione:"ciaolo",
      }
    ]
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
      console.log("ciao");
    },
    modal(data) {
      console.log("modal aperto stronzetto");
      this.openmodal = true;
      this.storiadaeliminare = data;
    },
    cambiafascia(data) {
      this.numerofascia = data;
    },
    cambiacategoria(data) {
      this.numerocategoria = data;
    },
    modal2() {
      console.log("modal aperto stronzetto");
      let numero=this.lista.length+1;
      this.storyname="Storia numero "+numero;
      this.numerofascia = 0;
      this.numerocategoria = 0;
      this.openmodal2 = true;
    },
    exitmodal() {
      this.openmodal = false;
      this.openmodal2 = false;
      this.openmodal3=false;
    },
    archivia() {
      this.lista[this.storiadamodificare].archiviato= !this.lista[this.storiadamodificare].archiviato;
    },

    modal3(data) {
      Vue.prototype.$numerostoria=data;
      this.storiadamodificare=data;
      this.openmodal3=true;
    },
    eliminastoria() {
      let filejson=this.lista[this.storiadaeliminare].name;
      this.lista.splice(this.storiadaeliminare, 1);
      this.openmodal = false;
      this.invialistastoria();
      this.axios.post('http://localhost:3500/deleteStory', {
        filejson
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    creazionestoria() {
      let name=this.lista[this.storiadamodificare].name;
      this.meo(name);
    },
    creazionestorianuova() {
      let a={
          archiviato: true,
          name:this.storyname,
          edizione: "ciaolo"
      };
      Vue.prototype.$numerostoria=this.lista.length;
      this.lista.push(a)
      this.invialistastoria();
      this.axios.get("http://localhost:3500/prendiStoria",{
  params: {
    NAME:"Default"
  } }).then((response) => {
          this.jsoncreato=response.data;
          console.log(response.data);
          this.jsoncreato.namestory=this.storyname;
          Vue.prototype.$SavedFile=this.jsoncreato;
          this.$router.push("Creationstory");
          let filejson=this.jsoncreato;
          this.axios.post('http://localhost:3500/writeStory', {
            filejson
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });

      }).catch((errors) => {
          console.log(errors);
      })
    },
    meo(data) {
        this.axios.get("http://localhost:3500/prendiStoria",{
    params: {
      NAME:data
    } }).then((response) => {
            Vue.prototype.$SavedFile=response.data;
            this.$router.push("Creationstory");
            console.log(response);
        }).catch((errors) => {
            console.log(errors);
        })
    },
    invialistastoria () {
      let filejson=JSON.parse(JSON.stringify(this.lista));
      this.axios.post('http://localhost:3500/writeStoryList', {
        filejson
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    getStory() {
        this.axios.get("http://localhost:3500/SendStory").then((response) => {
            console.log(response.data);
            this.lista=response.data;
        }).catch((errors) => {
            console.log(errors);
        })
    },
  },
  mounted: function () {
    this.getStory();
    console.log("ricevuto");
  },
};
</script>
