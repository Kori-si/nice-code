import React from "react";
import styles from "./Profile.module.scss";
import plus from "../../assets/img/Plus.svg";
import den from "../../assets/contact/img/Den.png";
import photo1 from "../../assets/img/Rectangle.png";
import photo4 from "../../assets/img/Rectangle3.png";

import { DropDownMenu } from "../DropDownMenu/DropDownMenu";

const tabs = [
  {
    label: "Заметки ",
    content: (
      <>
        <div className={styles.profile__content__item}>
          <div>
            <p>
              <span>20.12.2019</span> Физические упражнения способствуют
              активизации мышечных сокращений, кровотока в тканях, снимают
              отечность, повышают энергетические возможности мышц. Улучшенное
              питание мышечной ткани ускоряет замещение различных
              посттравматических дефектов в самих мышцах, костной ткани, связках
              и сухожилиях.
            </p>
          </div>
          <DropDownMenu />
     
        </div>
        <div className={styles.profile__content__item}>
          <div>
            <p>
              <span>20.12.2019</span> Улучшенное питание мышечной ткани ускоряет
              замещение различных посттравматических дефектов в самих мышцах,
              костной ткани, связках и сухожилиях.
            </p>
          </div>
          <DropDownMenu />
        </div>
      </>
    ),
  },
  {
    label: "Консультации",
    content: (
      <>
        <div className={styles.consult}>
          <div className={styles.consult__img}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.89"
                width="40"
                height="40"
                rx="20"
                fill="#4198C5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9722 17H23.0386C23.5752 17.0006 24.0102 17.4176 24.0109 17.9323V24.0677C24.0102 24.5824 23.5752 24.9994 23.0386 25H14.9722C14.4355 24.9994 14.0006 24.5824 14 24.0677V17.9323C14.0006 17.4176 14.4355 17.0006 14.9722 17ZM28.0012 24.0259L24.6602 22.2767V19.7428L28.0012 17.9937V24.0259Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={styles.consult__title}>
            <p className={styles.consult__title__name}>Online консультация</p>
            <p className={styles.consult__title__date}>15.01.2019, 12:30-13:00 </p>
          </div>
        </div>
        <div className={styles.consult}>
          <div className={styles.consult__img}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.7"
                width="40"
                height="40"
                rx="20"
                fill="#F1F2F3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9722 16H23.0386C23.5752 16.0006 24.0102 16.4176 24.0109 16.9323V23.0677C24.0102 23.5824 23.5752 23.9994 23.0386 24H14.9722C14.4355 23.9994 14.0006 23.5824 14 23.0677V16.9323C14.0006 16.4176 14.4355 16.0006 14.9722 16ZM28.0012 23.0259L24.6602 21.2767V18.7428L28.0012 16.9937V23.0259Z"
                fill="#616F82"
              />
            </svg>
          </div>
          <div className={styles.consult__title}>
            <p className={styles.consult__title__name}>Online консультация</p>
            <p className={styles.consult__title__date}>15.01.2019, 12:30-13:00</p>
          </div>
        </div>
        <div className={styles.consult}>
          <div className={styles.consult__img}>
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0137 3.42451C12.0137 4.76354 13.0767 5.84903 14.3881 5.84903C15.6995 5.84903 16.7626 4.76354 16.7626 3.42451C16.7626 2.08549 15.6995 1 14.3881 1C13.0767 1 12.0137 2.08549 12.0137 3.42451ZM17 8.72656V15H11.8489V10.1248L11.0259 10.5932H9.02344C9.45839 10.3885 9.76028 9.93941 9.76028 9.4183C9.76028 8.96085 9.52764 8.55888 9.17658 8.32901H10.621L12.7138 6.86042C13.1689 6.41448 13.7867 6.14041 14.4673 6.14041C15.8205 6.14041 16.9258 7.22404 16.9964 8.58782L17 8.59132V8.72656ZM9.26658 9.46045C9.26658 10.06 8.80994 10.5506 8.23243 10.5894L8.23256 10.5932H6.97413L6.15112 10.1248V15H1V8.72656V8.59132L1.00358 8.58782C1.07419 7.22404 2.17953 6.14041 3.53274 6.14041C4.21328 6.14041 4.83113 6.41448 5.28621 6.86042L7.37897 8.32901H8.15851C8.77048 8.32901 9.26658 8.83557 9.26658 9.46045ZM3.61189 5.84903C4.92326 5.84903 5.98633 4.76354 5.98633 3.42451C5.98633 2.08549 4.92326 1 3.61189 1C2.30052 1 1.23744 2.08549 1.23744 3.42451C1.23744 4.76354 2.30052 5.84903 3.61189 5.84903Z"
                fill="#616F82"
              />
              <path
                d="M17 15V15.2857H17.2857V15H17ZM11.8489 15H11.5632V15.2857H11.8489V15ZM11.8489 10.1248H12.1346V9.63344L11.7076 9.8765L11.8489 10.1248ZM11.0259 10.5932V10.879H11.1015L11.1672 10.8416L11.0259 10.5932ZM9.02344 10.5932L8.90176 10.3347L9.02344 10.879V10.5932ZM9.17658 8.32901V8.0433H8.21866L9.02007 8.56804L9.17658 8.32901ZM10.621 8.32901V8.61472H10.7113L10.7852 8.56288L10.621 8.32901ZM12.7138 6.86042L12.8779 7.09429L12.8971 7.08086L12.9138 7.06449L12.7138 6.86042ZM16.9964 8.58782L16.7111 8.60259L16.7169 8.71422L16.7969 8.7923L16.9964 8.58782ZM17 8.59132H17.2857V8.47092L17.1996 8.38684L17 8.59132ZM8.23243 10.5894L8.21326 10.3043L7.93784 10.3229L7.94687 10.5988L8.23243 10.5894ZM8.23256 10.5932V10.879H8.52777L8.51812 10.5839L8.23256 10.5932ZM6.97413 10.5932L6.8328 10.8416L6.89852 10.879H6.97413V10.5932ZM6.15112 10.1248L6.29245 9.8765L5.86541 9.63344V10.1248H6.15112ZM6.15112 15V15.2857H6.43683V15H6.15112ZM1 15H0.714286V15.2857H1V15ZM1 8.59132L0.800435 8.38685L0.714286 8.47093V8.59132H1ZM1.00358 8.58782L1.20315 8.79229L1.28314 8.71421L1.28891 8.60259L1.00358 8.58782ZM5.28621 6.86042L5.08624 7.06449L5.10294 7.08086L5.12209 7.09429L5.28621 6.86042ZM7.37897 8.32901L7.21485 8.56288L7.28872 8.61472H7.37897V8.32901ZM14.3881 5.56331C13.2401 5.56331 12.2994 4.61139 12.2994 3.42451H11.728C11.728 4.91568 12.9134 6.13474 14.3881 6.13474V5.56331ZM16.4768 3.42451C16.4768 4.61139 15.5361 5.56331 14.3881 5.56331V6.13474C15.8629 6.13474 17.0483 4.91568 17.0483 3.42451H16.4768ZM14.3881 1.28571C15.5361 1.28571 16.4768 2.23764 16.4768 3.42451H17.0483C17.0483 1.93335 15.8629 0.714286 14.3881 0.714286V1.28571ZM12.2994 3.42451C12.2994 2.23764 13.2401 1.28571 14.3881 1.28571V0.714286C12.9134 0.714286 11.728 1.93335 11.728 3.42451H12.2994ZM17.2857 15V8.72656H16.7143V15H17.2857ZM11.8489 15.2857H17V14.7143H11.8489V15.2857ZM11.5632 10.1248V15H12.1346V10.1248H11.5632ZM11.1672 10.8416L11.9902 10.3731L11.7076 9.8765L10.8845 10.3449L11.1672 10.8416ZM9.02344 10.879H11.0259V10.3075H9.02344V10.879ZM9.47457 9.4183C9.47457 9.82714 9.23805 10.1765 8.90176 10.3347L9.14511 10.8518C9.67873 10.6006 10.046 10.0517 10.046 9.4183H9.47457ZM9.02007 8.56804C9.29244 8.74639 9.47457 9.05951 9.47457 9.4183H10.046C10.046 8.86219 9.76284 8.37137 9.33309 8.08998L9.02007 8.56804ZM10.621 8.0433H9.17658V8.61472H10.621V8.0433ZM12.5497 6.62654L10.4569 8.09514L10.7852 8.56288L12.8779 7.09429L12.5497 6.62654ZM14.4673 5.8547C13.7082 5.8547 13.0195 6.16079 12.5138 6.65635L12.9138 7.06449C13.3182 6.66817 13.8653 6.42613 14.4673 6.42613V5.8547ZM17.2817 8.57305C17.2036 7.06344 15.9785 5.8547 14.4673 5.8547V6.42613C15.6624 6.42613 16.648 7.38463 16.7111 8.60259L17.2817 8.57305ZM17.1996 8.38684L17.196 8.38334L16.7969 8.7923L16.8004 8.79579L17.1996 8.38684ZM17.2857 8.72656V8.59132H16.7143V8.72656H17.2857ZM8.2516 10.8745C8.98317 10.8253 9.55229 10.2062 9.55229 9.46045H8.98087C8.98087 9.9137 8.63671 10.2759 8.21326 10.3043L8.2516 10.8745ZM8.51812 10.5839L8.51799 10.5801L7.94687 10.5988L7.94699 10.6026L8.51812 10.5839ZM6.97413 10.879H8.23256V10.3075H6.97413V10.879ZM6.00979 10.3731L6.8328 10.8416L7.11546 10.3449L6.29245 9.8765L6.00979 10.3731ZM6.43683 15V10.1248H5.86541V15H6.43683ZM1 15.2857H6.15112V14.7143H1V15.2857ZM0.714286 8.72656V15H1.28571V8.72656H0.714286ZM0.714286 8.59132V8.72656H1.28571V8.59132H0.714286ZM0.804017 8.38335L0.800435 8.38685L1.19957 8.79578L1.20315 8.79229L0.804017 8.38335ZM3.53274 5.8547C2.02151 5.8547 0.796404 7.06344 0.71825 8.57305L1.28891 8.60259C1.35197 7.38463 2.33755 6.42613 3.53274 6.42613V5.8547ZM5.48618 6.65635C4.98047 6.16079 4.29185 5.8547 3.53274 5.8547V6.42613C4.13472 6.42613 4.68179 6.66817 5.08624 7.06449L5.48618 6.65635ZM7.54309 8.09514L5.45033 6.62654L5.12209 7.09429L7.21485 8.56288L7.54309 8.09514ZM8.15851 8.0433H7.37897V8.61472H8.15851V8.0433ZM9.55229 9.46045C9.55229 8.68343 8.93387 8.0433 8.15851 8.0433V8.61472C8.60709 8.61472 8.98087 8.98772 8.98087 9.46045H9.55229ZM5.70062 3.42451C5.70062 4.61139 4.75987 5.56331 3.61189 5.56331V6.13474C5.08664 6.13474 6.27205 4.91568 6.27205 3.42451H5.70062ZM3.61189 1.28571C4.75987 1.28571 5.70062 2.23764 5.70062 3.42451H6.27205C6.27205 1.93335 5.08664 0.714286 3.61189 0.714286V1.28571ZM1.52316 3.42451C1.52316 2.23764 2.46391 1.28571 3.61189 1.28571V0.714286C2.13713 0.714286 0.95173 1.93335 0.95173 3.42451H1.52316ZM3.61189 5.56331C2.46391 5.56331 1.52316 4.61139 1.52316 3.42451H0.95173C0.95173 4.91568 2.13713 6.13474 3.61189 6.13474V5.56331Z"
                fill="#F1F2F3"
              />
            </svg>
          </div>
          <div className={styles.consult__title}>
            <p className={styles.consult__title__name}>Личный приём</p>
            <p className={styles.consult__title__date}>
              15.01.2019, 12:30-13:00
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    label: "Видео",
    content: (
      <>
        <div className={styles.video}>
          <div className={styles.video__img}>
            <img src={photo1} alt="ddd" />
          </div>
          <div className={styles.video__title}>
            <p className={styles.video__title__name}>
              Крабик, ходьба в бок в приседе с двумя резинками Кра…
            </p>
            <div className={styles.video__title__autor}>
              <p>Астахова Е.В.</p>
              <p className={styles.video__title__date}>
                15.01.2019, 12:30-13:00
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    label: "Мероприятия",
    content: (
      <>
        <div className={styles.event}>
          <div className={styles.event__img}>
            <img src={photo4} alt="ddd" />
          </div>
          <div className={styles.event__title}>
            <p className={styles.event__title__name}>
              Тяга резинки в шаге со сгибанием локтя под 90 градусов
            </p>
            <div className={styles.event__title__icon}>
              <p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_8505)">
                    <path
                      d="M14.7461 3.82974C14.5881 3.73209 14.3909 3.72317 14.2248 3.80617L10.7143 5.56169V4.28561C10.7143 3.39801 9.99473 2.67847 9.10713 2.67847H1.60714C0.719541 2.67847 0 3.39801 0 4.28561V10.7142C0 11.6018 0.719541 12.3213 1.60714 12.3213H9.10713C9.99473 12.3213 10.7143 11.6018 10.7143 10.7142V9.4381L14.2248 11.1963C14.4895 11.3286 14.8112 11.2212 14.9435 10.9566C14.9811 10.8813 15.0005 10.7983 15 10.7142V4.28561C15.0001 4.09991 14.904 3.92742 14.7461 3.82974ZM9.64285 10.7142C9.64285 11.0101 9.403 11.2499 9.10713 11.2499H1.60714C1.31126 11.2499 1.07142 11.0101 1.07142 10.7142V4.28561C1.07142 3.98973 1.31126 3.74988 1.60714 3.74988H9.10713C9.403 3.74988 9.64285 3.98973 9.64285 4.28561V10.7142ZM13.9286 9.84742L10.7143 8.24027V6.75957L13.9286 5.15243V9.84742Z"
                      fill="#4198C5"
                    />
                    <path
                      d="M5.3571 5.35718C4.17362 5.35718 3.21423 6.31657 3.21423 7.50004C3.21423 8.68352 4.17362 9.64291 5.3571 9.64291C6.54058 9.64291 7.49997 8.68352 7.49997 7.50004C7.49997 6.31657 6.54055 5.35718 5.3571 5.35718ZM5.3571 8.57146C4.76538 8.57146 4.28568 8.09176 4.28568 7.50004C4.28568 6.90832 4.76538 6.42863 5.3571 6.42863C5.94882 6.42863 6.42852 6.90832 6.42852 7.50004C6.42852 8.09176 5.94882 8.57146 5.3571 8.57146Z"
                      fill="#4198C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_8505">
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Вебинар
              </p>
              <p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_8611)">
                    <path
                      d="M1.75781 1.17188H2.46094V0H3.63281V1.17188H11.3672V0H12.5391V1.17188H13.2422C14.2114 1.17188 15 1.96043 15 2.92969V13.2422C15 14.2114 14.2114 15 13.2422 15H1.75781C0.788555 15 0 14.2114 0 13.2422V2.92969C0 1.96043 0.788555 1.17188 1.75781 1.17188ZM1.17188 13.2422C1.17188 13.5653 1.43473 13.8281 1.75781 13.8281H13.2422C13.5653 13.8281 13.8281 13.5653 13.8281 13.2422V5.50781H1.17188V13.2422ZM1.17188 4.33594H13.8281V2.92969C13.8281 2.6066 13.5653 2.34375 13.2422 2.34375H12.5391V3.51562H11.3672V2.34375H3.63281V3.51562H2.46094V2.34375H1.75781C1.43473 2.34375 1.17188 2.6066 1.17188 2.92969V4.33594Z"
                      fill="#4198C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_8611">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="matrix(-1 0 0 1 15 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                9 марта 2021
              </p>
              <p>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_8618)">
                    <path
                      d="M8.6377 7.55969L6.96457 6.30484V3.7487C6.96457 3.49169 6.75682 3.28394 6.4998 3.28394C6.24278 3.28394 6.03503 3.49169 6.03503 3.7487V6.53725C6.03503 6.68364 6.10382 6.82169 6.22094 6.90906L8.07996 8.30333C8.1636 8.36608 8.26122 8.39629 8.35835 8.39629C8.5001 8.39629 8.63953 8.33261 8.73063 8.20991C8.88496 8.00493 8.84313 7.71353 8.6377 7.55969Z"
                      fill="#4198C5"
                    />
                    <path
                      d="M6.5 0.5C3.1914 0.5 0.5 3.1914 0.5 6.5C0.5 9.8086 3.1914 12.5 6.5 12.5C9.8086 12.5 12.5 9.8086 12.5 6.5C12.5 3.1914 9.8086 0.5 6.5 0.5ZM6.5 11.5705C3.70449 11.5705 1.42951 9.29551 1.42951 6.5C1.42951 3.70449 3.70449 1.42951 6.5 1.42951C9.29598 1.42951 11.5705 3.70449 11.5705 6.5C11.5705 9.29551 9.29551 11.5705 6.5 11.5705Z"
                      fill="#4198C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_8618">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                17:00
              </p>
            </div>
          </div>
        </div>
        <div className={styles.event}>
          <div className={styles.event__img}>
            <img src={photo4} alt="ddd" />
          </div>
          <div className={styles.event__title}>
            <p className={styles.event__title__name}>
              Тяга резинки в шаге со сгибанием локтя под 90 градусов
            </p>
            <div className={styles.event__title__icon}>
              <p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_8505)">
                    <path
                      d="M14.7461 3.82974C14.5881 3.73209 14.3909 3.72317 14.2248 3.80617L10.7143 5.56169V4.28561C10.7143 3.39801 9.99473 2.67847 9.10713 2.67847H1.60714C0.719541 2.67847 0 3.39801 0 4.28561V10.7142C0 11.6018 0.719541 12.3213 1.60714 12.3213H9.10713C9.99473 12.3213 10.7143 11.6018 10.7143 10.7142V9.4381L14.2248 11.1963C14.4895 11.3286 14.8112 11.2212 14.9435 10.9566C14.9811 10.8813 15.0005 10.7983 15 10.7142V4.28561C15.0001 4.09991 14.904 3.92742 14.7461 3.82974ZM9.64285 10.7142C9.64285 11.0101 9.403 11.2499 9.10713 11.2499H1.60714C1.31126 11.2499 1.07142 11.0101 1.07142 10.7142V4.28561C1.07142 3.98973 1.31126 3.74988 1.60714 3.74988H9.10713C9.403 3.74988 9.64285 3.98973 9.64285 4.28561V10.7142ZM13.9286 9.84742L10.7143 8.24027V6.75957L13.9286 5.15243V9.84742Z"
                      fill="#4198C5"
                    />
                    <path
                      d="M5.3571 5.35718C4.17362 5.35718 3.21423 6.31657 3.21423 7.50004C3.21423 8.68352 4.17362 9.64291 5.3571 9.64291C6.54058 9.64291 7.49997 8.68352 7.49997 7.50004C7.49997 6.31657 6.54055 5.35718 5.3571 5.35718ZM5.3571 8.57146C4.76538 8.57146 4.28568 8.09176 4.28568 7.50004C4.28568 6.90832 4.76538 6.42863 5.3571 6.42863C5.94882 6.42863 6.42852 6.90832 6.42852 7.50004C6.42852 8.09176 5.94882 8.57146 5.3571 8.57146Z"
                      fill="#4198C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_8505">
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Вебинар
              </p>
              <p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_8611)">
                    <path
                      d="M1.75781 1.17188H2.46094V0H3.63281V1.17188H11.3672V0H12.5391V1.17188H13.2422C14.2114 1.17188 15 1.96043 15 2.92969V13.2422C15 14.2114 14.2114 15 13.2422 15H1.75781C0.788555 15 0 14.2114 0 13.2422V2.92969C0 1.96043 0.788555 1.17188 1.75781 1.17188ZM1.17188 13.2422C1.17188 13.5653 1.43473 13.8281 1.75781 13.8281H13.2422C13.5653 13.8281 13.8281 13.5653 13.8281 13.2422V5.50781H1.17188V13.2422ZM1.17188 4.33594H13.8281V2.92969C13.8281 2.6066 13.5653 2.34375 13.2422 2.34375H12.5391V3.51562H11.3672V2.34375H3.63281V3.51562H2.46094V2.34375H1.75781C1.43473 2.34375 1.17188 2.6066 1.17188 2.92969V4.33594Z"
                      fill="#4198C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_8611">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="matrix(-1 0 0 1 15 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                9 марта 2021
              </p>
              <p>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_8618)">
                    <path
                      d="M8.6377 7.55969L6.96457 6.30484V3.7487C6.96457 3.49169 6.75682 3.28394 6.4998 3.28394C6.24278 3.28394 6.03503 3.49169 6.03503 3.7487V6.53725C6.03503 6.68364 6.10382 6.82169 6.22094 6.90906L8.07996 8.30333C8.1636 8.36608 8.26122 8.39629 8.35835 8.39629C8.5001 8.39629 8.63953 8.33261 8.73063 8.20991C8.88496 8.00493 8.84313 7.71353 8.6377 7.55969Z"
                      fill="#4198C5"
                    />
                    <path
                      d="M6.5 0.5C3.1914 0.5 0.5 3.1914 0.5 6.5C0.5 9.8086 3.1914 12.5 6.5 12.5C9.8086 12.5 12.5 9.8086 12.5 6.5C12.5 3.1914 9.8086 0.5 6.5 0.5ZM6.5 11.5705C3.70449 11.5705 1.42951 9.29551 1.42951 6.5C1.42951 3.70449 3.70449 1.42951 6.5 1.42951C9.29598 1.42951 11.5705 3.70449 11.5705 6.5C11.5705 9.29551 9.29551 11.5705 6.5 11.5705Z"
                      fill="#4198C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_8618">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                17:00
              </p>
            </div>
          </div>
        </div>
        <div className={styles.event}>
          <div className={styles.event__img}>
            <img src={photo4} alt="ddd" />
          </div>
          <div className={styles.event__title}>
            <p className={styles.event__title__name}>
              Тяга резинки в шаге со сгибанием локтя под 90 градусов
            </p>
            <div className={styles.event__title__icon}>
              <p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_8505)">
                    <path
                      d="M14.7461 3.82974C14.5881 3.73209 14.3909 3.72317 14.2248 3.80617L10.7143 5.56169V4.28561C10.7143 3.39801 9.99473 2.67847 9.10713 2.67847H1.60714C0.719541 2.67847 0 3.39801 0 4.28561V10.7142C0 11.6018 0.719541 12.3213 1.60714 12.3213H9.10713C9.99473 12.3213 10.7143 11.6018 10.7143 10.7142V9.4381L14.2248 11.1963C14.4895 11.3286 14.8112 11.2212 14.9435 10.9566C14.9811 10.8813 15.0005 10.7983 15 10.7142V4.28561C15.0001 4.09991 14.904 3.92742 14.7461 3.82974ZM9.64285 10.7142C9.64285 11.0101 9.403 11.2499 9.10713 11.2499H1.60714C1.31126 11.2499 1.07142 11.0101 1.07142 10.7142V4.28561C1.07142 3.98973 1.31126 3.74988 1.60714 3.74988H9.10713C9.403 3.74988 9.64285 3.98973 9.64285 4.28561V10.7142ZM13.9286 9.84742L10.7143 8.24027V6.75957L13.9286 5.15243V9.84742Z"
                      fill="#4198C5"
                    />
                    <path
                      d="M5.3571 5.35718C4.17362 5.35718 3.21423 6.31657 3.21423 7.50004C3.21423 8.68352 4.17362 9.64291 5.3571 9.64291C6.54058 9.64291 7.49997 8.68352 7.49997 7.50004C7.49997 6.31657 6.54055 5.35718 5.3571 5.35718ZM5.3571 8.57146C4.76538 8.57146 4.28568 8.09176 4.28568 7.50004C4.28568 6.90832 4.76538 6.42863 5.3571 6.42863C5.94882 6.42863 6.42852 6.90832 6.42852 7.50004C6.42852 8.09176 5.94882 8.57146 5.3571 8.57146Z"
                      fill="#4198C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_8505">
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Вебинар
              </p>
              <p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_8611)">
                    <path
                      d="M1.75781 1.17188H2.46094V0H3.63281V1.17188H11.3672V0H12.5391V1.17188H13.2422C14.2114 1.17188 15 1.96043 15 2.92969V13.2422C15 14.2114 14.2114 15 13.2422 15H1.75781C0.788555 15 0 14.2114 0 13.2422V2.92969C0 1.96043 0.788555 1.17188 1.75781 1.17188ZM1.17188 13.2422C1.17188 13.5653 1.43473 13.8281 1.75781 13.8281H13.2422C13.5653 13.8281 13.8281 13.5653 13.8281 13.2422V5.50781H1.17188V13.2422ZM1.17188 4.33594H13.8281V2.92969C13.8281 2.6066 13.5653 2.34375 13.2422 2.34375H12.5391V3.51562H11.3672V2.34375H3.63281V3.51562H2.46094V2.34375H1.75781C1.43473 2.34375 1.17188 2.6066 1.17188 2.92969V4.33594Z"
                      fill="#4198C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_8611">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="matrix(-1 0 0 1 15 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                9 марта 2021
              </p>
              <p>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_8618)">
                    <path
                      d="M8.6377 7.55969L6.96457 6.30484V3.7487C6.96457 3.49169 6.75682 3.28394 6.4998 3.28394C6.24278 3.28394 6.03503 3.49169 6.03503 3.7487V6.53725C6.03503 6.68364 6.10382 6.82169 6.22094 6.90906L8.07996 8.30333C8.1636 8.36608 8.26122 8.39629 8.35835 8.39629C8.5001 8.39629 8.63953 8.33261 8.73063 8.20991C8.88496 8.00493 8.84313 7.71353 8.6377 7.55969Z"
                      fill="#4198C5"
                    />
                    <path
                      d="M6.5 0.5C3.1914 0.5 0.5 3.1914 0.5 6.5C0.5 9.8086 3.1914 12.5 6.5 12.5C9.8086 12.5 12.5 9.8086 12.5 6.5C12.5 3.1914 9.8086 0.5 6.5 0.5ZM6.5 11.5705C3.70449 11.5705 1.42951 9.29551 1.42951 6.5C1.42951 3.70449 3.70449 1.42951 6.5 1.42951C9.29598 1.42951 11.5705 3.70449 11.5705 6.5C11.5705 9.29551 9.29551 11.5705 6.5 11.5705Z"
                      fill="#4198C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_8618">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                17:00
              </p>
            </div>
          </div>
        </div>
        <div className={styles.event}>
          <div className={styles.event__img}>
            <img src={photo4} alt="ddd" />
          </div>
          <div className={styles.event__title}>
            <p className={styles.event__title__name}>
              Тяга резинки в шаге со сгибанием локтя под 90 градусов
            </p>
            <div className={styles.event__title__icon}>
              <p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_8505)">
                    <path
                      d="M14.7461 3.82974C14.5881 3.73209 14.3909 3.72317 14.2248 3.80617L10.7143 5.56169V4.28561C10.7143 3.39801 9.99473 2.67847 9.10713 2.67847H1.60714C0.719541 2.67847 0 3.39801 0 4.28561V10.7142C0 11.6018 0.719541 12.3213 1.60714 12.3213H9.10713C9.99473 12.3213 10.7143 11.6018 10.7143 10.7142V9.4381L14.2248 11.1963C14.4895 11.3286 14.8112 11.2212 14.9435 10.9566C14.9811 10.8813 15.0005 10.7983 15 10.7142V4.28561C15.0001 4.09991 14.904 3.92742 14.7461 3.82974ZM9.64285 10.7142C9.64285 11.0101 9.403 11.2499 9.10713 11.2499H1.60714C1.31126 11.2499 1.07142 11.0101 1.07142 10.7142V4.28561C1.07142 3.98973 1.31126 3.74988 1.60714 3.74988H9.10713C9.403 3.74988 9.64285 3.98973 9.64285 4.28561V10.7142ZM13.9286 9.84742L10.7143 8.24027V6.75957L13.9286 5.15243V9.84742Z"
                      fill="#4198C5"
                    />
                    <path
                      d="M5.3571 5.35718C4.17362 5.35718 3.21423 6.31657 3.21423 7.50004C3.21423 8.68352 4.17362 9.64291 5.3571 9.64291C6.54058 9.64291 7.49997 8.68352 7.49997 7.50004C7.49997 6.31657 6.54055 5.35718 5.3571 5.35718ZM5.3571 8.57146C4.76538 8.57146 4.28568 8.09176 4.28568 7.50004C4.28568 6.90832 4.76538 6.42863 5.3571 6.42863C5.94882 6.42863 6.42852 6.90832 6.42852 7.50004C6.42852 8.09176 5.94882 8.57146 5.3571 8.57146Z"
                      fill="#4198C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_8505">
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Вебинар
              </p>
              <p>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_8611)">
                    <path
                      d="M1.75781 1.17188H2.46094V0H3.63281V1.17188H11.3672V0H12.5391V1.17188H13.2422C14.2114 1.17188 15 1.96043 15 2.92969V13.2422C15 14.2114 14.2114 15 13.2422 15H1.75781C0.788555 15 0 14.2114 0 13.2422V2.92969C0 1.96043 0.788555 1.17188 1.75781 1.17188ZM1.17188 13.2422C1.17188 13.5653 1.43473 13.8281 1.75781 13.8281H13.2422C13.5653 13.8281 13.8281 13.5653 13.8281 13.2422V5.50781H1.17188V13.2422ZM1.17188 4.33594H13.8281V2.92969C13.8281 2.6066 13.5653 2.34375 13.2422 2.34375H12.5391V3.51562H11.3672V2.34375H3.63281V3.51562H2.46094V2.34375H1.75781C1.43473 2.34375 1.17188 2.6066 1.17188 2.92969V4.33594Z"
                      fill="#4198C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_8611">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="matrix(-1 0 0 1 15 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                9 марта 2021
              </p>
              <p>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_8618)">
                    <path
                      d="M8.6377 7.55969L6.96457 6.30484V3.7487C6.96457 3.49169 6.75682 3.28394 6.4998 3.28394C6.24278 3.28394 6.03503 3.49169 6.03503 3.7487V6.53725C6.03503 6.68364 6.10382 6.82169 6.22094 6.90906L8.07996 8.30333C8.1636 8.36608 8.26122 8.39629 8.35835 8.39629C8.5001 8.39629 8.63953 8.33261 8.73063 8.20991C8.88496 8.00493 8.84313 7.71353 8.6377 7.55969Z"
                      fill="#4198C5"
                    />
                    <path
                      d="M6.5 0.5C3.1914 0.5 0.5 3.1914 0.5 6.5C0.5 9.8086 3.1914 12.5 6.5 12.5C9.8086 12.5 12.5 9.8086 12.5 6.5C12.5 3.1914 9.8086 0.5 6.5 0.5ZM6.5 11.5705C3.70449 11.5705 1.42951 9.29551 1.42951 6.5C1.42951 3.70449 3.70449 1.42951 6.5 1.42951C9.29598 1.42951 11.5705 3.70449 11.5705 6.5C11.5705 9.29551 9.29551 11.5705 6.5 11.5705Z"
                      fill="#4198C5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_8618">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                17:00
              </p>
            </div>
          </div>
        </div>
      </>
    ),
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
        <DropDownMenu />
      </div>

      <div className={styles.profile__categories}>
        <div className={styles.profile__categories__items}>
          <div>
            {tabs.map((tab, index) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(index)}
                className={`${styles.btn} ${activeTab == index ? styles.active : ""}`}
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
