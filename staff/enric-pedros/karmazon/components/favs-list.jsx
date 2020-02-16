
function FavsList ({results, onBack, onFavToggle}) {
    
    return <ul className = "favlist">
        <a href="" onClick={event => {
            event.preventDefault()
            onBack()
        }}>GO BACK</a>
        {results.map(result => <Details key={result.id} detailInfo = {result}
        onBack = {onBack} onFavToggle={onFavToggle}/>)}
    </ul>
}