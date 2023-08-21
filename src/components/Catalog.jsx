import { Link } from "react-router-dom";
import getProducts from "../data/getProducts";
import Cards from "./Cards";
import Cart from "./Cart";

const Catalog = ({
  products,
  cartProducts,
  handleAddProductToCart,
  handleRemoveFromCart,
}) => {
  /*  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState(getProducts());

  const handleAddProductToCart = (productID) => {
    setCartProducts([...cartProducts, productID]);
  };
  const handleRemoveFromCart = (productID) => {
    const newCartProducts = cartProducts.filter((id) => id !== productID);
    setCartProducts(newCartProducts);
  }; */
  return (
    <main>
      <h2>Каталог товаров Глейси</h2>
      <Link
        to=".."
        relative="path"
      >
        Главная
      </Link>
      <Link
        path="."
        relative="path"
      ></Link>

      <Cards
        products={products}
        cartProducts={cartProducts}
        handleAddProductToCart={handleAddProductToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />

      {/*  <section>
        <h2>Карточка товара Glaccy</h2>
        {products.map((product) => {
          const { id, img, title, price } = product;
          let haveInCart = false;

          cartProducts.forEach((productId) => {
            if (productId === id) {
              haveInCart = true;
            }
          });
          return (
            <Card
              id={id}
              img={img}
              title={title}
              price={price}
              haveInCart={haveInCart}
              handleAddProductToCart={handleAddProductToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          );
        })}
      </section>
 */}
      {/* <section>
        <h2>Карточка товара Glaccy</h2>
        {products.map((product) => {
          const { id, img, title, price } = product;
          let haveInCart = false;

          cartProducts.forEach((productId) => {
            if (productId === id) {
              haveInCart = true;
            }
          });
          return (
            <article key={id}>
              <div>
                <img src={"./" + img} />
                <p>{price}</p>
              </div>
              <p>{title}</p>
              {!haveInCart ? (
                <button
                  onClick={() => handleAddProductToCart(id)}
                  type="primary"
                >
                  Добавить в корзину
                </button>
              ) : (
                <button
                  onClick={() => handleRemoveFromCart(id)}
                  type="primary"
                >
                  Удалить из корзины
                </button>
              )}
            </article>
          );
        })}
      </section> */}
      {/* 
      <Cart
        cartProducts={cartProducts}
        products={products}
        handleRemoveFromCart={handleRemoveFromCart}
      /> */}

      {/* <section>
        {cartProducts.length > 0
          ? cartProducts.map((productId) => {
              const productIndex = products.findIndex((product) => {
                return product.id === productId;
              });
              let { id, img, title, price } = products[productIndex];
              return (
                <div key={id}>
                  <div>
                    <img src={"./" + img} />
                    <p>{price}</p>
                  </div>
                  <p>{title}</p>
                  <button
                    onClick={() => handleRemoveFromCart(id)}
                    type="primary"
                  >
                    Удалить из корзины
                  </button>
                </div>
              );
            })
          : "Ваша корзина пуста!"}
      </section> */}
    </main>
  );
};

export default Catalog;
