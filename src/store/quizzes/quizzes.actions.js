import database from '../../middleware/firebase/database'

/// Actions is allowed to speak directly with  DB

export default {

    getItems: async ({ commit }) => {
        const items = await database.read({entity:'quizzes'});
        commit('setItems', items)
    },

    insertItem: async ({ state, commit}) => {
        const quiz = {}
        Object.assign(quiz, state.quiz)

        quiz.id = (await database.create({entity:'quizzes', item:quiz})).key

        // commit('resetEditedItem')
        commit('addQuiz', quiz)
    }
}

