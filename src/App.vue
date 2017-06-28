<template>
<div>
  <div class="navbar">
    <div class="navcontainer">
      <button class="btn btn-primary">Score:{{score}}</button>
      <p class="filler"></p>
      <router-link to="/"><button class="btn btn-primary">Select Category</button></router-link>
      <router-link to="/difficulty"><button class="btn btn-primary">Difficulty:{{difficulty}} </button></router-link>
    </div>
  </div>
  <div class="maincontainer">
    <router-view></router-view>
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
body {
  background: #F09819; 
  background: -webkit-linear-gradient(to left, #F09819 , #EDDE5D); 
  background: linear-gradient(to left, #F09819 , #EDDE5D); 
  background-size: cover;
}

.navbar {
  display: flex;
  align-items: center;
  position: fixed;
  background-color: #212121;
  top: 0;
  width: 100%;
  flex-wrap: wrap;
  z-index: 5;
}

.filler {
  flex-grow: 1;
}
.navcontainer {
  display: flex;
  width: 60%;
  margin: auto;
  align-items: center;
}

ul li {
  list-style: none;
  height: 10x;
  background-color: red;
  margin-top: 15px;
  text-align: center;
  transition: all .5s ease;
  cursor: pointer
}



</style>
