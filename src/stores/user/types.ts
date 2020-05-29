export type User = {
  id: number;
  username: string;
  name: string;
  phone: string;
  birth: Date;
  sex: string;
  created_at: Date;
  updated_at?: Date;
};

export type Account = {
  id: string;
  dl: number;
  cp: number;
  created_at: Date;
  updated_at?: Date;
};

export type UserType = {
  idx: number;
  id: string;
  name: string;
  phone: string;
  birthDay: string;
  type: number;
  point: number;
  pushRecoCode?: string;
  recoCode: string;
  recoPerson: number;
  recoPrice: number;
  gender: number;
  signDate: string;
  dl: number;
};

export type PremiumType = {
  idx: number;
  updated_at: Date;
  content: string;
};
