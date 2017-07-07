<template>
    <div >  
        <div class="container text-center">
            <div v-for="post in practicequestion.results" v-bind:key="post">
                <h2 v-html="post.question"></h2>
                <ul id="menulist" class="col-sm-6 col-sm-offset-3">
                    <li class="btn-info btn-lg" v-html="post.correct_answer" @click.once="markcorrect()"></li>
                    <li class="btn-info btn-lg" v-html="post.incorrect_answers[0]" @click="markincorrect()"></li>
                    <li class="btn-info btn-lg" v-html="post.incorrect_answers[1]" @click="markincorrect()"></li>
                    <li class="btn-info btn-lg" v-html="post.incorrect_answers[2]" @click="markincorrect()"></li>
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
      markincorrect(){
          this.$store.commit('markincorrect')
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
        practicequestion(){
        return this.$store.state.practicequestion
        },
    }
}
</script>

<style>
.maincontainer{
    margin-top: 10vh;
}
h1 {
    word-wrap: break-word;
}
</style>