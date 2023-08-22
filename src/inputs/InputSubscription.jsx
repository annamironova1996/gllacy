import { useState } from "react";
import "./InputSubscription.css";

const InputSubscription = () => {
  const [email, setEmail] = useState(" ");

  function handleFormSubmit(event) {
    event.preventDefault();
  }
  return (
    <form
      className="subscription"
      onSubmit={handleFormSubmit}
    >
      <label
        for="email"
        className="visually-hidden"
      >
        email@example.com
      </label>
      <input
        className="subscription-input"
        id="email"
        type="email"
        placeholder="email@example.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      ></input>

      <button
        className="subscription-button"
        type="submit"
      >
        Отправить
      </button>
    </form>
  );
};

export default InputSubscription;
