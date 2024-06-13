export default function Cart() {
    return(
            <div className="overlay">
            <div className="cartContainer">
                <div className="cartTitle">
                <span>Корзина</span>
                <img src="/img/close.svg" className="closeIcon" alt="close cart"></img>
                </div>
                <ul>
                <li className="cartItem">
                    <img src="/img/sneakers/sneakers1mini.png" className="cartImg" alt="sneakers Puma X" />
                    <div className="descriptionItem">
                    <p className="nameSneakers">Кроссовки Puma X Aka Boku Future Rider</p>
                    <div className="price">
                        <strong>8 999 руб.</strong>
                        <img src="/img/deletecart.svg" className="deleteIcon" alt="delete cart" />
                    </div>
                    </div>
                </li>
                <li className="cartItem">
                    <img src="/img/sneakers/sneakers1mini.png" className="cartImg" alt="sneakers Puma X" />
                    <div className="descriptionItem">
                    <p className="nameSneakers">Кроссовки Puma X Aka Boku Future Rider</p>
                    <div className="price">
                        <strong>8 999 руб.</strong>
                        <img src="/img/deletecart.svg" className="deleteIcon" alt="delete cart" />
                    </div>
                    </div>
                </li>
                </ul>
                <div className="cartTotal">
                <div className="total">
                    <span>Итого:</span>
                    <div></div>
                    <strong>21 498 руб.</strong>
                </div>
                <div className="charge">
                    <span>Налог 5%:</span>
                    <div></div>
                    <strong>1074 руб.</strong>
                </div>
                <a className="placeOrder">
                    Оформить заказ
                    <img src="/img/next.svg" className="orderArrow" alt="next arrow" />
                </a>
                </div>
            </div>
            </div>
    );
}