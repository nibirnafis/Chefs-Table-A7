import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import W2C from "../W2C/W2C";
import CC from "../CC/CC";
import { split } from "postcss/lib/list";


const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [w2cList, setW2cList] = useState([])
    const [ccList, setCCList] = useState([])
    const [totalTime, setTotalTime] = useState(0)
    const [totalCalories, setTotalCalories] = useState(0)
    


    useEffect(()=>{
        fetch('Recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])

    const addWantToCook = (recipe) => {
        const newW2cList = [...w2cList, recipe]
        setW2cList(newW2cList)
        console.log('added')
    }

    const removeWantToCook = (recipe) => {
        const newW2cList = w2cList.filter(item => item.id !== recipe.id)
        setW2cList(newW2cList)
        console.log('removed')
    }

    const addToCC = (recipe) => {
        const newCCList = [...ccList, recipe]
        setCCList(newCCList)
        const newW2cList = w2cList.filter(item => item.id !== recipe.id)
        setW2cList(newW2cList)
        const newTime = totalTime + recipe.preparing_time
        setTotalTime(newTime)
        calorieCalculate(recipe)
    }

    const calorieCalculate = (recipe) => {
        const string = recipe.calories
        const array = string.split(' ')
        const stringArray = array.map(num => parseInt(num))
        const numArray = stringArray.filter(number => isNaN(number) === false)
        const [cal] = numArray
  
        const newTotalCalories = totalCalories + cal
        setTotalCalories(newTotalCalories)
    }


    return (
        <div className="flex flex-col">
            <div className="mb-[48px] lexend">
                <p className="text-center font-semibold text-[40px] mb-[24px]">Our Recipes</p>
                <p className="text-center font-normal text-[16px]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding 
                    <br />problems to become an exceptionally well world-class Programmer.</p>
            </div>
            <div className="flex justify-between">
                <div className="grid grid-cols-2 gap-[24px]">
                    {
                        recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} addWantToCook={addWantToCook} removeWantToCook={removeWantToCook}></Recipe>)
                    }
                </div>
                <div className="flex flex-col items-center border-[1px] rounded-[16px]">
                    <p className="lexend font-semibold text-[24px] px-[75px] mt-[32px] mb-[16px] border-b-[1px]">Want to cook: {w2cList.length}</p>
                    <table className="w-[514px] text-center">
                        <thead>
                            <tr>
                                <th className="pt-[24px] pb-[16px]"></th>
                                <th className="pt-[24px] pb-[16px]">Name</th>
                                <th className="pt-[24px] pb-[16px]">Time</th>
                                <th className="pt-[24px] pb-[16px]">Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            w2cList.map((recipe, idx) => <W2C 
                                key={idx} 
                                recipe={recipe} 
                                serial={w2cList.length - (w2cList.length - (idx+1))}
                                addToCC={addToCC}
                                ></W2C>)
                        }
                        </tbody>
                    </table>


                    <p className="lexend font-semibold text-[24px] px-[75px] mt-[32px] mb-[16px] border-b-[1px]">Currently cooking: {ccList.length}</p>
                    <table className="w-[514px] text-center">
                        <thead>
                            <tr>
                                <th className="pt-[24px] pb-[16px]"></th>
                                <th className="pt-[24px] pb-[16px]">Name</th>
                                <th className="pt-[24px] pb-[16px]">Time</th>
                                <th className="pt-[24px] pb-[16px]">Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            ccList.map((recipe, idx) => <CC 
                                key={idx} 
                                recipe={recipe} 
                                serial={ccList.length - (ccList.length - (idx+1))} 
                                ></CC>)                            
                        }
                            <tr className="bg-[#28282808] mb-[16px]">
                                <td className="px-[12px] py-[16px]"></td>
                                <td className="px-[12px] py-[16px]"></td>
                                <td className="px-[12px] py-[16px]">Total Time = <br />{totalTime} minutes</td>
                                <td className="px-[12px] py-[16px]">Total Calories = <br /> {totalCalories} calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Recipes;