/*segundo ejercicio*/

totalMax=10
const input1=document.querySelector(".input1")
const input2=document.querySelector(".input2")
const input3=document.querySelector(".input3")
const btn=document.querySelector("#btn-pag2")
const span=document.querySelector("#mensaje")

btn.addEventListener("click", () =>{
    const valor1 =Number(input1.value)
    const valor2 =Number(input2.value)
    const valor3 =Number(input3.value)
 const total=valor1+valor2+valor3
    if(total>totalMax){
        span.innerHTML= "Llevas demasiados stickers"
        span.style.backgroundColor="red";
        span.style.color="white";
        
    }
    else{
        span.innerHTML= `Llevas ${total} stickers`
        span.style.backgroundColor="green"
        span.style.color="black"
    
        
    }
    
})