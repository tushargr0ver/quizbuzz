import Quiz from '../models/quizModel.js'

async function saveQuiz(newQuiz){
   
    try{
        const quiz = new Quiz(newQuiz)

        await quiz.save()
        console.log("Quiz succesfully saved");
        
        return 1

    }catch(err){
        console.log("Error in saving quiz",err);
        return 0
}
}
export default saveQuiz