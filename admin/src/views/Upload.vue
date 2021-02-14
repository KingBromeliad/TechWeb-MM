<template>
  <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify center items-center z-50 ">
  <div class="block py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <div class= "sm:items-center text-center space-y-2">
  <button @click="caricaimmagine()" class="px-16 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Crea</button>
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
</template>

<script>

export default {
  data(){
    return {
      show:true
    }
  },

      mounted:function() {
        console.log("montato");
      },

  sockets: {
    },
  methods: {
    caricaimmagine() {
      console.log("ciao");
  },
}
};
</script>

<style>
</style>
