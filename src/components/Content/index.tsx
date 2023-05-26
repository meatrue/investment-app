import { FC } from "react";

import { FinancialItem } from "../../types/financial-data";

import s from "./Content.module.scss";

interface ContentProps {
  data: FinancialItem[];
}

const Content: FC<ContentProps> = ({ data }) => {
  return (
    <ul className={s.container}>
      <li className={`${s.listItem} ${s.listTitle}`}>
        <span>Name</span>
        <span>Amount</span>
      </li>
      {data.map(({ name, amount }) => (
        <li key={`${name.first} ${name.last}`} className={s.listItem}>
          <span>
            {name.first} {name.last}
          </span>
          <span>{amount}</span>
        </li>
      ))}
    </ul>
  );
};

export default Content;
