function Favourites({ results, onBackButtonClick }) {
    return <div>
        {results.map((result, index) => {
            return <Detail vehicle={result.vehicle} style={result.style} maker={result.maker} collection={result.collection} onBackButtonClick={onBackButtonClick} key={index} />
        })}
    </div>
}