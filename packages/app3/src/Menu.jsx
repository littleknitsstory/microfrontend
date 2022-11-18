import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLksService from "./api";
import "./css/menu.css";

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
      <h1>Hello LKS!</h1>
      <nav>
        <ul className="links">
          {menu.map((item) => (
            <li key={item.id}>
              {isExternal(item.url) ? (
                <a href={item.url} target="_blank">
                  {item.name}
                </a>
              ) : (
                <Link to={item.url}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
