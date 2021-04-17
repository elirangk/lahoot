<template>
  <div class="q-pa-lg">
    <h1> User </h1>
    <h5>here will be your quiz LIST </h5>
    <q-btn @click="goToNewQuiz()" color="blue">משחק חדש</q-btn>

    <div class="row">
    <q-card v-for="(quiz, quizId) of quizzes" :key="quizId" class="q-pa-md">
      <h6> # {{quiz.quizNum}} </h6>
      <h5> {{quiz.title}} </h5>
      <q-btn>delete</q-btn>
      <q-btn>edit</q-btn>
      <q-btn @click="goToQuiz(quiz.quizId)" label="Go To Quiz"/>
    </q-card>
    </div>




  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "User",
  data() {
    return {
      quizNum: '',
      question:{},
      questionType:['boolean','multiple','text','range'],
      quizzes:[{quizNum:1, title:'bible walk', quizId:'333', type:'boolean'},
      {quizNum:2, title:'birthday boy', quizId:'345', type:'multiple'}]
    }
  },

  computed: mapState('quizzes', ['quizzes', 'quiz']),

  methods:{
    ...mapActions('quizzes', ['getItems','deleteItem','updateQuiz' ]),
    goToQuiz(id){
      this.$router.push(`/quiz/${id}`)
    },
    goToNewQuiz(){
      this.$router.push('/user/:id/new-quiz')
    }

  },
  created(){
    //get all quizzes NAMES and Ids of SPECIFIC user
  }
}
</script>

<style scoped>

</style>