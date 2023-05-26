import { FC } from "react";
import { Link } from "react-router-dom";

import s from "./Tab.module.scss";

interface TabProps {
  title: string;
  link: string;
  isActive?: boolean;
}

const Tab: FC<TabProps> = ({ title, link, isActive }) => {
  const classNames = [s.link];
  isActive && classNames.push(s.active);

  return (
    <Link className={classNames.join(" ")} to={link}>
      {title}
    </Link>
  );
};

export default Tab;
