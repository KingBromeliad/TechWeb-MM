<template>
  <div>
    <div class="bg-white font-sans leading-normal tracking-normal">
      <div class="carousel relative shadow-2xl bg-white">
        <div class="carousel-inner relative overflow-hidden w-full">
          <!--Slide 1-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div class="carousel-item absolute opacity-0" style="height: 50vh">
            <div class="block h-full w-full bg-indigo-500 text-white">
              <!-- TODO: CARICARE IL TITOLO DAL JSON RELATIVO CON LA STRUTTURA PER METTERLO AL POSTO DEL TITOLO -->
              <h1 class="text-5xl text-center">Titolo Storia</h1>
              <p class="text-lg text-center">Esempio di testo avventura</p>
            </div>
          </div>
          <label
            for="carousel-3"
            class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >‹</label
          >
          <label
            for="carousel-2"
            class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >›</label
          >

          <!--Slide 2-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="carousel-item absolute opacity-0" style="height: 50vh">
            <div class="block h-full w-full bg-red-500 text-white">
              <h1 class="text-5xl text-center">Titolo Storia</h1>
              <p class="text-lg text-center">Esempio di testo avventura 2</p>
            </div>
          </div>
          <label
            for="carousel-1"
            class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >‹</label
          >
          <label
            for="carousel-3"
            class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >›</label
          >

          <!--Slide 3-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
            @click="buttonEnable = false"
          />
          <div class="carousel-item absolute opacity-0" style="height: 50vh">
            <div class="block h-full w-full bg-green-500 text-white">
              <h1 class="text-5xl text-center">Titolo Storia</h1>
              <p class="text-lg text-center">Esempio di testo avventura 3</p>
            </div>
          </div>
          <label
            for="carousel-2"
            class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >‹</label
          >
          <label
            for="carousel-1"
            class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >›</label
          >

          <!-- Add additional indicators for each slide-->
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label
                for="carousel-1"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-2"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-3"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >•</label
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div>
      <button 
        class="bg-blue-500 px-4 py-2 transition duration-100 ease-in-out text-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed mt-1 rounded"
        v-if="buttonEnable == false"
        @click="nextView"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: "Storia",
  data: function () {
    return {
      buttonEnable: true,
    };
  },
  methods: {
    nextView: function() {
      //da cambiare con template di gioco giusto
      router.push('/quiz');
    }
  },
};
</script>

<style>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}
#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #2b6cb0; /*Set to match the Tailwind colour you want the active one to be */
}
</style>
