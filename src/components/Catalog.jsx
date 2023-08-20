import { Link } from "react-router-dom";
import { useState } from "react";

const Catalog = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState(getProducts());

  const handleAddProductToCart = (productID) => {
    setCartProducts([...cartProducts, productID]);
  };
  const handleRemoveFromCart = (productID) => {
    const newCartProducts = cartProducts.filter((id) => id !== productID);
    setCartProducts(newCartProducts);
  };
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

      <section>
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
      </section>

      <section>
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
      </section>
    </main>
  );
};

const getProducts = () => [
  {
    id: 1,
    img: "orange.png",
    title: "Сливочное с апельсиновым джемом и цитрусовой стружкой",
    price: "310",
  },
  {
    id: 2,
    img: "chocolate.png",
    title: "Сливочно-кофейное с кусочками шоколада",
    price: "380",
  },
  {
    id: 3,
    img: "strawberry.png",
    title: "Сливочно-клубничное с присыпкой из белого шоколада",
    price: "355",
  },
  {
    id: 4,
    img: "caramel.png",
    title: "Сливочное крем-брюле с карамельной подливкой",
    price: "415",
  },

  {
    id: 5,
    img: "cowberry.png",
    title: "Сливочное с брусничным джемом",
    price: "325",
  },
  {
    id: 6,
    img: "blueberry.png",
    title: "Сливочно-черничное с цельными ягодами черники",
    price: "410",
  },
  {
    id: 7,
    img: "lemon.png",
    title: "Сливочно-лимонное с карамельной присыпкой",
    price: "375",
  },
  {
    id: 8,
    img: "chocolate_shaving.png",
    title: "Сливочное с шоколадной стружкой",
    price: "320",
  },
  {
    id: 9,
    img: "vanilla.png",
    title: "Сливочно-ванильное с кусочками шоколада",
    price: "440",
  },
  {
    id: 10,
    img: "menthol.png",
    title: "Сливочное с ментоловым сиропом",
    price: "435",
  },
  {
    id: 11,
    img: "dark_chokolate.png",
    title: "Сливочное с кусочками черного шоколада",
    price: "355",
  },
  {
    id: 12,
    img: "mint.png",
    title: "Сливочное с мятным сиропом",
    price: "420",
  },
];

export default Catalog;
