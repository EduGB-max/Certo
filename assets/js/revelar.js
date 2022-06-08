document.addEventListener("DOMContentLoaded", function () {
    const revelar = document.querySelector("#revelar")
    const senha = document.querySelector("#senha")

    function revelarSenha() {
        let tipo = senha.getAttribute("type")
        if (tipo === "password") {
            senha.setAttribute("type", "text")
            revelar.setAttribute("class", "bi bi-eye-slash btn")
        }
        else if (tipo === "text") {
            senha.setAttribute("type", "password")
            revelar.setAttribute("class", "bi bi-eye btn")
        }
    }

    revelar.addEventListener("click", revelarSenha)
})