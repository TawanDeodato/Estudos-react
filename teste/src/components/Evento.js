import Button from "./Button"

function Evento() {
    function meuEvento() {
        window.alert("Botão ativado")
    }

    return (
        <div>
            <p>CLique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro evento" />
        </div>
    )
}

export default Evento