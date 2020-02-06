function Results({ results, onClickItem, toggleHeart }) {

    return <ul className="results">

        {results.map((item, index) => {
            return <Item key={index} item={item} onClickItem={onClickItem} toggleHeart={toggleHeart} />
        })}
    </ul>
}