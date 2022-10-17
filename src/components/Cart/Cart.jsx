import React, { useContext, useState } from "react";
import clasStyle from "./Cart.module.css";
import boxurl from "../../asset/box.png";
import Context from "../../Context/CarContext";
import CartDetail from "../CartDetail/CartDetail";
import Checkout from "../Checkout/Checkout";

export default function Cart() {
  const ctx = useContext(Context);
  const [ishowdetail, setIshowdetail] = useState(false);
  const [ishowcheckout, setIshowcheckout] = useState(false);
  //控制是否显示已加入购物车的商品详情
  const showDetaiHandler = () => {
    if (ctx.items.length === 0) {
      setIshowdetail(false);
      return;
    }
    setIshowdetail(!ishowdetail);
  };
  //打开结算页面
  const showCheckoutHandler = () => {
    if (ctx.items.length === 0) {
      setIshowcheckout(false);
      return;
    }
    setIshowcheckout(true)
  }
  //关闭结算页面
  const closeCheckoutHandler = () => {
    setIshowcheckout(false)
  }

  return (
    <>
      {/* 结账界面 */}
      {ishowcheckout && <Checkout closeHandler={closeCheckoutHandler} />}

      {/* 点击购物条出现的购物清单 */}
      {ishowdetail && ctx.items.length > 0 && <CartDetail />}

      {/* 底部的购物条 */}
      <div className={clasStyle.Cart} onClick={showDetaiHandler}>
        <div className={clasStyle.box}>
          <img src={boxurl} alt="" />
          {ctx.totalAmount > 0 ? <span>{ctx.totalAmount}</span> : null}
        </div>
        <div className={clasStyle.moneyGo}>
          {ctx.totalAmount > 0 ? (
            <span className={clasStyle.money}>{ctx.totalPrice}</span>
          ) : (
            <span className={clasStyle.noMeal}>未选择商品</span>
          )}
          <button
          onClick={showCheckoutHandler}
            className={`${clasStyle.button} ${
              ctx.totalAmount > 0 ? "" : clasStyle.Disabled
            }`}
          >
            去结算
          </button>
        </div>
      </div>
    </>
  );
}
