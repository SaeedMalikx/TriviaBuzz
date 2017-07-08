<template>
<div >
    <div class="container text-center">
            <h1>    Hello</h1>
            <form class="form-inline">
                <div class="form-group">
                    <label>Name:</label>
                    <input type="text" class="form-control" v-model="playername">
                </div>
            </form>
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