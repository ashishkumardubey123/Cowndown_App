let endDate  = " 02 may 2025 12:28 pm"

document.getElementById("end-date").innerText =endDate
 
let inputs=  document.querySelectorAll("input")

 function clock(){
   
    const end = new Date(endDate)
    const now = new Date()
    let diff =   (end-now)/1000
    if (diff <= 0) return
//  DAYS
    inputs[0].value = (Math.floor(diff/3600/24))
// HOURSE
    inputs[1].value=(Math.floor(diff/3600) %24)
// MINUTS
inputs[2].value=   Math.floor(diff/60)%60
// SECONDS
inputs[3].value=   Math.floor(diff)%60


 }
 clock()

 setInterval(
    
()=>{

    clock()
}, 1000
 )