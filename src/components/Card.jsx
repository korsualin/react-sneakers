function Card({title, imageUrl, price, altSneakers}) {
    return(
    <li className="card">
        <img src="/img/favorite.svg" className="favoriteIcon" alt="favorite icon" />
        <img src={imageUrl} className="cardImg" alt={altSneakers} />
        <h2 className="nameSneakers">{title}</h2>
        <div className="addCartContainer">
          <div className="price">
            <span>Цена:</span>
            <strong>{price}</strong>
          </div>
          <img src="/img/addcart.svg" className="addIcon" alt="add cart" />
        </div>
      </li>
    )
}

export default Card;