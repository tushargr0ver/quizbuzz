import bcrypt from 'bcrypt'
import saveUser from '../config/saveUser.js';
import User from '../models/userModel.js';

//later add errors for client side

async function userValidation(name,email,password){
        const userAlreadyExists = await User.findOne({email:email})
        if(userAlreadyExists)
        {
                return 0
        }


        try{
                const hashedPassword = await bcrypt.hash(password,10)
                const user = {name:name,email:email,password:hashedPassword}
                await saveUser(user)
               
                return 1
        }catch(err)
        {
               console.log(err);
               
        }
        
        
}

export default userValidation