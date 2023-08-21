import React from "react";

const Cart = ({ cartProducts, handleRemoveFromCart, products }) => {
  return (
    <section>
      {cartProducts > 0
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
  );
};
export default Cart;
