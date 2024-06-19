import styles from './Header.module.scss';

console.log(styles);

export default function Header() {
    return(
        <header>
            <div className={styles.headerLeft}>
                <img height="40" width="40" src="/img/logo.png" className="headerLogo" alt="logo shop" />
                <div className={styles.headerInfo}>
                <span>React Sneakers</span>
                <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li className={styles.cart}>
                    <a href="#">
                        <img src="/img/cart.svg" className="cartIcon" alt="icon cart" />
                        <span>1205 руб.</span>
                    </a>
                    </li>
                    <li className="bookmarks">
                    <a>
                        <img src="/img/bookmarks.svg" className="bookmarksIcon" alt="icon bookmarks" />
                        <span>Закладки</span>
                    </a>
                    </li>
                    <li className="profile">
                    <a>
                        <img src="/img/profile.svg" className="profileIcon" alt="icon profile" />
                        <span>Профиль</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}