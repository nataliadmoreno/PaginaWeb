function CardRazasPerros(props) {
    return(
        <li className="breedCard">
                    <div className="contenedorImagen">
                    <img src={props.imagen} alt={props.nombreRaza} />
                </div>
                <span className="breedTitle">{props.nombreRaza}</span>
                <ul className="animations">
                    <li>
                        <i className="fas fa-heart"></i>
                        {props.numeroLikes}
                    </li>
                    <li>
                        <i className="far fa-comment"></i>
                        {props.numeroComments}
                    </li>
                    <li>
                        <i className="fas fa-eye"></i>
                        {props.numeroViews}
                    </li>
                </ul>
        </li>
    )
}

export default CardRazasPerros;