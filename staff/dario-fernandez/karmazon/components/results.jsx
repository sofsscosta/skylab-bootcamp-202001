function Results ({ results, onClick }){
    return <ul className="list">
        {results.map(result => <Article key={result.id} result={ result } onClick= { onClick } />)}
    </ul>
        
}