function Pessoa({foto, nome, idade, profissao}){
    return(
        <div>
            <img src={foto}></img>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa