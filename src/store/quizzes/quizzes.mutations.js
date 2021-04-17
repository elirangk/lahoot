export default {
// הפונקציות פה מטרתן ליידע את הסטייט בכל רגע נתון מה המצב
    //כך שגם אם ישנן אקשנס שמחכות לתשובות הסטייט מיודע במהירות לגבי השינויים הללו

    //הפונקציה הבאה מלמדת את הסטייט מהם האייטמים הקיימים בDB
    setItems: ((state, items) => state.items = items),

    //הפונקציה הבאה מלמדת אותו באיזה אייטם אנחנו נוגעים כרגע - אבל רק בזיהוי שלו
   setItemId: ((state, id) => state.itemId = id),

    //הפונקציה הבאה מלמדת אותו באיזה אייטם ספציפי מדובר כולל כללל התכולה שלו
    setItem: ((state, item) => state.item = item),

    //הפוקנציה הבאה מלמדת אותו לשכוח שהיה איידי
   resetItemId: ((state,id) => state.itemId = ''),

    //הפונקציה הבאה מלמדת אותו לשכוח את כל האייטם
    // resetEditedItem: ((state) =>{
    //     //איך מוחקים את כל הנתונים מאוביקט, רצים עליו ומוחקים אותו
    //     for (const key in state.editedItem) {
    //         state.editedItem[key] = ''
    //     }
    //     //לא ברורה לי השורה הזאת - למה לא להסתפק במחיקה כמו בשורה הקודמת
    //     delete state.editedItem.id;
    // }),

    editItem: ((state, item) => {
        //findIndex is lazy, and finds only the FIRST data to satisfy the terms
        const index = state.items.findIndex(p => p.id === item.id)
        state.items.splice(index,1,item)
    }),

    deleteItem: ((state, quizId) =>{
        const index = state.quizzes.findIndex(p => p.id === quizId)
        state.items.splice(index, 1)
    }),

    addQuiz: ((state, quiz) => {
        state.quizzes.push(quiz)
    })


//xd
}