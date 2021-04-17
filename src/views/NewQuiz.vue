<template>
  <q-page-container class="q-pa-md" dir="rtl">

    <q-card flat class="row justify-evenly">
        <h5 class="col-md-2" style="font-family: 'Roboto-Light'">יצירת משחק חדש</h5>
        <q-input rounded v-model:value="quizTitle" label="שם החידון" class="col-md-4"></q-input>
        <q-btn color="green" @click="saveQuiz()" label="סיום" icon="fas fa-check" class="col-md-3"/>
    </q-card>

      <q-card v-for="(question, index) of quizQuestions" :key="index" class="q-ma-md" style="max-width: 1000px" rounded>
        <q-input v-model:value="question.content" label="כתוב שאלה" rounded class="q-ma-md" style="max-width: 800px"/>
        <q-btn-toggle
            label="בחר סוג שאלה"
            v-model:value="question.questionType"
            toggle-color="primary"
            :options="[ {label: 'כן/לא', value: 'yesNo'}, {label: 'אמריקאי', value: 'multiple'}, {label: 'טקסט', value: 'text'}, {label: 'טווח', value: 'range'} ]">
          <q-tooltip content-class="bg-red"> יש לבחור סוג שאלה</q-tooltip>
        </q-btn-toggle>

          <q-item-section v-if= "questionType === 'yesNo'" key="questionType">שלום באמת</q-item-section>
          <q-item-section v-if= "questionType === 'multiple'" key="questionType">שלום אמיתי</q-item-section>
        <br>

        <q-btn @click="deleteQuestion(index)" icon="fas fa-trash" flat></q-btn>
        <q-btn @click="editQuestion(index)" icon="fas fa-pen" flat></q-btn>
      </q-card>

      <q-btn @click="addQuestion" class="q-ma-md">שאלה חדשה</q-btn>
      <br>
  </q-page-container>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "NewQuiz",
  data(){
      return {
        questionType: null,
        quizTitle: "",
        quizQuestions: [],
      }
  },

  ...mapActions('quizzes', ['insertItem']),

  methods:{

    addQuestion(){
      this.quizQuestions.push({});

    },

    deleteQuestion(index){
      this.quizQuestions.splice(index, 1);

    },

    saveQuiz() {
      const quiz = this.buildNewQuiz()
      //this.insertItem(quiz);

      // this.$router.push(`/user/${this.userId}/`);
    },

    buildNewQuiz() {
      const quiz = {
        name: this.quizTitle,
        questions: []
      }
      for (let index in this.quizQuestions) {
        quiz.questions.push(
            {
              questions: this.quizQuestions[index]
            }
        );
      }
      return quiz;
    }
  }
}
</script>

<style scoped>

</style>