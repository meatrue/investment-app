import { FC } from "react";
import { useLocation } from "react-router-dom";

import { navigation } from "../../settings";
import Tab from "./Tab";

import s from "./Navigation.module.scss";

const INITIAL_TAB = "income";

const Navigation: FC = () => {
  const location = useLocation();
  const locationName = location.pathname.split("/")[1] || INITIAL_TAB;
  console.log(locationName);

  return (
    <nav className={s.container}>
      {navigation.map(({ title, link }) => (
        <Tab
          key={link}
          title={title}
          link={link}
          isActive={link === locationName}
        />
      ))}
    </nav>
  );
};

export default Navigation;
