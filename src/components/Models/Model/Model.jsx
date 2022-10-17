import React from "react";
import clasStyle from "./Model.module.css";
import Count from "../../Count/Count";

export default function Model(props) {
 
  return (
    <div className={clasStyle.Meal}>
      {/* 汉堡图片 */}
      <div className={clasStyle.ImgBox}>
        <img src={props.meal.imgsrc} alt="" />
      </div>
      <div className={clasStyle.foodDesc}>
        {/* 汉堡名称 */}
        <h4>{props.meal.name}</h4>
        {/* 汉堡描述 */}
        {props.isDesc ? null : <p>{props.meal.desc}</p>}
        <div className={clasStyle.priceWarp}>
          {/* 汉堡价格 */}
          <span className={clasStyle.money}>{props.meal.price}</span>
          {/* 汉堡数量 */}
          <Count meal={props.meal} />
        </div>
      </div>
    </div>
  );
}
