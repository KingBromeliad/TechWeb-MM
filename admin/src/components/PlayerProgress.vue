<template>
  <div>
      <div class="text-center">
          <h1 class="text-2xl text-black font-bold">{{ player.playerId }}</h1>
            <p class="text-base text-gray-500"> 
               <!-- {{ player.text }} -->
                Punteggio corrente: {{ player.punti }}
            </p>
            <div v-if="image != ''">
                <img class="container" :src='image'>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    player: Object,
    image: String
  },
};
</script>

<style>
</style>