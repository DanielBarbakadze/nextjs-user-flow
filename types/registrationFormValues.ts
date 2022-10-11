export type CarModelTypes =
  | "Audi"
  | "BMW"
  | "Mercedes"
  | "Volkswagen"
  | "Volvo"
  | "Tesla"
  | "Other";

export type FormValuesTypes = {
  email?: string;
  password?: string;
  bankDetails?: {
    accountNumber: string;
    expirationDate: string;
    securityCode: string;
  };
  carModel?: CarModelTypes;
  fileAttachment?: File;
};

export type UsersDataType = {
  [email: string]: FormValuesTypes;
};
