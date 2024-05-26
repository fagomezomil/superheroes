import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
    const IrArriba = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="mt-20">
            <div className="bg-[url('../images/city.png')] h-[150px] object-contain bg-repeat"></div>
            <div className=" bg-[#f1f2f2] h-[250px]">
                <div className="max-w-7xl mx-auto relative">
                    <button onClick={IrArriba} className="bg-gray-500 text-white rounded-full p-3 absolute text-lg ml-4">
                        <FaArrowUp />
                    </button>
                    <p className="font-normal italic text-gray-500 text-4xl text-center pt-10">No seria lo mismo sin mi!</p>
                    <p className="font-light text-md uppercase text-gray-400 text-center">Stan Lee</p>
                    <img className="absolute right-10 -top-56 h-[450px]" alt="Stan Lee" src="./images/stan.png"/>
                    <hr className="border-gray-400 mt-20" />
                    <p className="text-center font-medium text-gray-500 text-sm mt-6">San Miguel de Tucumán - <strong>Mayo 2024</strong></p>
                </div>
            </div>
        </div>
    )
}
