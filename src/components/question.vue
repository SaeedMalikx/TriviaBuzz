<template>
    <div >  
        <div class="container text-center">
            <div>
                <h2 v-html="timedquestion.question"></h2>
                <ul id="menulist" class="col-sm-6 col-sm-offset-3">
                    <li class="btn-info btn-lg" v-html="timedquestion.correct_answer" @click="markcorrect()"></li>
                    <li class="btn-info btn-lg" v-html="timedquestion.incorrect_answers[0]" @click="markincorrect()"></li>
                    <li class="btn-info btn-lg" v-html="timedquestion.incorrect_answers[1]" @click="markincorrect()"></li>
                    <li class="btn-info btn-lg" v-html="timedquestion.incorrect_answers[2]" @click="markincorrect()"></li>
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
      markcorrect(){
        this.$store.commit('markcorrect')
        this.$store.commit('nextcq')
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
        timedquestion(){
        return this.$store.state.timedquestion.results[this.$store.state.cqnumber]
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