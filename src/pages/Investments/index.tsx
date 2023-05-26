import { FC } from "react";

import { financialItems } from "../../mocks/financialItems";
import Content from "../../components/Content";

const Investments: FC = () => {
  const incomeItems = financialItems.filter(
    (item) => item.type === "investment"
  );

  return <Content data={incomeItems} />;
};

export default Investments;
