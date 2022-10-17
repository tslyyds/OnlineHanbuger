import React from "react";
import clasStyle from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search(props) {

  const foodFilter = (e) => {
    const searchFood = e.target.value.trim()
    props.onFilter(searchFood);
  };

  return (
    <div className={clasStyle.Search}>
      <div className={clasStyle.searchContain}>
        <input
          onChange={foodFilter}
          className={clasStyle.searchInput}
          type="text"
          placeholder="请输入关键字"
        />
        <FontAwesomeIcon icon={faSearch} className={clasStyle.searchIcon} />
      </div>
    </div>
  );
}
