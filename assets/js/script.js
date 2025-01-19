/*Primer ejercicio*/

const imagen1= document.querySelector("#img-pag1")

imagen1.onclick = () => {
    if (imagen1.style.borderColor === 'red') {
        imagen1.style.border = '2px solid transparent';
    } else {
        imagen1.style.border = '2px solid red';
    }
}




