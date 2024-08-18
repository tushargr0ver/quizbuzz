import Quiz from "../models/quizModel.js";

async function saveScores(result){

   const results = {
      name:result.name,
      score:score
   }
   
   try{
      const updatedScore = await Quiz.findOneAndUpdate(result.quizId,
         
            { $push: { scores: results } }, 
            { new: true, useFindAndModify: false }
            
         
      )
      console.log("Submitted",updatedScore);
      
      


   }catch(err){
      console.log("Not submitted",err);
      
   }

   
}

export default saveScores