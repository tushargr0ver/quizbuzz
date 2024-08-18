

import jsonwebtoken from "jsonwebtoken"

function authenticateToken(req,res,nex){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token){
        return res.sendStatus(401)
    }
    jsonwebtoken.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if (err) return res.sendStatus(403)
        req.user = user
        nex()
    })
    
}

export default authenticateToken