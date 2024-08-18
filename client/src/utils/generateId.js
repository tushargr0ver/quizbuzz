const alphabets = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]


function generateId(){
    let uniqueIdArray
    for (let index = 0; index < 6; index+2) {
        uniqueIdArray[index] = alphabets[Math.floor(Math.random()*26)]
        uniqueIdArray[index+1] = `${Math.floor(Math.random()*10)}`
    }

    const uniqueId = uniqueIdArray.join('')
    return uniqueId

}

export default generateId