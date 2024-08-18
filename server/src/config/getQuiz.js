import Quiz from "../models/quizModel.js"



async function getQuiz(quizId){
    const result = await Quiz.findOne({uniqueId : quizId})
    if(!result) return null
    const quizData = {
        organizerName : result.organizerName,
        organizerEmail : result.organizerEmail,
        quizQuestions : result.quizContent,
        timeAllowed : result.timeInMinutes,
        startTime : result.quizStartDateTime
    }
    return quizData
}


export default getQuiz