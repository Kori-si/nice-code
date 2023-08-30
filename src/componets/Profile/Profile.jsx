import React from "react";

import styles from "./Profile.module.scss";

import cls from "./../Tabs/tabsStyles.module.scss";

import plus from "../../assets/img/Plus.svg";
import ellipsis from "../../assets/img/ellipsis.svg";

import den from "../../assets/contact/img/Den.png";

import { Tabs } from "../Tabs/Tabs";

const tabs = [
  {
    label: "Заметки ",
    content: (<>
    <div className={styles.profile__content__item}>
      <div>
        <p>20.12.2019</p>
        <p>
          Физические упражнения способствуют активизации мышечных
          сокращений, кровотока в тканях, снимают отечность, повышают
          энергетические возможности мышц. Улучшенное питание мышечной ткани
          ускоряет замещение различных посттравматических дефектов в самих
          мышцах, костной ткани, связках и сухожилиях.
        </p>
      </div>
      <button className={styles.profile__content__item__ets}>
        <img src={ellipsis} alt="ellipsis" />
      </button>
    </div>
    <div className={styles.profile__content__item}>
      <div>
        <p>20.12.2019 </p>
        <p>
          Улучшенное питание мышечной ткани ускоряет замещение различных
          посттравматических дефектов в самих мышцах, костной ткани, связках
          и сухожилиях.
        </p>
      </div>
      <button className={styles.profile__content__item__ets}>
        <img src={ellipsis} alt="ellipsis" />
      </button>
    </div></>),
  },
  {
    label: "Консультации",
    content: "Консультации",
  },
  {
    label: "Видео",
    content: "Видео",
  },
  {
    label: "Мероприятия",
    content: "Мероприятия",
  },
];

export const Profile = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
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
          <div>
            {tabs.map((tab, index) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(index)}
                className={`${cls.btn} ${activeTab == index ? cls.active : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.profile__categories__new}>
          <p>Новая заметка</p>
          <button>
            <img src={plus} alt="plus" />
          </button>
        </div>
      </div>
     

      <div className={styles.message}>{tabs[activeTab].content}</div>


      {/* <div className={`${styles.profile__content} ${styles.message}`}>
        
      </div> */}
    </div>
  );
};
