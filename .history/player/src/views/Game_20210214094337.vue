<template>
  <body
    class="bg-fixed bg-cover bg-center bg-no-repeat min-h-screen"
    v-bind:style="{ 'background-image': background }"
  >
    <div class="grid place-content-center min-h-screen">
      <div class="flex flex-col">
        <div class="flex justify-center items-center mt-0 mr-0 mb-3 ">
          <img :src="symbol" alt="Vue" class="my-0 mr-3 -ml-5 w-20" />
          <h1 class="text-8xl font-bold text-white"><b>Tris!</b></h1>
        </div>

        <board :squares="squares" :winner="winner" @click="click" />

        <div
          class="game-info bg-white rounded-lg text-xl px-2 py-4 text-center shadow"
        >
          <p
            v-if="stepNumber === 0"
            class="flex items-center justify-center m-0"
          >
            Cominciamo! Cucciolo d'uomo inizia, sei la&nbsp;<b
              :class="currentPlayer"
              >{{ currentPlayer }}</b
            >!
          </p>
          <p v-else-if="!!winner">
            Il vincitore è stato:&nbsp;
            <b :class="currentPlayer">{{ currentPlayer }}</b
            >!&nbsp;
            <button
              @click="restart"
              class="bg-white border-white border-solid border-2 cursor-pointer font-semibold text-xs -my-2 mr-0 ml-4 py-2 px-4 uppercase"
            >
              Gioca nuovamente
            </button>
          </p>
          <p v-else-if="stepNumber > 8">
            Parità!&nbsp;
            <button
              @click="restart"
              class="bg-white border-white border-solid border-2 cursor-pointer font-semibold text-xs -my-2 mr-0 ml-4 py-2 px-4 uppercase"
            >
              Gioca nuovamente
            </button>
          </p>
          <p v-else>
            Ora tocca al giocatore&nbsp;
            <b :class="currentPlayer">{{ currentPlayer }}</b
            >!&nbsp;vai.
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          @click="ContinueToNext()"
          class="bg-black hover:bg-gray-700 focus:outline-none rounded-lg font-bold text-center text-white md:text-2xl sm:text-xl p-2 mt-4"
        >
          Continue
        </button>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Game",
  components: {
    Board: () => import("./Board"),
  },
  props: {
    data: Object,
  },
  data() {
    return {
      squares: Array(9).fill(null),
      stepNumber: 0,
      currentPlayer: "X",
      winner: null,
    };
  },
  computed: {
    background: function() {
      return "url(http://localhost:3000/" + this.data.images.background + ")";
    },
    symbol: function() {
      return "http://localhost:3000/" + this.data.images.symbol;
    },
  },
  methods: {
    updateScore() {
      //punteggio aggiornato via via passandoli un valore
      let data = {
        gioco: "intro",
        punti: 1,
      };
      this.$socket.client.emit("update_score", data);
      //console.log(this.score);
    },

    hasWinner() {
      if (this.winner) return true;
      const squares = this.squares;
      const matches = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < matches.length; i++) {
        const [a, b, c] = matches[i];
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          this.winner = [a, b, c];
          return true;
        }
      }
      return false;
    },
    restart() {
      this.squares = Array(9).fill(null);
      this.stepNumber = 0;
      this.winner = null;
    },
    click(i) {
      if (this.squares[i] || this.winner) return;
      this.$set(this.squares, i, this.currentPlayer);
      if (!this.hasWinner()) {
        this.stepNumber++;
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      }
    },
    ContinueToNext() {
      this.$emit("gameCompleted");
    },
  },
};
</script>

<style scoped>
.game-info {
  backdrop-filter: blur(10px);
  background-blend-mode: exclusion;
  color: rgba(17, 17, 17, 1);
}

.game-info .X,
.game-info .O {
  text-shadow: -1px -1px 0 #000b, -1px 1px 0 #000b, 1px -1px 0 #000b,
    1px 1px 0 #000b;
}
.game-info .X {
  color: #258367;
}
.game-info .O {
  color: #ca3d33;
}
.game-info button {
  text-shadow: 0 0 1px #fff, 0 2px 5px #fff5;
  color: #111;
  cursor: pointer;
  outline: none;
  transition: all 0.25s ease;
}
.game-info button:focus,
.game-info button:hover {
  background: #1115;
  border-color: rgba(var(--theme-color));
  box-shadow: 0 0 10px rgba(var(--theme-color), 0.75);
  color: rgba(var(--theme-color));
  text-shadow: -1px -1px 0 #0007, -1px 1px 0 #0007, 1px -1px 0 #0007,
    1px 1px 0 #0007;
}
.game-info button:active {
  background: #1119;
}
</style>
