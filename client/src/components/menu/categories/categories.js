import React, { useState, useEffect } from "react";
import Radium from "radium";
import { Link } from "react-router-dom";
import styles from "./style";
import Icon from "../../icons/Icon";

const Categories = () => {
  const [state, setState] = useState({
    active: null,
    categories: [],
  });

  const getData = () => {
    fetch("/categories")
      .then((res) => res.json())
      .then((data) => {
        setState({ ...state, categories: data });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleSubItem = (id) => {
    setState({ ...state, active: id });
  };

  return (
    <div style={styles.base}>
      <ul style={{ padding: "0", margin: "0px" }}>
        <Link to="/products/All">
          <li style={[styles.item, styles.category]}>All</li>
        </Link>
      </ul>
      {state.categories.map((item, id) => (
        <ul style={{ padding: "0", margin: "0px" }} key={item.title}>
          <Link to={`/products/${item.title}`}>
            <li>
              <div
                role="button"
                tabIndex={0}
                onClick={() => toggleSubItem(id)}
                key={item._id}
                onKeyDown={toggleSubItem}
                style={[
                  styles.item,
                  styles.category,
                  state.active === id ? styles.activeArrow : styles.inactiveArrow,
                ]}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "90% 10%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "90%",
                  }}
                >
                  {item.title}
                  <span
                    style={[
                      state.active === id ? styles.rotateIcon : "",
                      { display: "inline-block" },
                    ]}
                  >
                    <Icon icon="typcn typcn-chevron-right" color="secondary" />
                  </span>
                </div>
              </div>
            </li>
          </Link>
          <div style={state.active === id ? styles.active : styles.inactive}>
            {item.subcategories.map((subItem) => (
              <Link to={`/products/${item.title}/${subItem.title}`}>
                <li key={subItem._id} style={[styles.subCategory, styles.item]}>
                  {subItem.title}
                </li>
              </Link>
            ))}
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Radium(Categories);
