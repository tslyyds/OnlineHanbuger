//物品加减按钮
import React, { useContext } from "react";
//引入字体图标
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
//引入样式
import clasStyle from "./Count.module.css";
//引入上下文
import Context from "../../Context/CarContext";

export default function Count(props) {
  //Context组件
  const ctx = useContext(Context);

  //添加按钮
  const addBtn = () => {
    ctx.addItem(props.meal);
  }
  //减少按钮
  const subBtn = (e) => {
    e.stopPropagation();
    ctx.removeItem(props.meal);
  }
  return (
    <div className={clasStyle.Count}>
      {props.meal.count > 0 ? (
        <>
          <button className={clasStyle.Sub} onClick={subBtn}>
            <FontAwesomeIcon icon={faMinus}  />
          </button>
          <span className={clasStyle.Sum}>{props.meal.count}</span>
        </>
      ) : null}

      <button className={clasStyle.Add} onClick={addBtn}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
