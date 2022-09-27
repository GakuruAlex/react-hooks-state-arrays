import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {

    const newFood = getNewRandomSpicyFood();

    console.log(newFood);

    const newFoods=[...foods,newFood];

    setFoods(newFoods);
  }

  function deleteFood(id){

    const remainingFoods=foods.filter((food)=>food.id!==id)
setFoods(remainingFoods)

  }
function heatLevelIncrease(id){
const foodToModify=foods.map((food)=>{

  if(food.id===id){
  deleteFood(food.id);

  const newFoodObject={...food,heatLevel:food.heatLevel+1};
  return newFoodObject;
}

  else return food;

}


)
setFoods(foodToModify);
}
  const foodList = foods.map((food) => (

    <li key={food.id} >

      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine} <button onClick={()=>deleteFood(food.id)}>Delete </button>
      <button onClick={()=>heatLevelIncrease(food.id)}>increaseHeatLevel</button>

    </li>
  ));

  return (
    <div>
      <button onClick={()=>handleAddFood()}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
