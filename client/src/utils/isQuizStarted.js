


import CurrentTime from './currentTime.js'

const currentTime = CurrentTime()

function isQuizStarted(quizLimit){
    
    if(currentTime.year==quizLimit.year){
        if(currentTime.month==quizLimit.month){
            if(currentTime.day==quizLimit.day){
                if(currentTime.hours==quizLimit.hours){
                    if(currentTime.minutes==quizLimit.minutes){
                        return false
                    }else if(currentTime.minutes<quizLimit.minutes) return false
                    else return true
                }else if(currentTime.hours<quizLimit.hours) return false
                else return true
            }else if (currentTime.day<quizLimit.day) return false
            else return true
        }else if(currentTime.month<quizLimit.month) return false
        else return true
        
    }else if(currentTime.year<quizLimit.year) return false
    else return true    

}

// console.log(
// (isQuizStarted({
//     year:2024,
//     month:8,
//     day:19,
//     hours:19,
//     minutes:8
// })))

export default isQuizStarted