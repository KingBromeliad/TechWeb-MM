<template>
   <div class="grid place-items-center w-screen h-screen ">
    <div class="flex-col place-content-center h-3/5 w-2/5 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl">
      <div class="flex place-content-center text-center ">
        <p class="text-7xl font-semibold">Il tuo punteggio è: {{ punteggio }}</p>
      </div>
      <div class="space-y-8 flex-col place-content-center">
          <p class="text-5xl font-semibold">Congratulazioni!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    punteggio: Number,
  },
};
</script>

<style>
</style>