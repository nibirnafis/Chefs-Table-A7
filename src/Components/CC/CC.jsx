const CC = ({recipe, serial}) => {
const {name, preparing_time, calories} = recipe

    return (
        <tr className="bg-[#28282808] mb-[16px]">
            <td className="px-[12px] py-[16px]">{serial}</td>
            <td className="px-[12px] py-[16px]">{name}</td>
            <td className="px-[12px] py-[16px]">{preparing_time}</td>
            <td className="px-[12px] py-[16px]">{calories}</td>
        </tr>
    );
};

export default CC;