function Favs ({id, onFavClick, color}) {

    return <div style={{color: color}} className="fav" onClick={event =>{
        event.preventDefault()
        onFavClick(id) 
    }   
    }></div>
}