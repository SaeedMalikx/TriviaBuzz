<template>
<div >
    <div class="container text-center">
            <router-link to="/questionintro"><button @click="gettimequestion()" class="btn-danger btn-lg">Start BuzzRound</button></router-link>
            <br/>
            <br/>
            <select v-model="buzz" class="form-control">
                <option disabled value="">Please select # of Questions</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
            <br/>
            <h1>Category</h1>
            <select v-model="cat" class="form-control">
                <option disabled value="">Please select Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Books</option>
                <option value="11">Film</option>
                <option value="12">Music</option>
                <option value="13">Musical Theaters</option>
                <option value="14">Television</option>
                <option value="15">Video games</option>
                <option value="16">Board Games</option>
                <option value="17">Science and Nature</option>
                <option value="18">Computers</option>
                <option value="19">Math</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Comics</option>
            </select>
            <br/>
            <select v-model="diff" class="form-control">
                <option disabled value="">Please select difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <br/>
            <router-link to="/practicequestion"><button class="btn-danger btn-lg">Start Normal</button></router-link>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
        cat: "",
        diff: "",
        buzz: ""
    }
  },
  computed: {
      statecat(){
          return this.$store.state.cat
      },
  },
  methods: {
      gettimequestion(){
        this.$store.commit('gettimeattack')
      },
      getquestion(){
        this.$store.commit('getquestion')
      },
      setdifficulty(){
        this.$store.commit('changecategory', this.cat)  
      },
      changediff(){
        this.$store.commit('changediff', this.diff)
      },
      setbuzzamount(){
          this.$store.commit('setbuzzamount', this.buzz)
      }
  },
  watch: {
      cat(){
        this.setdifficulty()  
      },
      diff(){
          this.changediff()
      },
      buzz(){
          this.setbuzzamount()
      }
  }
}
</script>