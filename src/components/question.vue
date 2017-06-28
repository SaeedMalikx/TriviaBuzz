<template>
    <div >  
        <div class="container text-center">
            <div v-for="post in posts.results" v-bind:key="post">
                <h1>{{post.question}}</h1>
                <ul id="menulist" class="col-sm-6 col-sm-offset-3">
                    <li class="btn-info btn-lg" @click="markcorrect()">{{post.correct_answer}}</li>
                    <li class="btn-info btn-lg">{{post.incorrect_answers[0]}}</li>
                    <li class="btn-info btn-lg">{{post.incorrect_answers[1]}}</li>
                    <li class="btn-info btn-lg">{{post.incorrect_answers[2]}}</li>
                </ul>
            </div>
        </div>
        <button class="btn-danger btn-lg center-block" @click="getquestion()"> Next Question</button>
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
.maincontainer{
    margin-top: 10vh;
}

</style>