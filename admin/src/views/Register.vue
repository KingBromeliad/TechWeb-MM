<template>
  <div>
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div
        class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
      >
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Registrati</h1>
          <form action="#" method="POST" v-on:submit="signUp">
            <input
                type="text"
                id="name"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Nome"
            />
            <input
                type="text"
                id="username"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="username"
                placeholder="Username"
            />

            <input
                type="password"
                id="pass"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
            />
            <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
            />

            <button
                type="submit"
                class="w-full text-center py-3 rounded bg-green hover:bg-green-dark focus:outline-none my-1"
            >
                Crea Account
            </button>
          </form>
        </div>

        <div class="text-grey-dark mt-6">
          Already have an account?
          <a
            class="no-underline border-b border-blue text-blue"
            href="#/login/"
          >
            Log in </a
          >.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import router from '../router'
export default {
  methods: {
    signUp: (e) => {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("pass").value;
        console.log(name + username + password);
        axios.post("http://localhost:3500/api/register", {name, username, password})
        .then(function (response) {
            console.log(response);
            console.log("hello");
            router.push('/login');
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>