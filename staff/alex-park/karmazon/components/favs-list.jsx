function FavsList ({results, onItemClick, onFavToggle}) {
    
    return <ul className = "favlist">
         {results.map(result => <Details key={result.id} detailInfo = {result}
         onBack = {onItemClick} onFavToggle={onFavToggle}/>)}
    </ul>
}