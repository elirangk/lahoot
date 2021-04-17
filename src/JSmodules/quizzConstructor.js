export default {
   printQuiz
}

const questions = [
    new BooleanQuestion('God is a DJ?'),
    new MultipleChoiceQuestion('What\'s my age?', [10,20,30,40]),
    new TextQuestion(),
    new RangeQuestion()
]

class BooleanQuestion {
    constructor(description) {
        this.description = description
    }

    printChoices() {
        console.log('true')
        console.log('false')
        //return or print

    }
}

class MultipleChoiceQuestion {
    constructor(description, options){
        this.description = description
        this.options = options
    }

    printChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index+1}. ${option}`)

            //return or print
        })
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description
    }

    printChoices(){
        console.log('____')
        //return or print

    }
}

class RangeQuestion{
    constructor(description) {
        this.description = description
    }

    printChoices(){
        console.log('minimum is' + minValue + 'maximu, is ' + maxValue)
        //return or print
    }
}

function printQuiz(questions) {
    questions.forEach(question =>{
        console.log(question.description)
        //return or print
        question.printChoices()
        console.log("")
        //return or print
    })
}

printQuiz(questions)
