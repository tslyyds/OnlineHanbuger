/* 结算页面 */
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import classStyle from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Context from "../../Context/CarContext";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
const payPage = document.getElementById("payPage");

export default function Checkout(props) {
  const ctx = useContext(Context);
  return ReactDOM.createPortal(
    <div className={classStyle.payPage}>
      {/* 关闭图标 */}
      <div className={classStyle.close}>
        <FontAwesomeIcon icon={faXmark} onClick={() => props.closeHandler()} />
      </div>
      {/* 结账列表 */}
      <div className={classStyle.checkoutContain}>
        <div className={classStyle.header}>商品详情</div>
        {/* 最终商品列表 */}
        <div className={classStyle.list}>
          <CheckoutItem></CheckoutItem>
        </div>
        <div className={classStyle.footer}>
          合计 ￥ <span>{ctx.totalPrice}</span>
        </div>
      </div>
    </div>,
    payPage
  );
}
