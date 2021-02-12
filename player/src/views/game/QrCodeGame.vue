<template>
  <div>
    <div class="grid place-items-center w-screen h-screen">
      <div class="flex-col place-content-center h-4/5 w-2/5">
        <div class="flex place-content-center text-center">
          <p class="text-4xl font-semibold">
            Inquadra un codice per decodificare
          </p>
        </div>
        <div
          class="space-y-8 flex-col place-content-center bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl"
        >
          <div class="pt-10 text-center">
            <qrcode-stream @decode="onDecode"></qrcode-stream>
          </div>
          <div class="pb-10 flex place-content-center">
            <p class="h-16 w-80 text-white text-2xl font-medium">
              Mancano {{ this.numberOfStrings }} da decodificare
            </p>
            <p
              v-if="this.numberOfStrings == 0"
              class="h-16 w-80 text-white text-2xl font-medium"
            >
              Hai decodificato tutto!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QrCodeGame",
  data: function () {
    return {
      stringsToDecode: [],
      numberOfStrings: 0,
    };
  },
  methods: {
    onDecode: function (decodedString) {
      this.stringsToDecode.forEach((string) => {
        if (string.text == decodedString) {
          string.decoded = true;
          this.numberOfStrings--;
        }
      });
    },
  },
  sockets: {
    qr_code_game(data) {
      data.forEach((string) => {
        let newString = {
          text: string,
          decoded: false
        };
        this.stringsToDecode.push(newString);
      });
      this.numberOfStrings = this.stringsToDecode.length;
    }
  },
};
</script>

<style>
.qrcode-stream__camera,
.qrcode-stream__pause-frame {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    background-size: cover;
    max-width: inherit !important;
    max-height: inherit !important;
}
.qrcode-stream__inner-wrapper {
    position: inherit !important;
    max-width: inherit !important;
    max-height: inherit !important;
    z-index: inherit !important;
}
</style>