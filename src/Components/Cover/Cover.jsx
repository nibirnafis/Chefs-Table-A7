

const Cover = () => {
    return (
        <div className="flex justify-center items-center mb-[100px]">
            <div className="absolute">
                <p className="text-center text-white font-bold text-[52px] mb-[24px]">Discover an exceptional cooking <br />class tailored for you!</p>
                <p className="text-center text-white font-normal text-[18px] mb-[40px]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />problems to become an exceptionally well world-class Programmer.</p>
                <div className="flex justify-center">
                    <button className="rounded-[50px] bg-[#0BE58A] py-[20px] px-[30px] font-semibold text-[20px]">Explore Now</button>
                    <button className="rounded-[50px] border-white py-[20px] px-[30px] font-semibold text-[20px] text-white">Our Feedback</button>
                </div>
            </div>
            <img src="src/assets/main_banner.png" alt="" />
        </div>
    );
};

export default Cover;