document.addEventListener("DOMContentLoaded", function () {
    const senha = document.querySelector("#senha")
    const senha2 = document.querySelector("#senha2")

    function comparar() {
        if (senha.value != senha2.value) {
            senha2.setCustomValidity("A senha não confere")
        } else {
            senha2.setCustomValidity('')
        }
    }

    senha.onchange = comparar
    senha2.onkeyup = comparar


    const btn = document.querySelector("#btn")
    const explosao = document.querySelector("#explosao")
    const body = document.querySelector("#body")

    btn.addEventListener("click", explosão)

    function explosão() {
        explosao.src = "images/explosao.gif"
        setTimeout(() => {
            explosao.src = ""
            btn.remove()
        }, 600)


    }
})
