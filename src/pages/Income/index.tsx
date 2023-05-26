import { FC } from "react";

import Content from "../../components/Content";
import { financialItems } from "../../mocks/financialItems";

const Income: FC = () => {
  const incomeItems = financialItems.filter((item) => item.type === "income");

  return <Content data={incomeItems} />;
};

export default Income;
