import InputSubscription from "../inputs/InputSubscription";

const Home = () => {
  return (
    <main>
      <h1>Глейси - главная страница</h1>
      <h2>Крем-брюле и пломбир с малиновым джемом</h2>
      <button>Давайте оба!</button>
      <section>
        <h2>Акции Глейси</h2>
        Здесь будет карусель
      </section>
      <section>
        <h2>Товары-хиты Глейси</h2>
        Здесь будет массив объектов
      </section>
      <section>
        <h2>Преимущества Глейси</h2>
        <p>
          Магазин Глейси - это онлайн- и офлайн-магазн по продаже мороженного
          собственного производства на разнавес
        </p>
        <div>
          <img />
          <p>
            Все наше производство изгатавливается на собственном производстве, с
            использованием современного оборудования и проверенных временем
            технологий.
          </p>
        </div>
        <div>
          <img />
          <p>
            Для приготовления мороженного используются настоящие сливки и молоко
            высочайшего качества. Все дополнительные ингредиенты и добавки из
            натурального, экологически чистого сырья.
          </p>
        </div>
        <div>
          <img />
          <p>
            Закупка ингредиентов производится только у проверенных фермерских
            хозяйств и компаний, с которыми нас связывает долговременное
            сотрудничество.
          </p>
        </div>
        <div>
          <img />
          <p>
            Доставка нашего мороженного до заказчиков осуществляется специальном
            термопаке, который не дает мороженному растаять в пути и позволяет
            сохранить превосхрдный вкус.
          </p>
        </div>
      </section>
      <div>
        <article>
          <p>Новое в нашем блоге</p>
          <h2>10 способов сервировки фруктовых щербетов к столу</h2>
        </article>
        <section>
          <h2>Подписка на Глейси</h2>
          <p>
            Подпишитесь на нашу сладкую рассылку и будете всегда в курсе всего
            самого вкусного, что у нас происходит. Обещаем не спамить и не слать
            всякой ненужной ерунды. Честно!
          </p>
          <InputSubscription />
        </section>
      </div>
      <section>
        <h2>Контакты Глейси</h2>
        <div>Здесь будет карта</div>
        <div>
          <p>
            Адрес главного офиса и офлайн-магазина:
            <span>ул.Большая Конюшенная</span>
          </p>
          <p>
            Для заказов по телефону:<span>8 812 450-25-25</span>
          </p>
          <p>(с 10 до 20 ежедневно)</p>
        </div>
      </section>
    </main>
  );
};

export default Home;