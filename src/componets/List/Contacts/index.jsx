import React from "react";
import styles from "./Contacts.module.scss";

export const Contacts = ({ name, photo, email }) => {
  return (
    <div className={styles.list__contacts}>
      <img src={photo} alt="photo" />
      <p>{name || email}</p>
    </div>
  );
};
