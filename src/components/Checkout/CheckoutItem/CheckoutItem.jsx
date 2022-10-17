import React, { useContext } from "react";
import Count from "../../Count/Count";
import ClassStyle from "./CheckoutItem.module.css";
import Context from "../../../Context/CarContext";
export default function CheckoutItem() {
  const ctx = useContext(Context);
  return (
    <div>
      {ctx.items.map((item) => (
        <div className={ClassStyle.Item} key={item.id}>
          <div className={ClassStyle.img}>
            <img src={item.imgsrc} alt=''/>
          </div>
          <div className={ClassStyle.info}>
            <div className={ClassStyle.title}>{item.name}</div>
            <div className={ClassStyle.btns}>
              <div className={ClassStyle.count}>
                <Count meal={item}></Count>
              </div>
              <div className={ClassStyle.money}>{item.price * item.count}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
