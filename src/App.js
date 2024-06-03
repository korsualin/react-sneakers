
function App() {
  return (
      <div className="wrapper">
        <div className="overlay">
          <div className="cartContainer">
            <span className="cartTitle">Корзина</span>
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
        <header>
          <div className="headerLeft">
            <img height="40" width="40" src="/img/logo.png" className="headerLogo" alt="logo shop" />
            <div className="headerInfo">
              <span>React Sneakers</span>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
          <nav className="headerRight">
            <ul>
                <li className="cart">
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
      <main>
        {/* <img src="/img/banner.png" className="banners" alt="banner 1" /> */}
        <div className="containerTitle">
          <h1>Все кроссовки</h1>
          <div className="searchContainer">
            <img src="/img/search.svg" className="searchIcon" alt="icon search" />
            <input className="search" placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="sneakersWrapper">
          <ul>
            <li className="card">
              <img src="/img/favorite.svg" className="favoriteIcon" alt="favorite icon" />
              <img src="/img/sneakers/sneakers1.png" className="cardImg" alt="sneakers Puma X" />
              <h2 className="nameSneakers">Кроссовки Puma X Aka Boku Future Rider</h2>
              <div className="addCartContainer">
                <div className="price">
                  <span>Цена:</span>
                  <strong>8 999 руб.</strong>
                </div>
                <img src="/img/addcart.svg" className="addIcon" alt="add cart" />
              </div>
            </li>
            <li className="card">
              <img src="/img/favorite.svg" className="favoriteIcon" alt="favorite icon" />
              <img src="/img/sneakers/sneakers1.png" className="cardImg" alt="sneakers Puma X" />
              <h2 className="nameSneakers">Кроссовки Puma X Aka Boku Future Rider</h2>
              <div className="addCartContainer">
                <div className="price">
                  <span>Цена:</span>
                  <strong>8 999 руб.</strong>
                </div>
                <img src="/img/addcart.svg" className="addIcon" alt="add cart" />
              </div>
            </li>
            <li className="card">
              <img src="/img/favorite.svg" className="favoriteIcon" alt="favorite icon" />
              <img src="/img/sneakers/sneakers1.png" className="cardImg" alt="sneakers Puma X" />
              <h2 className="nameSneakers">Кроссовки Puma X Aka Boku Future Rider</h2>
              <div className="addCartContainer">
                <div className="price">
                  <span>Цена:</span>
                  <strong>8 999 руб.</strong>
                </div>
                <img src="/img/addcart.svg" className="addIcon" alt="add cart" />
              </div>
            </li>
            <li className="card">
              <img src="/img/favorite.svg" className="favoriteIcon" alt="favorite icon" />
              <img src="/img/sneakers/sneakers1.png" className="cardImg" alt="sneakers Puma X" />
              <h2 className="nameSneakers">Кроссовки Puma X Aka Boku Future Rider</h2>
              <div className="addCartContainer">
                <div className="price">
                  <span>Цена:</span>
                  <strong>8 999 руб.</strong>
                </div>
                <img src="/img/addcart.svg" className="addIcon" alt="add cart" />
              </div>
            </li>
          </ul>
        </div>
      </main>
    
    </div>
  );
}

export default App;
