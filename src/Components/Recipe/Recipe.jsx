import { useState } from "react";

const Recipe = ({recipe, addWantToCook, removeWantToCook}) => {
    const {name, image, description, ingredients, preparing_time, calories} = recipe

    const [selected, setSelected] = useState(false)

    const isSelected = () => {
        setSelected(!selected)
    }

    return (
        <div className="flex flex-col p-[24px] border-[1px] rounded-[16px] max-w-[378px]">
            <img className="w-[330px] rounded-[16px] mb-[24px]" src={image} alt="" />
            <p className="font-semibold text-[20px] mb-[16px]">{name}</p>
            <p className="fira-sans font-normal text-[16px] text-[#878787] mb-[16px]">{description}</p>
            <ul className="border-y-2 pt-[24px] pb-[16px]">
                <p className="lexend font-normal text-[18px] mb-[16px]">Ingredients: {ingredients.length}</p>
                {
                    ingredients.map((ingredient, idx) => <li className="fira-sans font-normal text-[#878787] text-[18px]" key={idx}>{ingredient}</li>)
                }
            </ul>
            <div className="flex my-[24px]">
                <div className="flex mr-[16px]">
                    <img className="mr-[3px]" src="src/assets/clock_icon.png" alt="" />
                    <p>{preparing_time}</p>
                </div>
                <div className="flex">
                    <img className="mr-[3px]" src="src/assets/cal_icon.png" alt="" />
                    <p>{calories}</p>
                </div>
            </div>
            <div>
            <button onClick={()=>{
                {!selected ? addWantToCook(recipe) : removeWantToCook(recipe)};
                isSelected()
            }} className="py-[14px] px-[24px] rounded-[50px] bg-[#0BE58A] lexend font-normal text-[18px]">Want to Cook</button>
            </div>
        </div>
    );
};

export default Recipe;