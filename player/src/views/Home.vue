<template>
  <div class="grid place-items-center w-screen h-screen">
    <div class="flex-col place-content-center h-4/5 w-2/5">
      <div class="flex place-content-center text-center">
        <p class="text-7xl font-semibold">Benvenuto!</p>
      </div>
      <div class="space-y-8 flex-col place-content-center bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl">
        <div class="pt-10 text-center">
          <qrcode-stream @decode="onDecode"></qrcode-stream>
        </div>
        <div class="pb-10 flex place-content-center">
          <button class="h-16 w-80 bg-black rounded-lg text-white text-4xl font-medium shadow-lg">Inizia l'avventura!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    onDecode(decodedString){
      alert(decodedString);
    }
  }
}
</script>
