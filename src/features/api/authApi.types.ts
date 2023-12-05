export type ResponseAuth<T> = {
  resultCode: 0 | 1 | 10;
  messages: string[];
  data: T;
};

export type LoginResponseData = {
  userId: number;
};

export type MeResponseData = {
  id: number;
  email: string;
  login: string;
};
