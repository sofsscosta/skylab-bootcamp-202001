function Results ({results, onItemClick, onFavToggle}){
    return  <ul className = 'results'> 
            {results.map(result => <Item key = {result.id} item = {result}
            onClick = {onItemClick} favToggle={onFavToggle} />)}
        </ul>




}