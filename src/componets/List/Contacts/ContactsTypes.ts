export interface IContacts {
  name: string | undefined;
  photo: string;
  email: string | undefined;
}

export interface IContactsData {
  data: IContacts;
}
