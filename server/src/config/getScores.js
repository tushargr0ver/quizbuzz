import Quiz from '../models/quizModel.js'

async function getScores(quizId){

    const result = await Quiz.findOne({uniqueId:quizId})
    if(!result) return null
    const scores = {
        scores:result.scores
    }

    return scores

}

export default getScores