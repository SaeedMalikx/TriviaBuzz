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
            <router-link to="/question"><button @click="startbuzzround()" class="btn-danger btn-lg">Start BuzzRound</button></router-link>
    </div>
</div>
</template>
<script>
import Firebase from 'firebase'

const config = {
  };
Firebase.initializeApp(config);
let firebasescore = Firebase.database().ref('scores')

export default {
  data () {
    return {
        playername: "Anonymous",
    }
  },
  methods: {
      startbuzzround(){
        this.$store.commit('updatecountdown')
        this.sethighscore()
      },
      sethighscore(){
          setTimeout(() => {
            firebasescore.push({
              'name': this.playername,
              'score': this.$store.state.score 
                })
          }, 5000)
      }
  }
}
</script>