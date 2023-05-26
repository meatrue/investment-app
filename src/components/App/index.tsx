import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../Layout";
import Income from "../../pages/Income";
import Outcome from "../../pages/Outcome";
import Loans from "../../pages/Loans";
import Investments from "../../pages/Investments";
import NotFound from "../../pages/NotFound";
import { Pages } from "../../settings";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Income />} />
          <Route path={`/${Pages.INCOME}`} element={<Income />} />
          <Route path={`/${Pages.OUTCOME}`} element={<Outcome />} />
          <Route path={`/${Pages.LOANS}`} element={<Loans />} />
          <Route path={`/${Pages.INVESTMENTS}`} element={<Investments />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
