import { FC } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../Navigation";

import s from "./Layout.module.scss";

const Layout: FC = () => {
  return (
    <div className={s.container}>
      <header>
        <Navigation />
      </header>

      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
