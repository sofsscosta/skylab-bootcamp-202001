
function Results({results, onItemClick}) {
    return(
        <ul className="results">
            {results.map((item, index)=> {
                item.index = index;
                return <Item item={item} onClick={onItemClick} />
            } )}
        </ul>
    )}



    

        


