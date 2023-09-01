import React from "react";
import {SearchContext} from "../../App";
import {Contacts} from "./Contacts";
import {Search} from "./Search/Search";

import contact from "../../assets/contact/contascts.json";
import styles from "./ListStyles.module.scss";


export const List = () => {
    const {searchValue} = React.useContext(SearchContext);

    let contactsSearch = contact
        .filter((obj) => {
            if (obj.name  && obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
              return true;
            } else if (obj.email && obj.email.toLowerCase().includes(searchValue.toLowerCase())) {
              return true;
            }
            return false;
        })
        .map((obj) => obj);
    return (
        <div className={styles.list}>
            <Search/>
            <div className={styles.list__counter}>
                <p className={styles.list__counter__count}>213</p>
                <p className={styles.list__counter__btn}>Выбрать</p>
            </div>
            {contactsSearch.map((obj, index: number) => (
                <Contacts
                    key={index}
                    name={obj.name}
                    photo={obj.photo}
                    email={obj.email}
                />
            ))}
        </div>
    );
};
