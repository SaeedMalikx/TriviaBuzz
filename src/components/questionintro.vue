<template>
<div >
    <div class="selectcontainer text-center">
            <img class="introimg" src="../assets/score.png" alt="">
            <br/>
            <input type="text" class="inputform" placeholder="Enter Name for Highscore" v-model="playername">
            <br/>
            <router-link to="/question"><button @click="startbuzzround()" class="btn-danger btn-lg">Start BuzzRound</button></router-link>
    </div>
</div>
</template>
<script>

export default {
  data () {
    return {
        playername: "",
    }
  },
  methods: {
      startbuzzround(){
        this.$store.dispatch('startbuzz')
      },
      setplayername(){
          this.$store.commit('setplayername', this.playername)
      }
  },
  watch: {
      playername(){
          this.setplayername()
      }
  }
}
</script>

<style>
.introimg {
    width: 300px;
    height: 150px;
}

.inputform{
    width: 20%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

@media only screen and (max-width: 500px) {
    .inputform {
        width: 80%;
    }
}
</style>