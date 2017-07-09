<template>
    <div>
        <div class="selectcontainer">
        <router-link to="/questionintro"><img class="selectimg" @click="getbuzz20()"src="../assets/buzz20.png" alt=""></router-link>
        <router-link to="/questionintro"><img class="selectimg" @click="getbuzz30()"src="../assets/buzz30.png" alt=""></router-link>
        <router-link to="/main"><img class="selectimg" src="../assets/justplay.png" alt=""></router-link>
        </div>
    </div>

</template>

<script>
export default {
  methods: {
      getbuzz20(){
        this.$store.commit('getbuzz20')
      },
      getbuzz30(){
        this.$store.commit('getbuzz30')
      },
  }
}
</script>

<style>

.selectimg {
    width: 100%;
}
.selectcontainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>