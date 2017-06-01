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
    <question></question>
</div>
</template>

<script>
import question from './components/question.vue'
export default {
  name: 'app',
  components: {
    'question': question
  },
  data () {
    return {
    }
  },
  methods: {
      getquestion(){
        this.$store.commit('getquestion')
      },
  },
  computed: {
    score(){
      return this.$store.state.score
    }
  }
}
</script>

<style>

</style>
