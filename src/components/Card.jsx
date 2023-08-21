const Card = ({
  id,
  price,
  title,
  img,
  haveInCart,
  handleAddProductToCart,
  handleRemoveFromCart,
}) => {
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
};

export default Card;
