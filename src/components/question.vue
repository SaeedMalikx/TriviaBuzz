<template>
<div class="box">  
      <div class="card" v-for="post in posts.results">
          <header class="card-header">
              <p class="card-header-title">
              {{post.question}}
              </p>
          </header>
          <div class="card-content">
              <div class="content">
              <ul class="menu-list" id="menulist">
                  <li><a @click="markcorrect()">{{post.correct_answer}}</a></li>
                  <li><a>{{post.incorrect_answers[0]}}</a></li>     
                  <li><a>{{post.incorrect_answers[1]}}</a></li>       
                  <li><a>{{post.incorrect_answers[2]}}</a></li>
              </ul>
              </div>
          </div>
          <footer class="card-footer">
              <span class="card-footer-item">Difficulty: {{post.difficulty}}</span>
              <a @click="getquestion()" class="card-footer-item">Next Question</a>
          </footer>
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