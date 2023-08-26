import Item from "./Item"
function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Nike" lancamento={1998} />
                <Item marca="Adidas" lancamento={2019}/>
                <Item marca="Puma" lancamento={2023}/>
                <Item />
            </ul>
        </>
    )
}

export default List