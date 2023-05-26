import { FC } from "react";

import { financialItems } from "../../mocks/financialItems";
import Content from "../../components/Content";

const Outcome: FC = () => {
  const incomeItems = financialItems.filter((item) => item.type === "outcome");

  return <Content data={incomeItems} />;
};

export default Outcome;
