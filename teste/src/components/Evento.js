function Evento() {
    function meuEvento() {
        window.alert("Botão ativado")
    }

    return (
        <div>
            <p>CLique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento