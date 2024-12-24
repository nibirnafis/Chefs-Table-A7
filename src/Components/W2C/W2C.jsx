const W2C = ({recipe, serial, addToCC}) => {
    const {name, preparing_time, calories} = recipe

    
    return (
        <tr className="bg-[#28282808] mb-[16px]">
            <td className="px-[12px] py-[16px]">{serial}</td>
            <td className="px-[12px] py-[16px]">{name}</td>
            <td className="px-[12px] py-[16px]">{preparing_time}</td>
            <td className="px-[12px] py-[16px]">{calories}</td>
            <td onClick={()=>{addToCC(recipe)}
                } className="px-[12px] py-[16px]"><button className="py-[9px] px-[18px] rounded-[50px] bg-[#0BE58A] lexend font-normal text-[16px]">Preparing</button></td>
        </tr>
    );
};

export default W2C;