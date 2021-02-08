<template>
  <div>
    <chat v-show="chatActive" :slideOver="chatActive"></chat>
    <div
      class="flex justify-center fixed left-6 z-10 p-4 h-20 w-1/3 text-gray-800 text-xl font-sans font-extrabold bg-white rounded-b-lg shadow-md"
    >
      <router-link class="mr-10 mt-auto mb-auto text-center" to="/"
        >Home</router-link
      >
      <div class="inline-flex rounded-md shadow">
        <a
          href="#"
          @click="nextView()"
          class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Get started
        </a>
      </div>
      <div class="inline-flex rounded-md shadow ml-1">
        <a
          href="#"
          @click="chatActive = !chatActive"
          class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Chat
        </a>
      </div>
    </div>
    <router-view :data="this.game[this.progress]" />
  </div>
</template>

<script>
import Chat from "./components/Chat.vue";


export default {
  name: "App",
  components: {
    Chat,
  },
  beforeCreate: function() {

 this.axios.get("http://localhost:3500/openStory").then((response) => {
  console.log(response.data)
  this.game = response.data.game;
})

  },
  data: function() {
    return {
      username: "",
      progress: -1,
      chatActive: false,
      game: [],
    };
  },
  methods: {
    //MAIN NAVIGATION: WORK IN PROGRESS
    nextView() {
      if (this.progress < this.game.length - 1) {
                this.progress++;
        this.$router.push(this.game[this.progress].route);
      }
    },
  },
};
</script>
