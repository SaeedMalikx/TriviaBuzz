<template>
<div>
    <button class="button outline">Score:{{score}}</button>
    <router-link to="/"><button class="button outline">Select Category</button></router-link>
    <router-link to="/difficulty"><button class="button outline">Difficulty:{{difficulty}} </button></router-link>
    <router-view></router-view>
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
  },
  computed: {
    score(){
      return this.$store.state.score
    },
    difficulty(){
      return this.$store.state.diff
    }
  }
}
</script>

<style>
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
  background-color: #272727;
  color: white;
  font-family: Trebuchet, Arial, sans-serif;
  text-align: center;
}


.btn.red {
  background-color: #e74c3c;
}
.btn.green {
  background-color: #4CAF50;
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
  color: white;
  border: 1.5px solid white;
}
select {
  width: 40%;
  height: 45px;
  padding: 10px 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background: #F1F1F1;
  border-radius: 2px;
  border: 1px solid #a4a4a4;
  font-size: 1.3rem;
  box-sizing: border-box;
  transition: all .2s ease;
}
</style>
