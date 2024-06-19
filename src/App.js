
import Card from './components/Card';
import Cart from './components/Cart';
import Header from './components/Header';


const cardItem = [
  {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "12 999 руб.", src: "/img/sneakers/sneakers1.png", alt: "Nike Blazer Mid Suede"},
  {title: "Мужские Кроссовки Nike Air Max 270", price: "12 999 руб.", src: "/img/sneakers/sneakers2.png", alt: "Nike Air Max 270"},
  {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8 499 руб.", src: "/img/sneakers/sneakers3.png", alt: "Nike Blazer Mid Suede"},
  {title: "Кроссовки Puma X Aka Boku Future Rider", price: "8 999 руб.", src: "/img/sneakers/sneakers4.png", alt: "Puma X Aka Boku Future Rider"},
  {title: "Мужские Кроссовки Under Armour Curry 8", price: "15 199 руб.", src: "/img/sneakers/sneakers5.png", alt: "Under Armour Curry 8"},
  {title: "Мужские Кроссовки Nike Kyrie 7", price: "11 299 руб.", src: "/img/sneakers/sneakers6.png", alt: "Nike Kyrie 7"},
  {title: "Мужские Кроссовки Jordan Air Jordan 11", price: "10 799 руб.", src: "/img/sneakers/sneakers7.png", alt: "Jordan Air Jordan 11"},
  {title: "Мужские Кроссовки Nike LeBron XVIII", price: "16 499 руб.", src: "/img/sneakers/sneakers8.png", alt: "Nike LeBron XVIII"},
  {title: "Мужские Кроссовки Nike Lebron XVIII Low", price: "13 999 руб.", src: "/img/sneakers/sneakers9.png", alt: "Nike Lebron XVIII Low"},
  {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8 499 руб.", src: "/img/sneakers/sneakers1.png", alt: "Nike Blazer Mid Suede"},
  {title: "Кроссовки Puma X Aka Boku Future Rider", price: "8 999 руб.", src: "/img/sneakers/sneakers4.png", alt: "uma X Aka Boku Future Rider"},
  {title: "Мужские Кроссовки Nike Kyrie Flytrap IV", price: "11 299 руб.", src: "/img/sneakers/sneakers10.png", alt: "Nike Kyrie Flytrap IV"},
];

const addingProduct = [];

function App() {
  return (
      <div className="wrapper">
        <Cart addingProduct={addingProduct}/>
        <Header />
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
            {cardItem.map((card) => <Card 
            title={card.title} 
            imageUrl={card.src} 
            price={card.price} 
            altSneakers={card.alt} 
            clickAdd={() => {
              addingProduct.push(card);
              console.log(addingProduct);
            }} />)}
          </ul>
        </div>
      </main>
    
    </div>
  );
}

export default App;
