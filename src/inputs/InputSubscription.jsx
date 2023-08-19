import { useState } from "react";

const InputSubscription = () => {
  const [email, setEmail] = useState(" ");

  function handleFormSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default InputSubscription;
