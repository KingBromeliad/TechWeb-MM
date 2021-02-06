<template>
  <div>
    <div v-for="(q, j) in this.domande" :key="q.domanda">
      <h1>{{ q.domanda }}</h1>
      <div v-for="(arg, index) in q.argomento" :key="arg">
        <input
            type="radio"
            :id="index"
            :value="index"
            v-model="chosenAnswers.risposta[j]"
        />
        <label :for="arg"> {{ arg }} </label>
      </div>
    </div>
    <button 
        class="bg-blue-500 px-4 py-2 transition duration-100 ease-in-out text-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed mt-1 rounded" 
        @click="checkAnswers"
    >
        Check Answers
    </button>
    <button 
        class="bg-blue-500 px-4 py-2 transition duration-100 ease-in-out text-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed mt-1 ml-1 mr-1 rounded" 
        v-if="result"
        @click="next()"
    >
        Next
    </button>
  </div>
</template>

<script>
import router from '../router'
export default {
  props: {
    quiz: Object,
  },
  data: function () {
    return {
      domande: [
        {
          domanda: "Quali sono animali?",
          argomento: ["pangolino", "rabarbaro", "piatto", "naso"],
          soluzione: 0,
        },
        {
          domanda: "Altra Domanda?",
          argomento: ["A", "B", "C", "D"],
          soluzione: 2,
        },
        {
          domanda: "Come mi chiamo?",
          argomento: ["Bob", "Fred", "Pippo", "Pluto"],
          soluzione: 1,
        },
      ],
      chosenAnswers:{
        risposta : []
      },
      result: false
    };
  },
  methods: {
    checkAnswers: function() {
        for(var i = 0; i < this.domande.length; i++) {
            if(this.domande[i].soluzione != this.chosenAnswers.risposta[i]) {
                console.log(this.domande[i].soluzione, "  ", this.chosenAnswers.risposta[i]);
                alert("OOPS, c'è qualcosa di sbagliato nella domanda: " + this.domande[i].domanda);  
                this.result = false;
            } 
        }
        alert("Bravissim* ce l'hai fatta!");
        this.result = true;
    },
    next: function() {
      router.push('/final');
    } 
  }
};
</script>

<style>
</style>