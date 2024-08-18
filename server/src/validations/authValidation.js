import bcrypt from 'bcrypt'
import User from '../models/userModel.js'
async function authValidation(email,password){

    const user = await User.findOne({email:email})
    if(user){
        if(await bcrypt.compare(password,user.password)){
            return 1
            
        }
       
    }
   return 0
        
    }

export default authValidation