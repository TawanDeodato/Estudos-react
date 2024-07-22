import { useState } from 'react'

function Form() {
  function cadastrarUsuario(evt) {
    evt.preventDefault();
    console.log(`O Usuário ${name} foi cadastrado com a senha ${senha}`)
  }

  const [name, setName] = useState()
  const [senha, setSenha] = useState()

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome: "
            onChange={(evt) => setName(evt.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha: </label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite a sua senha: "
            onChange={(evt) => setSenha(evt.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
