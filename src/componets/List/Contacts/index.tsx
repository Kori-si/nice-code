import React, { FC } from "react";
import styles from "./Contacts.module.scss";
import { IContacts } from "./ContactsTypes";

export const Contacts: FC<IContacts> = ({ name, photo, email }) => {
  return (
    <div className={styles.list__contacts}>
      <img width={40} height={40} src={photo} alt="photo" />
      <p>{name || email}</p>
    </div>
  );
};
