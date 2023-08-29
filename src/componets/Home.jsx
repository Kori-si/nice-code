// import styles from "../styles.scss";
import search from "../assets/img/search.svg";
import filter from "../assets/img/Filter.svg";
import plus from "../assets/img/Plus.svg";
import ellipsis from "../assets/img/ellipsis.svg";
import photo from "../assets/img/Oval.png";
import den from "../assets/img/Den.png";

import styles from "./HomeStyles.module.scss";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <div className={styles.list__input}>
          <div className={styles.list__input__search}>
            <div className={styles.list__input__search__svg}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.2641 12.2379L15.7871 14.761C16.071 15.0448 16.071 15.5035 15.7872 15.7873C15.6456 15.9289 15.4598 16 15.274 16C15.0881 16 14.9023 15.9289 14.7608 15.7873L12.2378 13.2643L13.2641 12.2379ZM12.311 11.1555C13.2361 9.9815 13.7909 8.50298 13.7909 6.89555C13.7909 3.09357 10.6974 0 6.89544 0C3.0935 0 0 3.09353 0 6.89552C0 10.6975 3.09353 13.7911 6.89547 13.7911C8.41434 13.7911 9.8181 13.2957 10.9586 12.4606L10.9576 12.4597C10.9576 12.4597 11.4889 12.0253 11.7818 11.7324C12.0522 11.462 12.278 11.1949 12.311 11.1555ZM1.45169 6.89552C1.45169 9.89763 3.89339 12.3394 6.89547 12.3394C9.89751 12.3394 12.3393 9.89763 12.3393 6.89552C12.3393 3.89341 9.89755 1.45167 6.89547 1.45167C3.89339 1.45167 1.45169 3.89341 1.45169 6.89552Z"
                  fill="#616F82"
                />
              </svg>
            </div>
          </div>
          <div className={styles.list__input__filter}>
            <button>
              <img src={filter} alt="filter" />
            </button>
            <button>
              <img src={plus} alt="plus" />
            </button>
          </div>
        </div>
        <div className={styles.list__counter}>
          <p className={styles.list__counter__count}>213</p>
          <p className={styles.list__counter__btn}>Выбрать</p>
        </div>
        <div className={styles.list__contacts}>
          <img width={40} height={40} src={photo} alt="photo" />
          <p>Кравцова Александра</p>
        </div>
      </div>
      <div className={styles.profile}>
        <div className={styles.profile__header}>
          <div className={styles.profile__header__cart}>
            <div className={styles.profile__header__cart__icon}>
              <img src={den} alt="den" />
            </div>
            <div className={styles.profile__header__cart__description}>
              <h4>Рожков Денис Петрович</h4>
              <p>30 лет, муж</p>
            </div>
            
          </div>
          <div className={styles.profile__header__ets}>
          <img src={ellipsis} alt="ellipsis" />
          </div>
        </div>
        <div className={styles.profile__categories}>
          <div className={styles.profile__categories__items}>
            <p>Заметки</p>
            <p>Консультации</p>
            <p>Видео</p>
            <p>Мероприятия</p>
          </div>
          <div className={styles.profile__categories__new}>
            <p>Новая заметка</p>
            <button><img src={plus} alt="plus" /></button>
          </div>
        </div>
        <div className={styles.profile__content}>
          <div className={styles.profile__content__item}>
            <div>
              <p>20.12.2019</p>
              <p>
                Физические упражнения способствуют активизации мышечных
                сокращений, кровотока в тканях, снимают отечность, повышают
                энергетические возможности мышц. Улучшенное питание мышечной
                ткани ускоряет замещение различных посттравматических дефектов в
                самих мышцах, костной ткани, связках и сухожилиях.
              </p>
            </div>
            <div className={styles.profile__content__item__ets}>
          <img src={ellipsis} alt="ellipsis" />
          </div>
          </div>
          <div className={styles.profile__content__item}>
            <div>
              <p>20.12.2019 </p>
              <p>
                Улучшенное питание мышечной ткани ускоряет замещение различных
                посттравматических дефектов в самих мышцах, костной ткани,
                связках и сухожилиях.
              </p>
            </div>
            <div className={styles.profile__content__item__ets}>
          <img src={ellipsis} alt="ellipsis" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
