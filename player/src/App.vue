<template>
  <div>
    <div
      class="flex justify-center fixed right-6 z-10 p-4 h-20 w-1/4 text-gray-800 text-xl font-sans font-extrabold bg-white rounded-b-lg shadow-md"
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
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  sockets: {
    connect() {
      console.log("socket connected");
    },
    userAuth(user) {
      console.log(user);
      this.username = user;
    },
  },
  data: function() {
    return {
      username: "",
      progress: "0",
      game: [
        {
          name: "start",
          route: "/",
        },
        {
          name: "info",
          route: "info",
        },
        {
          name: "start",
          route: "/",
        },
      ],
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
