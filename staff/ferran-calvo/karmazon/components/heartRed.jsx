function HeartRed(props){
    return <i style={{color:"red"}} onClick={()=> props.onClick(props.id)} className="fas fa-heart"></i>
}