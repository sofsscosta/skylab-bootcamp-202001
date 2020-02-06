function Results ({results, onItemClick}){
    return  <ul className = 'results'> 
            {results.map(result => <Item key = {result.id} item = {result}
            onClick = {onItemClick}/>)}
        </ul>




}