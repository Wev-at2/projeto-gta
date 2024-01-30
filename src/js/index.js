const botao = document.querySelector(".gta-btn__platform");
const elementoPlataformas = document.querySelector(".gta-btn__platform .platforms");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});


