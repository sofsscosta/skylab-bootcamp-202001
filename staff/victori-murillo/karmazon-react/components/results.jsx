function Results({ results, onClickItem }) {
    return <ul className="results">
        {results.map((item, index) => {
            return <Item key={index} item={item} onClickItem={onClickItem} />
        })}
    </ul>
}