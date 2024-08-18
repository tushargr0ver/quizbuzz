
import express from 'express'
import jwt from '../utils/jwt.js'
import userValidation from '../validations/userValidation.js'
import authValidation from '../validations/authValidation.js'
import authenticateToken from '../middlewares/authMiddleware.js'
import saveQuiz from '../config/saveQuiz.js'
import saveScores from '../config/saveScores.js'
import getQuiz from '../config/getQuiz.js'
import getScores from '../config/getScores.js'
const Router = express.Router()

Router.post('/signup', (req,res)=>{
    const {name,email,password} = req.body
    const status = userValidation(name,email,password)
    if(status) res.sendStatus(201)
    else res.sendStatus(500)
})

Router.post('/login', (req,res)=>{
    const {email,password} = req.body
   const isValid = authValidation(email,password)
    if(!isValid){ 
        res.status(401).json({error:"Incorrect login credentials"})
        return;
    }
    
   res.status(200).json({message:"Logged in successfully"})

    jwt(email)
})

Router.post('/create-quiz/:quizId',authenticateToken,(req,res)=>{
    const id = require.params.quizId
    const {name,email,quiz,time,dt} = req.body
    
    const newQuiz = {organizerName:name,organizerEmail:email,quizContent:quiz,timeInMinutes:time,uniqueId:id,quizStartDateTime:dt}
   
    
    const isCreated = saveQuiz(newQuiz)
    if(isCreated){
        res.status(200).json({message:"Quiz saved successfully"})
    }else{
        res.status(400).json({message:"Something went wrong"})
    }

})

Router.post('/submit/:quizId', (req,res)=>{
    const quizId = require.params.quizId
    const {name,score} = req.body
    const result = {quizId:quizId,name:name,score:score}

    const isSubmit = saveScores(result)
    if(isSubmit){
        res.status(200).json({message:"Attempted"})
    }else{
        res.status(400).json({message:"Something went wrong"})
    }
})

Router.get('/get-quiz/:id', (req,res)=>{
    const quizId = require.params.id
    const quizContent = getQuiz(quizId)
    if(quizContent){
        res.json(quizContent)
    }else res.status(401)
})

Router.get('/get-scores/:id'), (req,res)=>{
    const quizId = require.params.id
    const scores = getScores(quizId)
    if(!scores) res.status(401)
    else res.json(scores)
}


export default Router