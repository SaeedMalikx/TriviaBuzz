<template>
<div> 
     <ul>
        <li><button @click="changeeasy()" class="btn green"><span>Easy</span></button></li>
        <li><button @click="changemedium()" class="btn green"><span>Medium</span></button></li>
        <li><button @click="changehard()" class="btn green"><span>Hard</span></button></li>
    </ul>
    <router-link to="/question"><button class="button outline">Back to Question</button></router-link>
</div>
</template>

<script>
export default {
    methods: {
        changeeasy(){
        this.$store.commit('changediffeasy')
        }, 
        changemedium(){
        this.$store.commit('changediffmedium')
        },
        changehard(){
        this.$store.commit('changediffhard')
        },
    }
}
</script>

<Style>

</Style>