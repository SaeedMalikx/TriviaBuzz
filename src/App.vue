<template>
<div>
    <button class="button outline">{{score}}</button>
    <router-link to="/question"><button class="button outline">Questions</button></router-link>
    <router-link to="/shop"><button class="button outline">Shop</button></router-link>
    <router-view></router-view>
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

button{
  padding: 1.1rem 1.5rem;
  margin: 1rem 0;
  background: #111111;
  color: #f5f5f5;
  border-radius: 2px;
  border: none;
  font-size: 1.3rem;
  transition: all .2s ease;
}

.btn:hover, .btn:focus {
  background-color: #27ae60;
}

.btn > * {
  position: relative;
}

.btn span {
  display: block;
  padding: 12px 24px;
}




html {
  position: relative;
  height: 100%;
}

body {
  margin-top: 10%;
  background-color: #ecf0f1;
  color: #34495e;
  font-family: Trebuchet, Arial, sans-serif;
  text-align: center;
}

h2 {
  font-weight: normal;
}



.btn.red {
  background-color: #e74c3c;
}

.btn.red:hover, .btn.red:focus {
  background-color: #c0392b;
}

ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  text-align: center;
}
li {
    display: inline-block;
    margin: 0 1em;
}
button.outline {
  padding: 1.1rem 3.5rem;
  background: none;
  color: #111111;
  border: 1.5px solid #111111;
}

</style>
