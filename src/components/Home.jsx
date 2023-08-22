import { Link, NavLink } from "react-router-dom";
import InputSubscription from "../inputs/InputSubscription";
import Stock from "./Stock";
import Hit from "./Hit";
import "./Home.css";
import cow from "../icons/cow_icon.png";
import ice_cream from "../icons/ice_cream_icon.png";
import sheet from "../icons/sheet_icon.png";
import thermometer from "../icons/thermometer_icon.png";
import contacts from "../imag/contacts.jpg";
import two_ice_cream from "../imag/two_ice_cream.png";

const stocks = [
  {
    id: 1,
    img: "raspberries.png",
    title: "Малинка даром!",
    description:
      "При покупке 2 кг любого фруктового мороженого, добавим в ваш заказ банку малинового варенья бесплатно.",
    text: "Хочу варенье!",
  },
  {
    id: 2,
    img: "powder.png",
    title: "Шоколадки даром!",
    description:
      "При покупке 2 кг пломбира, добавим в ваш заказ упаковку вкуснейшей шоколадной присыпки совершенно бесплатно.",
    text: "Хочу шоколадки!",
  },
];

const Home = ({ items }) => {
  return (
    <main className="home">
      <div className="container">
        <h1 className="visually-hidden">Глейси - главная страница</h1>
        <img
          className="home-imag"
          src={two_ice_cream}
        />
        <h2 className="home-title">
          Крем-брюле и пломбир
          <br /> с малиновым джемом
        </h2>
        <button className="home-button">Давайте оба!</button>
        <section className="home-stocks">
          <h2 className="visually-hidden">Акции Глейси</h2>
          {stocks.map((stock) => (
            <Stock
              id={stock.id}
              stock={stock}
            />
          ))}
        </section>
        <section>
          <h2 className="visually-hidden">Товары-хиты Глейси</h2>
          <div className="home-hits">
            {items.map((el) => (
              <Hit
                item={el}
                id={el.id}
              />
            ))}
          </div>
        </section>
        <section className="home-advantages">
          <h2 className="visually-hidden">Преимущества Глейси</h2>
          <p>
            Магазин Глейси - это онлайн- и офлайн-магазин по продаже мороженного
            собственного
            <br /> производства на разнавес
          </p>
          <div className="home-advantages-container">
            <div className="home-advantages-item">
              <img
                className="home-advantages-icons"
                src={ice_cream}
              />
              <p>
                Все наше производство изгатавливается на собственном
                производстве, с использованием современного оборудования и
                проверенных временем технологий.
              </p>
            </div>
            <div className="home-advantages-item">
              <img
                className="home-advantages-icons"
                src={sheet}
              />
              <p>
                Для приготовления мороженного используются настоящие сливки и
                молоко высочайшего качества. Все дополнительные ингредиенты и
                добавки из натурального, экологически чистого сырья.
              </p>
            </div>
            <div className="home-advantages-item">
              <img
                className="home-advantages-icons"
                src={cow}
              />
              <p>
                Закупка ингредиентов производится только у проверенных
                фермерских хозяйств и компаний, с которыми нас связывает
                долговременное сотрудничество.
              </p>
            </div>
            <div className="home-advantages-item">
              <img
                className="home-advantages-icons"
                src={thermometer}
              />
              <p>
                Доставка нашего мороженного до заказчиков осуществляется
                специальном термопаке, который не дает мороженному растаять в
                пути и позволяет сохранить превосхрдный вкус.
              </p>
            </div>
          </div>
        </section>
        <div className="home-wrapper">
          <article className="home-news">
            <p>Новое в нашем блоге</p>
            <Link>
              10 способов сервировки <br /> фруктовых щербетов к <br /> столу
            </Link>
          </article>
          <section className="home-email">
            <h2 className="visually-hidden">Подписка на Глейси</h2>
            <p>
              Подпишитесь на нашу сладкую рассылку и будете всегда в курсе всего
              самого вкусного, что у нас происходит. Обещаем не спамить и не
              слать всякой ненужной ерунды. Честно!
            </p>
            <InputSubscription />
          </section>
        </div>
        <section className="home-wrapper-map">
          <div className="home-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.598942831914!2d30.32050837746549!3d59.93879686208718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTkxMTg2!5e0!3m2!1sru!2sru!4v1692718842627!5m2!1sru!2sru"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="home-contacts">
            <img
              className="home-contacts-imag"
              src={contacts}
            />
            <h2>
              Адрес главного офиса
              <br /> и офлайн-магазина:
              <br />
              <b>ул.Большая Конюшенная</b>
            </h2>
            <p>
              Для заказов по телефону:
              <br />
              <b>8 812 450-25-25</b>
              <br />
              (с 10 до 20 ежедневно)
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
