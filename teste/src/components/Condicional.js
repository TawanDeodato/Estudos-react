import { useState } from 'react'

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(evt) {
        evt.preventDefault()
        setUserEmail(email)
    }
    function limparTela() {
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail: </h2>
            <form>
                <input type='email' placeholder='Digite o seu e-mail...' onChange={(evt) => setEmail(evt.target.value)}/>
                <button type='submit' onClick={enviarEmail}>Enviar</button>
                {userEmail && (
                    <div>
                        <p>O e-mail cadastrado foi {userEmail}</p>
                        <button onClick={limparTela}>Limpar tela</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional