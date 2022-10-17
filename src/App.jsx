import React, { useState } from "react";
import Models from "./components/Models/Models";
import "./App.css";
import Context from "./Context/CarContext";
import Search from "./components/Search/Search";
import Cart from "./components/Cart/Cart";

document.documentElement.style.fontSize = 100 / 750 + "vw";
/* 模拟汉堡数据 */
const MEALS_DATA = [
  {
    id: 1,
    imgsrc: "./img/food/food.png",
    name: "汉堡包1",
    desc: "百分百纯正，好吃又便宜。百分百纯正，好吃又便宜。百分百纯正，好吃又便宜。",
    price: 10,
  },
  {
    id: 2,
    imgsrc: "./img/food/food.png",
    name: "汉堡包2",
    desc: "百分百纯正，好吃又便宜。百分百纯正，好吃又便宜。百分百纯正，好吃又便宜。",
    price: 10,
  },
  {
    id: 3,
    imgsrc: "./img/food/food.png",
    name: "汉堡包3",
    desc: "百分百纯正，好吃又便宜。百分百纯正，好吃又便宜。百分百纯正，好吃又便宜。",
    price: 10,
  },
  {
    id: 4,
    imgsrc: "./img/food/food.png",
    name: "汉堡包4",
    desc: "百分百纯正，好吃又便宜。百分百纯正，好吃又便宜。百分百纯正，好吃又便宜。",
    price: 10,
  },
  {
    id: 5,
    imgsrc: "./img/food/food.png",
    name: "汉堡包5",
    desc: "百分百纯正，好吃又便宜。百分百纯正，好吃又便宜。百分百纯正，好吃又便宜。",
    price: 10,
  },
  {
    id: 6,
    imgsrc: "./img/food/food.png",
    name: "汉堡包6",
    desc: "百分百纯正，好吃又便宜。百分百纯正，好吃又便宜。百分百纯正，好吃又便宜。",
    price: 10,
  },
  {
    id: 7,
    imgsrc: "./img/food/food.png",
    name: "汉堡包7",
    desc: "百分百纯正，好吃又便宜。百分百纯正，好吃又便宜。百分百纯正，好吃又便宜。",
    price: 10,
  },
];
/* 购物车的初始状态 */
const INIT_CAR = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

export default function App() {
  const [meals, setMeals] = useState(MEALS_DATA);
  const [car, setCar] = useState(INIT_CAR);
  /* 添加物品 */
  const addItem = (meal) => {
    //创建一个新的购物车
    const newCar = { ...car };
    //当前购物车中没有这个商品
    if (newCar.items.indexOf(meal) === -1) {
      //新增物品数量属性
      meal.count = 1;
      //添加到购物车
      newCar.items.push(meal);
    } else {
      meal.count += 1;
    }
    //计算物品总数量
    newCar.totalAmount += 1;
    //计算总价
    newCar.totalPrice += meal.price;

    setCar(newCar);
  };
  /* 减少物品 */
  const removeItem = (meal) => {
    const newCar = { ...car };
    //当前购物车中还有这个商品
    meal.count -= 1;
    if (meal.count === 0) {
      newCar.items.splice(newCar.items.indexOf(meal), 1);
    }
    //计算物品总数量
    newCar.totalAmount -= 1;
    //计算总价
    newCar.totalPrice -= meal.price;

    setCar(newCar);
  };
  /* 清空购物车 */
  const clearCar = () => {
    const newCar = { ...car };
    newCar.items.map((item) => {
      return delete item.count;
    });

    newCar.items = [];
    newCar.totalAmount = 0;
    newCar.totalPrice = 0;
    setCar(newCar);
  };
  /* 搜索框过滤食物 */
  const searchFood = (mealname) => {
    const newMeals = MEALS_DATA.filter((meal) => meal.name.includes(mealname));
    setMeals(newMeals);
  };
  return (
    <Context.Provider value={{ ...car, addItem, removeItem, clearCar }}>
      <Search onFilter={searchFood}></Search>
      <Models meals={meals}></Models>
      <Cart></Cart>
    </Context.Provider>
  );
}
