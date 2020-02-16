
function Results({results, onItemClick, onToggleFav, favorites}) {
    return(
        <ul className="results">
            {results.map((item, index)=> {
                item.index = index;
                const isFavorited = favorites.find(value=> value === item.id)
                return <Item item={item} onClick={onItemClick} onToggleFav={onToggleFav} isFavorited={isFavorited} />
            } )}
        </ul>
    )}



    

        


