// import styles from "../styles.scss";



import styles from "./HomeStyles.module.scss";

import { Contacts } from "../List/Contacts";
import contacts from "../../assets/contact/contascts.json";
import { List } from "../List";
import React from "react";
import { Profile } from "../Profile/Profile";

console.log(contacts);

export const Home = () => {

  return (
    <div className={styles.wrapper}>
      <List />
      <Profile/>
    </div>
  );
};
