<template>
<div>
    <router-link to="/question"><button @click="getquestion()" class="button outline">Start</button></router-link>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
      getquestion(){
        this.$store.commit('getquestion')
      },
  }
}
</script>