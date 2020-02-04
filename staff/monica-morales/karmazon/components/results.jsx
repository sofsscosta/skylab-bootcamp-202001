function Results ({results, onItemClick}){
    return <ul className = "results">
         {results.map(result => <Item item = {result}
         onClick = {onItemClick}/>)}
    </ul>
}