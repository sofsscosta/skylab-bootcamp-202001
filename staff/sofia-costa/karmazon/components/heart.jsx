function Heart(props){
    return <i onClick={()=> props.onClick(props.id)} className="far fa-heart"></i>
}