<template>
<div >  
    <div v-for="post in posts.results">
        <h1>{{post.question}}</h1>
        <ul id="menulist">
            <li><button class="btn red" @click="markcorrect()"><span>{{post.correct_answer}}</span></button></li>
            <li><button class="btn red"><span>{{post.incorrect_answers[0]}}</span></button></li>
            <li><button class="btn red"><span>{{post.incorrect_answers[1]}}</span></button></li>
            <li><button class="btn red"><span>{{post.incorrect_answers[2]}}</span></button></li>
        </ul>
        <button class="button outline" @click="getquestion()"> Next Question</button>
    </div>
</div>
</template>

<script>
export default {
    updated() {
        this.sortlist()
    },
    methods: {
      getquestion(){
        this.$store.commit('getquestion')
      },
      markcorrect(){
        this.$store.dispatch('nextquestion')
      },
      sortlist(){
        var list, i, switching, b, shouldSwitch;
        list = document.getElementById("menulist");
        switching = true;
        while (switching) {
        switching = false;
        b = list.getElementsByTagName("LI");
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
        }
      }
    },
    computed: {
        posts(){
        return this.$store.state.posts
        },
    }
}
</script>

<style>


</style>