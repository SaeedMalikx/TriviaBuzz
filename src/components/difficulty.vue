<template>
<div> 
    <div class="container text-center">
        <ul class="col-sm-6 col-sm-offset-3">
            <li @click="changeeasy()" class="btn-success btn-lg">Easy</li>
            <li @click="changemedium()" class="btn-success btn-lg">Medium</li>
            <li @click="changehard()" class="btn-success btn-lg">Hard</li>
        </ul>
    </div>
    <router-link to="/question"><button class="btn-danger btn-lg center-block">Back to Question</button></router-link>
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