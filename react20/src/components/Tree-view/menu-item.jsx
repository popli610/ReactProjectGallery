import React, { useState } from "react";
import MenuList from "./menu-list";
import {FaPlus, FaMinus} from 'react-icons/fa'

const MenuItem = ({ item }) => {
  const [displayChildren, setDisplayChildren] = useState(false);
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item.children && item.children.length > 0 ? (
          <span onClick={() => setDisplayChildren(!displayChildren)}>
            {displayChildren ? <FaMinus/>: <FaPlus/>}
          </span>
        ) : null}
      </div>
      {item.children && item.children.length > 0 && displayChildren ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
