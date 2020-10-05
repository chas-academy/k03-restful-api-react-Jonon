import React, { useState, useEffect } from "react";
import Radium from "radium";
import { Link } from "react-router-dom";
import styles from "./style";
import Icon from "../../icons/Icon";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getData = () => {
    fetch("/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleSubItem = (id) => {
    // copy array
    const newArray = [...categories];
    // check if array is empty
    if (newArray[id].subcategories.length) {
      newArray[id].show = !newArray[id].show;
      setCategories([...categories]);
    }
  };

  return (
    <div style={styles.base}>
      <ul style={{ padding: "0", margin: "0px" }}>
        <Link to="/products/All">
          <li style={[styles.item, styles.category]}>All</li>
        </Link>
      </ul>
      {categories.map((item, id) => (
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
                  {
                    borderLeft: item.show ? `5px solid #C61017` : "5px solid white",
                    backgroundColor: item.show ? `#FAFAFA` : "white",
                  },
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
                      item.show ? styles.rotateIcon : "",
                      { display: "inline-block" },
                    ]}
                  >
                    <Icon icon="typcn typcn-chevron-right" color="secondary" />
                  </span>
                </div>
              </div>
            </li>
          </Link>
          <div style={{ display: item.show ? "block" : "none" }}>
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
