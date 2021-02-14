<template>
  <div>
    <chat v-show="chatActive" :slideOver="chatActive"></chat>
    <div
      class="flex justify-center fixed left-6 z-10 p-4 h-20 w-1/3 text-gray-800 text-xl font-sans font-extrabold bg-white rounded-b-lg shadow-md"
    >
      <router-link class="mr-10 mt-auto mb-auto text-center" to="/"
        >Home</router-link
      >

      <a @click="nextView()">o</a>

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
    <router-view :data="this.game[this.progress]" @gameCompleted="nextView()" />
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
      this.game = response.data.game;
    });
  },
  computed: {
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
  },
  data: function() {
    return {
      username: "",
      progress: -1,
      chatActive: false,
      game: [],
      help_interval: 30,
      elapsedTime: 0,
      player_id: "",
      timer: undefined,
    };
  },

  methods: {
    //MAIN NAVIGATION: WORK IN PROGRESS
    nextView() {
      if (this.progress < this.game.length - 1) {
        this.progress++;
        this.reset();
        this.start();
        this.$router.push(this.game[this.progress].route);
      }
    },
    start() {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
        if (this.elapsedTime > this.help_interval * 1000) {
          this.askForHelp;
        }
      }, 1000);
    },
    stop() {
      clearInterval(this.timer);
    },
    reset() {
      this.elapsedTime = 0;
    },
    askForHelp() {
      this.stop();
      this.reset();
      this.$socket.client.emit("needs_help", this.player_id);
    },
  },
  sockets: {
    get_player_Id(id) {
      this.player_id = id;
    },
  },
};
</script>
