//购物车界面
import React, { useContext } from "react";
import Backdrop from "../Backdrop/Backdrop";
import Model from "../Models/Model/Model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classStyle from "./CartDetail.module.css";
import Context from "../../Context/CarContext";
import Confirm from "../Confirm/Confirm";
export default function CartDetail() {
  const ctx = useContext(Context);
  const [showConfirm, setShowConfirm] = React.useState(false);

  /* 打开清空页面 */
  const openConfirm = () => {
    setShowConfirm(true);
  };
  /* 关闭清空页 */
  const closeConfirm = () => {
    setShowConfirm(false);
  };
  /* 确定清空 */
  const closeAll = () => {
    ctx.clearCar();
  }
  return (
    <Backdrop>
      {/* 清空购物车的确认窗口 */}
      {showConfirm && (
        <Confirm
          title="确认清空购物车吗"
          onDesc={closeConfirm}
          onOK={closeAll}
        ></Confirm>
      )}

      {/* 加入购物车商品详情 */}
      <div className={classStyle.CartDetail}>
        <div className={classStyle.Header}>
          <span className={classStyle.titledes}>商品详情</span>
          <div className={classStyle.Trash} onClick={openConfirm}>
            <FontAwesomeIcon icon={faTrash} className={classStyle.icon} />
            <span>清空购物车</span>
          </div>
        </div>
        <div className={classStyle.Meals}>
          {ctx.items.map((item) => (
            <Model meal={item} key={item.id} isDesc="false"></Model>
          ))}
        </div>
      </div>
    </Backdrop>
  );
}
