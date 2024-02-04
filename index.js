const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const hours = document.getElementById('hours')

let time = new Date().getSeconds()
let minute = new Date().getMinutes()
let hour = new Date().getHours()
setInterval(()=>{
    if(time < 59){
        time++
    }
    else{
        time = 0
        minute < 59 ?(
        minute++

): 
        minute = 0
        (hour < 24? hour++ :hour = 0)
        
    }
    seconds.innerHTML = time
    minutes.innerHTML = minute
    hours.innerHTML = hour
}, 1000)