import jsonwebtoken from "jsonwebtoken";
import { configDotenv } from "dotenv";

function jwt(email){
    const user = {email:email}
    configDotenv()
    const accessToken = jsonwebtoken.sign(user,process.env.ACCESS_TOKEN_SECRET)
    console.log(accessToken);
    
}

export default jwt