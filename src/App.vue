<template>
<div>
  <div class="navbar">
    <div class="navcontainer">
      <router-link to="/"><img src="./assets/triviabuzz.png" alt=""></router-link>
      <p class="filler"></p>
      <button class="btn btn-primary">{{countdown}}</button>
      <button class="btn btn-primary">Score:{{score}}</button>
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
  methods: {
      getquestion(){
        this.$store.commit('getquestion')
      }
  },
  computed: {
    score(){
      return this.$store.state.score
    },
    difficulty(){
      return this.$store.state.diff
    },
    countdown(){
      return this.$store.state.countdown
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
img {
  width: 60%;
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

.maincontainer {
  margin-top: 10vh;
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

@media only screen and (max-width: 500px) {
    .navcontainer {
        width: 100%;
    }
    button {
      font-size: 50px;
    }
    img {
      width: 40%;
    }
}


</style>
