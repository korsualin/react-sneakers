import styles from './CartItem.module.scss';

export default function CartItem({src, alt, nameSneakers, price}) {
    return(
        <li className={styles.cartItem}>
            <img src={src} className={styles.cartImg} alt={alt} />
            <div className={styles.descriptionItem}>
                <p className={styles.nameSneakers}>{nameSneakers}</p>
                <div className={styles.price}>
                    <strong>{price}</strong>
                    <img src="/img/deletecart.svg" className={styles.deleteIcon} alt="delete cart" />
                </div>
            </div>
        </li>
    );
}