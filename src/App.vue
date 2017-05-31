<template>
    <nav class="nav has-shadow">
        <div class="container">
            <div class="nav">
            
            <a class="nav-item is-tab" @click="getquestion()">Start Game</a>
            <a class="nav-item is-tab right">SCORE: {{score}}</a>
            
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      score: this.$store.state.score
    }
  },
}
</script>

<style>

</style>
