import Vue from 'vue'
import Vuex from 'vuex'

import quizzes from './quizzes'
import questions from './questions'
import users from './users'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    quizzes,
    users,
    questions
  }
})
