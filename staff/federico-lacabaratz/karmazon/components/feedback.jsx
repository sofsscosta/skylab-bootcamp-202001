function Feedback( {level, message} ) {
        super(document.createElement('p'))
    return <p className={`feedback feedback--${level}`}>{message}</p>
}
