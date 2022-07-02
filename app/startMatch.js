const startMatch = () => {
    const table = getElementOnDocument(".tabela");
    table.setAttribute("style", "visibility: hidden");

    const starting = () => {
        (action.textContent = "Jogo em andamento") &&
            table.setAttribute("style", "visibility: visible");
            window.scrollTo(0, document.body.scrollHeight);
    }

    const reload = () => {
        window.scrollTo(0, 0);
        location.reload();
    };

    const action = getElementOnDocument(".botao .botao-acao");
    action.addEventListener("click", () => {
        action.textContent === "Aperte para iniciar" ?
            (
                starting()
            ) :
        action.textContent === "Jogo em andamento" ?
            (
                alert("Necessário acabar partida atual.")
            ) :
            (
                reload()
            )
    })
}

startMatch();
