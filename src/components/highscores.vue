<template>  
    <div>   
        <div class="container col-sm-6 col-sm-offset-3">
            <h2 class="text-center"> 20 Questions</h2>
            <table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="score in highscores20">
                    <td>{{score.name}}</td>
                    <td>{{score.score}}</td>
                </tr>
                </tbody>
            </table>
            <h2 class="text-center"> 30 Questions</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="score in highscores30">
                    <td>{{score.name}}</td>
                    <td>{{score.score}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
    
    mounted() {
        this.gethighscores()
    },
    methods: {
        gethighscores(){
            this.$store.dispatch('gethighscores')
        }
    },
    computed: {
        highscores20(){
            return this.$store.state.highscores20
        },
        highscores30(){
            return this.$store.state.highscores30
        }
    }
}


</script>

<style> 
table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    text-align: left;
    padding: 8px;
}

tr{background-color: #f2f2f2}

th {
    background-color: #8724d3;
    color: white;
}
</style>