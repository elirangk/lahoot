import database from '../../middleware/firebase/database'

/// Actions is allowed to speak directly with  DB

export default {
    getItems: async ({ commit }) =>{
        const items = await database.read({entity:'questions'});
        commit('setItems', items)
    },

    deleteItem: async ({ state, commit}) => {
        await database.remove({entity: 'contracts', id: state.itemId});
        const itemId = state.itemId;
        //commit('resetItemId')
        commit('deleteItem', itemId)
    },

    updateItem:  ({ state, commit}) => {
        const item = {}

        Object.assign(item, state.editedItem)
        item.id = state.editedItemId;

         database.update( {entity:'contracts', id: item.editedItemId, item})

        //make sure there is NO ITEM & NO ID in the state
        commit('resetEditedItem')
        commit('resetEditedItemId')

        commit('editItem' ,item)

    },

    insertItem: async ({ state, commit}) => {
        const question = {}
        Object.assign(item, state.question)

        item.id = (await database.create({entity:'contracts', item:item})).key

        // commit('resetEditedItem')
        commit('insertItem', item)
    },

    // setEditItemById: async ({ state, commit }) => {
    //     let item = {}
    //     if (state.items.length && state.items.find(item => item.id === state.editedItemId)) {
    //         item = state.items.find(item => state.editedItemId);
    //     } else {
    //         item = await database.getById({entity: 'contractsTable', id: state.editedItemId})
    //     }
    //     commit('setEditedItem', item)
    // }


}

