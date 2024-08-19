import mongoose from "mongoose";


const scoreSchema = new mongoose.Schema({
  name: {
    type: String
  },
  score: {
    type: Number                  
  }
})


const quizContentSchema = new mongoose.Schema({
  question:{
    type:String,
    required:true
  },
  options:{
    type:String,
    required:true
  },
  answer:{
    type:Number,
    required:true
  }
})




const quizSchema = new mongoose.Schema({
    organizerName:{
        type:String,
        required:true
    },
    organizerEmail: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/ 
  },
  quizContent: {
    type:[quizContentSchema]
  },
   timeInMinutes: {
    type: Number,
    required: true, 
  },
  uniqueId: {
    type: String,
    required: true
  },
  quizStartDateTime:{
    type:String,
    required:true
  },
  quizEndDateTime:{
    type:String,
    required:true
  },
  scores:{
    type: [scoreSchema]
  }
});

const Quiz = mongoose.model('Quiz',quizSchema)

export default Quiz