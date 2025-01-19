const select1 = document.querySelector("#opciones1");
const select2 = document.querySelector("#opciones2");
const select3 = document.querySelector("#opciones3");
const btn = document.querySelector("#btn-pag3");
const pSpan = document.querySelector("#span");

btn.addEventListener("click", () => {
  const valor1 = select1.value;
  const valor2 = select2.value;
  const valor3 = select3.value;

  if (
    (valor1 === "9" && valor2 === "1" && valor3 === "1") ||
    (valor1 === "7" && valor2 === "1" && valor3 === "4")
  ) {
    pSpan.innerHTML = "Password correcto";
    pSpan.style.backgroundColor="green";

  } else {
    pSpan.innerHTML = "Password incorrecto";
    pSpan.style.backgroundColor="red";
  }
});
