function onSub(params) {
    if (!params.name.value) {
        alert("NAME is required.")
        foco("divName")
        params.name.focus()
        return false
    }

    if (!params.email.value) {
        alert("EMAIL is required.")
        foco("divEmail")
        params.email.focus()
        return false
    }

    if (!params.age.value) {
        alert("AGE is required.")
        foco("divAge")
        params.age.focus()
        return false
    }

    if (!params.recommend.value) {
        alert("Choose an option.")
        foco("divRecommend")
        return false
    }

    if (!params.like.value) {
        alert("Choose an option.")
        foco("divLike")
        params.like.focus()
        return false
    }

    const validaCheckbox = 
    [
    verificaCheckbox("front"),
    verificaCheckbox("back"),
    verificaCheckbox("data"),
    verificaCheckbox("security"),
    verificaCheckbox("nothing")
    ].some(Boolean)

    if (!validaCheckbox) {
        alert("Check all that apply.")
        foco("divFuture")
        return false
    }
    return true
}

function foco(nome) {
    const elemento = document.querySelector(`#${nome}`)
    console.log(elemento);
    if (elemento) {
        elemento.classList.add("redFocus")
        setTimeout(() => {
            elemento.classList.remove("redFocus")
        }, 2000);
    }
}

function verificaCheckbox(id) {
    const checkbox = document.querySelector(`#${id}`)
    if (checkbox.checked) {
        return true
    } else {
        return false
    }
}