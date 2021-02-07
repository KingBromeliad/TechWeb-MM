<template>
<body class="flex flex-row justify-end bg-fixed bg-cover bg-no-repeat h-screen w-screen" style="background-image: url(http://localhost:3000/Asset2.svg)">

  <img class="<div w-1/2 m-10 h-auto bottom-0 left-0 mt-80" src="http://localhost:3000/Dino1.svg" >

  <div class="w-1/2 h-1/2 flex flex-col bg-white rounded-3xl m-10 text-black text-center text-6xl font-sans font-bold">
  <p class="m-auto">{{text}}</p>
  </div>

  <div class=" bottom-20 mr-20">
        <button @click="Continue()" class="flex items-center justify-center px-8 py-6 border border-transparent rounded-md shadow-sm text-white text-6xl text-center font-extrabold text-white0 bg-gray-900 hover:bg-gray-800">
 {{option}}
        </button>
      </div>

</body>

</template>
<script>
export default {
    props: {
        game : Array,
        position: Number
    },
    computed: {
        text : function(){
            if (this.game[this.position] != null) {
            return this.game[this.position].text[this.line]
            } else return "loading..."
        },
        option : function(){
            if (this.game[this.position] != null) {
            return this.game[this.position].option[this.line]
            } else return "..."
        },
    },
    data : function(){
        return {
        line: 0,
        }
    },
    methods : {
 Continue(){
     if (this.line < (this.game[this.position].text.length -1)) { this.line++ }
 }
    } 
}
</script>