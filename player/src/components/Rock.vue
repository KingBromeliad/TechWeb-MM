<template>
  <div 
    :class="rotation"
    @click="Rotate()"
    class="flex items-center justify-items-center transform"
  >
    <img src="http://localhost:3000/Rock.png" alt="rock" />
  </div>
</template>
<script>
export default {
  name: "rock",
  props: {
      initialAngle : Number
  },
  data: function() {
    return {
      clicked: true,
      angle: 0
    };
  },
  computed: {
    
    rotation: function() {
      let x;
      let y;
      y = this.initialAngle + this.angle +1;
      switch (y) {
        case 0:
          x = "rotate-0";
          break;
        case 1:
          x = "rotate-90";
          break;
        case 2:
          x = "rotate-180";
          break;
        case 3:
          x = "-rotate-90";
          break;
        case 4:
            x = "rotate-0"
      }
                return x;
    },
  },

  methods: {
    Rotate() {
      if (this.clicked) this.angle -= 1;
      else this.angle += 1;
      this.clicked = !this.clicked;
    },
  },
};
</script>
