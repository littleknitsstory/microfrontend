import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useLksService from "./api";
import "./css/menu_style.css";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const { getMenu } = useLksService();

  function isExternal(url) {
    return url.search(/http(s?):\/\//) > -1;
  }

  useEffect(() => {
    getMenu().then((data) => setMenu(data.results));
  }, []);

  return (
    <>
      <h1 className="styleColor">Hello LKS!</h1>
      <div className="links">
        <nav>
          <ul>
            {menu.map((item) => (
              <li key={item.id}>
                {isExternal(item.url) ? (
                  <a href={item.url} target="_blank">
                    {item.name}
                  </a>
                ) : (
                  <NavLink to={item.url} className="nav-current">
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
