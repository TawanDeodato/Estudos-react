function SeuNome({ setNome }) {
    return (
        <div>
            <p>Digite seu nome: </p>
            <input type="text" placeholder="Seu nome" onChange={(evt) => setNome(evt.target.value)} />
        </div>
    )
}

export default SeuNome