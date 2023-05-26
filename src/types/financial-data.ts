export type FinancialType = "income" | "outcome" | "loan" | "investment";

type UserName = {
  first: string;
  last: string;
};

export type FinancialItem = {
  ["_id"]: string;
  amount: number;
  type: FinancialType;
  name: UserName;
  company: string;
  email: string;
  phone: string;
  address: string;
};
