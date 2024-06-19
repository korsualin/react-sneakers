import CartItem from '../CartItem';
import styles from './Cart.module.scss';


// const fullPrice = () => {
//     return()
// }

export default function Cart({addingProduct}) {
    return(
            <div className={styles.overlay}>
            <div className={styles.cartContainer}>
                <div className={styles.cartTitle}>
                <span>Корзина</span>
                <img src="/img/close.svg" className="closeIcon" alt="close cart"></img>
                </div>
                <ul>
                    {addingProduct.map((card) => <CartItem 
                    src={card.src} 
                    alt={card.alt} 
                    nameSneakers={card.title} 
                    price={card.price} />)}
                </ul>
                <div className={styles.cartTotal}>
                <div className={styles.total}>
                    <span>Итого:</span>
                    <div></div>
                    <strong>21 498 руб.</strong>
                </div>
                <div className={styles.charge}>
                    <span>Налог 5%:</span>
                    <div></div>
                    <strong>1074 руб.</strong>
                </div>
                <a className={styles.placeOrder}>
                    Оформить заказ
                    <img src="/img/next.svg" className="orderArrow" alt="next arrow" />
                </a>
                </div>
            </div>
            </div>
    );
}