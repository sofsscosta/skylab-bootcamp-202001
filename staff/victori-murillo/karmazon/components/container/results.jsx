function Results({ results, onClickItem, toggleHeart, view }) {
  return (
    <ul className="results">
      {view === "search" &&
        results.map((item, index) => {
          return (
            <Item
              key={index}
              item={item}
              onClickItem={onClickItem}
              toggleHeart={toggleHeart}
            />
          );
        })}

      {view === "favorites" &&
        results.map((item, index) => {
          return (
            <Detail
              key={index}
              result={item}
              onClickItem={onClickItem}
              toggleHeart={toggleHeart}
            />
          );
        })}
    </ul>
  );
}
