<template>
  <div
    class="text-center container mx-auto flex justify-around sm:flex-row h-screen"
  >
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
        <div v-for="(item, index) in newjson.game" :key="index" class="w-1/4 p-4">
          <div
            class="bg-white px-2 py-4 rounded-lg shadow-lg text-center border-2 border-purple-600"
          >
            <div class="mb-3">
              <img class="w-auto mx-auto rounded-full" src="item.url" alt="" />
            </div>
            <h2 class="text-xl font-medium text-gray-700">
              {{ index }} {{ item.name }}
            </h2>
            <h4
              v-if="item.modificato != true"
              class="text-xl font-medium text-gray-700"
            >
              da modificare
            </h4>
            <button
            v-if="item.modificabile!=false"
              @click="modifica(index)"
              class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              Modifica
            </button>
            <button
              @click="elimina(index)"
              class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              Elimina
            </button>
          </div>
        </div>

        <div class="w-1/4 p-4">
          <div
            class="bg-white px-2 py-4 rounded-lg shadow-lg text-center border-2 border-purple-600"
          >
            <div class="mb-3">
              <img
                class="w-auto mx-auto rounded-full"
                src="./gattino.jpg"
                alt=""
              />
            </div>
            <button
              class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              Aggiungi gioco
            </button>
          </div>
        </div>
      </div>
      <div class="h-1/5 flex sm:flex-row">
        <div class="w-1/5 flex sm:flex-col justify-center">
          <h3> nome della storia </h3>
          <input
          type="text"
            v-model="newjson.namestory"
            placeholder="inserisci un nome"
          />
        </div>
        <div class="w-1/5 flex sm:flex-col justify-center">
          <h3> nome della storia </h3>
          <input
          type="text"
            v-model="name"
            placeholder="inserisci un nome"
          />
        </div>
        <div class="w-1/5 flex sm:flex-col justify-center">
          <h3> nome della storia </h3>
          <input
          type="text"
            v-model="name"
            placeholder="inserisci un nome"
          />
        </div>
        <div class="w-1/5 flex sm:flex-col justify-center">
          <h3> nome della storia </h3>
          <input
          type="text"
            v-model="name"
            placeholder="inserisci un nome"
          />
        </div>
        <div class="w-1/5 py-2 flex sm:flex-col">
          <button
            @click="salvastoria()"
            class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            salva
          </button>
          <button
            @click="escistoria()"
            class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            esci
          </button>
        </div>
      </div>
    </div>

    <div
      class="text-center flex h-screen justify-center sm:flex-col w-1/4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
    >
      <div class="p-8">
        <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <h1 class="text-xl font-medium text-purple-700">Elenco giochi</h1>
        </div>
      </div>

      <div
        class="h-full flex flex-row flex-wrap justify-center sm:flex-row border overflow-auto"
      >
        <div v-for="(item, index) in giochi" :key="index">
          <div
            class="p-10"
          >
            <div
              class="block bg-white p-10 px-6 py-6 rounded-lg shadow-lg text-center"
            >
              <div class="mb-3">
                <img
                  class="w-auto mx-auto rounded-full"
                  src="./gattino.jpg"
                  alt=""
                />
              </div>
              <h2 class="text-xl font-medium text-gray-700">
                {{ item.name }}
              </h2>
              <span class="text-blue-500 block mb-5">{{ index }}</span>
              <button
                class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                @click="premuto(index)"
              >
                Aggiungi
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
            <div
              v-for="(item, index) in newjson.game[numerogioco].text"
              :key="index"
              class="flex flex-row"
            >
              <input
                type="text"
                v-model="newjson.game[numerogioco].text[index]"
                class="focus:ring-indigo-500 w-full focus:border-indigo-500 rounded sm:text-sm border-2 border-purple-600"
                placeholder="aggiungi testo"
              />
            </div>
            <button
              @click="aggiungirisposta()"
              class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
          </button>
            <button
              class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              @click="chiudidialoghi()"
            >
              Chiudi
            </button>
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
import Vue from "vue";
export default {
  data() {
    return {
      openmodal: false,
      numerocategoria: "",
      numerofascia: "",
      nomestoria: "",
      numerogioco: "",
      name: "",
      listastorie: "",
      items: "",
      newjson: "",
      giochi: [
        {
          src: "Creationstart",
          modificabile: true,
          name: "start",
          route: "/start",
          text: [
            "Ciao cucciolo d'uomo, benevenuto nel pianeta dei dinosauri!",
            "Qui vivono felicemente più di mille dinosauri, siamo tutti amici",
          ],
          option: [
            ">>",
            ">>"
          ],
          images: {
            singleCharacter: true,
            character: "dinosaurStory/Dino1.svg",
            characters: ["", "", ""],
            background: ["dinosaurStory/Asset2.svg"]
          }
        },
        {
          modificabile:false,
          name: "PathGame",
          route: "/pathgame",
          images: {
            backgroundPath: "dinosaurStory/backgroundPath.png",
            rock: "dinosaurStory/Rock.svg"
          }
        },
        {
          modificabile:true,
          src:"Creationquiz",
          name: "question",
          route: "/question",
          domande: [
            {
              domanda: "Il diplodoco è...",
              argomento: ["molto alto", "carnivoro", "cornuto"],
              soluzione: 0
            },
            {
              domanda: "L'Allosauro si nutre di?",
              argomento: ["Sassi", "Erba", "Carne"],
              soluzione: 2
            }
          ],
          images: {
            backgroun: "dinosaurStory/StoneTablet.svg",
            singleQuestionImage: false,
            questionImage: "dinosaurStory/Triceratopo.svg",
            questionImages: [
              "dinosaurStory/Diplodoco.png",
              "dinosaurStory/Allosauro.svg"
            ]
          }
        },
        {
          modificabile:true,
          src : "CreationQrGame",
          name: "QrScanner",
          route: "/qrCodeGame",
          images: {
            background: "Lens.png"
          }
        },
        {
          src:"Creationvideo",
          name: "Video",
          route: "/video",
          resourceType: false,
          title: ["Impronte Dinosauri"],
          source: [""],
          images: {
            background: "dinosaurStory/StoneTablet.svg",
            image: "dinosaurStory/Footprints.png"
          }
        },
        {
          src:"Creationimage",
          modificabile:true,
          name: "ImageUpload",
          route: "/imageGame",
          image_or_text: true,
          images: {
            "background": "dinosaurStory/StoneTablet.svg"
          }
        },
        {
          modificato: false,
          categoria: 0,
          fascia: 0,
          url: "./gattino.jpg",
          src: "Creationgames",
          name: "Games",
          route: "/Games",
          text: [
            "Ciao sono Doco il Diplodoco!",
            "Ehilà sono Ally l'Allosauro!"
          ],
          option: [{ domanda: "", soluzione: 0, argomento: [" "] }],
        },
        {
          modificabile:true,
          src:"Creationtris",
          name: "Tris",
          route: "/game",
          images: {
          background: "dinosaurStory/StoneTablet.svg",
            symbol: "dinosaurStory/Rock.png"
          }
        },
      ],
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
    premuto(data) {
      console.log(data);
      this.newjson.game.push(this.giochi[data]);
      console.log(this.newjson.game);
    },
    aggiungirisposta() {
      this.newjson.game[this.numerogioco].text.push(" ");
    },
    aggiungidialoghi(data) {
    this.numerogioco=data;
    this.openmodal=true;
    console.log(this.newjson.game[this.numerogioco].text);
    },
    chiudidialoghi(){
      this.openmodal=false;
    },
    modal() {
      console.log("modal aperto stronzetto");
      this.openmodal = true;
    },
    exitmodal() {
      this.openmodal = false;
    },
    elimina(data) {
      console.log(data);
      this.newjson.game.splice(data, 1);
    },
    modifica(data) {
      Vue.prototype.$SavedFile=JSON.parse(JSON.stringify(this.newjson));
      Vue.prototype.$numeroquiz=data;
      console.log(Vue.prototype.$numeroquiz);
    this.$router.push(this.newjson.game[data].src);
    },

    salvastoria() {
      Vue.prototype.$SavedFile=JSON.parse(JSON.stringify(this.newjson));
      this.eliminajson(Vue.prototype.$oldName);
      this.inviajson(this.newjson);
      Vue.prototype.$oldName=JSON.parse(JSON.stringify(Vue.prototype.$SavedFile.namestory));
        let newname=JSON.parse(JSON.stringify(Vue.prototype.$SavedFile.namestory));
        let lista ;
          this.axios.get("http://localhost:3500/SendStory").then((response) => {
              console.log(response.data);
              lista=response.data;
              lista[this.$numerostoria].name=newname;
              console.log(lista[this.$numerostoria].name);
              console.log(lista);
              let filejson=lista;
              this.axios.post('http://localhost:3500/writeStoryList', {
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
          });
          console.log(lista);

    },

    escistoria() {
      console.log("storia salvata");
      Vue.prototype.$SavedFile = JSON.parse(JSON.stringify(this.$SavedFile2));
      this.$router.push("Creation");
    },

    eliminajson (data) {
      let filejson=data;
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

    inviajson (data) {
      let filejson=JSON.parse(JSON.stringify(data));
      this.axios.post('http://localhost:3500/writeStory', {
        filejson
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    },
  },

  mounted: function () {
    console.log("siamo nella View creation");
    console.log(Vue.prototype.$SavedFile);
    this.newjson=JSON.parse(JSON.stringify(Vue.prototype.$SavedFile));
    Vue.prototype.$SavedFile2=JSON.parse(JSON.stringify(Vue.prototype.$SavedFile));
    Vue.prototype.$oldName=JSON.parse(JSON.stringify(Vue.prototype.$SavedFile.namestory));
    console.log("ricevuto");
  },
};
</script>
