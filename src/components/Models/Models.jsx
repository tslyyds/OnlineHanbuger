import React from "react";
import Model from "./Model/Model";
import classStyle from './Models.module.css'

export default function Models(props) {
  return (
    <div className={classStyle.Models}>
      {props.meals.map((meal) => (
        <Model key={meal.id} meal={meal}></Model>
      ))}
    </div>
  );
}
