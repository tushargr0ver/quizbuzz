function currentTime(){

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1)
    const day = (currentDate.getDate())
    const hours = (currentDate.getHours())
    const minutes = (currentDate.getMinutes())
    return({
        year:year,
        month:month,
        day:day,
        hours:hours,
        minutes:minutes
    })

}

export default currentTime