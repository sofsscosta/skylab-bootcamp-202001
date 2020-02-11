function Avatar({user: {name}, toggleFavorites, onToSearch}) {
  return (
    <div>
      <div className="avatar">
        <button onClick={toggleFavorites}>Favorites</button>
        <button onClick={onToSearch}>Search</button>
      </div>
      <h1>{name}</h1>
    </div>
    
  ) 
}