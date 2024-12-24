const Navbar = () => {
    return (
        <div className="flex justify-between items-center my-[54px]">
            <p className="font-bold text-[32px]">Recipe Calories</p>
            <ul className="flex gap-12">
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
                <li>Search</li>
            </ul>
            <div className="flex items-center">
                <input className="bg-[#150B2B0D] py-3 px-6 rounded-[48px]" type="text" placeholder="Search" />
                <img className="ml-4" src='src/assets/profile_icon.png' alt="" />
            </div>
        </div>
    );
};

export default Navbar;