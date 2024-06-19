import styles from './Card.module.scss';

function Card({title, imageUrl, price, altSneakers, clickAdd}) {
    return(
    <li className={styles.card}>
        <img src="/img/favorite.svg" className={styles.favoriteIcon} alt="favorite icon" />
        <img src={imageUrl} className={styles.cardImg} alt={altSneakers} />
        <h2 className={styles.nameSneakers}>{title}</h2>
        <div className={styles.addCartContainer}>
          <div className={styles.price}>
            <span>Цена:</span>
            <strong>{price}</strong>
          </div>
          <img src="/img/addcart.svg" className="addIcon" alt="add cart" onClick={clickAdd}/>
        </div>
      </li>
    )
}

export default Card;