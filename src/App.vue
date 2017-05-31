<template>
<div>
    <nav class="nav has-shadow">
        <div class="container">
            <div class="nav">
            
            <a class="nav-item is-tab" @click="getquestion()">Start Game</a>
            <a class="nav-item is-tab right">SCORE: {{score}}</a>
            
            </div>
        </div>
    </nav>
    <div class="box">  
      <div class="card" v-for="post in posts.results">
          <header class="card-header">
              <p class="card-header-title">
              {{post.question}}
              </p>
          </header>
          <div class="card-content">
              <div class="content">
              <ul class="menu-list" id="menulist">
                  <li><a @click="markcorrect()">{{post.correct_answer}}</a></li>
                  <li><a>{{post.incorrect_answers[0]}}</a></li>     
                  <li><a>{{post.incorrect_answers[1]}}</a></li>       
                  <li><a>{{post.incorrect_answers[2]}}</a></li>
              </ul>
              </div>
          </div>
          <footer class="card-footer">
              <span class="card-footer-item">Difficulty: {{post.difficulty}}</span>
              <a @click="getquestion()" class="card-footer-item">Next Question</a>
          </footer>
        </div>
      </div>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
      getquestion(){
        this.$store.commit('getquestion')
      },
      markcorrect(){
        this.$store.dispatch('nextquestion')
      }
  },
  computed: {
    posts(){
      return this.$store.state.posts
    },
    score(){
      return this.$store.state.score
    }
  }
}
</script>

<style>

</style>
