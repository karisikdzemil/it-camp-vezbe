let number = document.getElementById("prvi").innerText = 0
console.log(typeof(number))
c = setInterval(() => {
   a = number += 1
   document.getElementById("prvi").innerText = a
   for (i = 0;i < a; i++){
    if(a === 60){
        console.log("jeste")
        
    } 
}
}, 1);


let number2 = document.getElementById("drugi").innerText = 0
console.log(typeof(number))



setInterval(() => {
   a2 = number2 += 1
   document.getElementById("drugi").innerText = a2
}, 1000);

