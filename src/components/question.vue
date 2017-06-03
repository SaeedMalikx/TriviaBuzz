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
button{
  padding: 1.1rem 1.5rem;
  margin: 1rem 0;
  background: #111111;
  color: #f5f5f5;
  border-radius: 2px;
  border: none;
  font-size: 1.3rem;
  transition: all .2s ease;
}

.btn:hover, .btn:focus {
  background-color: #27ae60;
}

.btn > * {
  position: relative;
}

.btn span {
  display: block;
  padding: 12px 24px;
}




html {
  position: relative;
  height: 100%;
}

body {
  margin-top: 10%;
  background-color: #ecf0f1;
  color: #34495e;
  font-family: Trebuchet, Arial, sans-serif;
  text-align: center;
}

h2 {
  font-weight: normal;
}



.btn.red {
  background-color: #e74c3c;
}

.btn.red:hover, .btn.red:focus {
  background-color: #c0392b;
}

ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  text-align: center;
}
li {
    display: inline-block;
    margin: 0 1em;
}
button.outline {
  padding: 1.1rem 3.5rem;
  background: none;
  color: #111111;
  border: 1.5px solid #111111;
}

</style>