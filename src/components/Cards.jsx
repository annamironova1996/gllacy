import Card from "./Card";

const Cards = ({
  products,
  cartProducts,
  handleAddProductToCart,
  handleRemoveFromCart,
}) => {
  return (
    <section>
      {products &&
        products.map((product) => {
          const { id, img, title, price } = product;
          let haveInCart = false;

          cartProducts?.forEach((productId) => {
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
  );
};

export default Cards;
