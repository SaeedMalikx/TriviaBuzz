<template>
<div>
    <button class="button outline" @click="getquestion()">Start Game</button>
    <button class="button outline">{{score}}</button>
    <transition name="fade"><question></question></transition>
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
.scorepanel{
  height: 100px;
  background: black;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to{
  opacity: 0
}


.pull-right {
  float: right;
}

.pull-left {
  float: left;
}
</style>
