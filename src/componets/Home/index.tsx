import React from "react";
import styles from "./HomeStyles.module.scss";
import { List } from "../List";
import { Profile } from "../Profile/Profile";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <List />
      <Profile />
    </div>
  );
};
