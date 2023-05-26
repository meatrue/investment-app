import { FC } from "react";

import { financialItems } from "../../mocks/financialItems";
import Content from "../../components/Content";

const Loans: FC = () => {
  const incomeItems = financialItems.filter((item) => item.type === "loan");

  return <Content data={incomeItems} />;
};

export default Loans;
