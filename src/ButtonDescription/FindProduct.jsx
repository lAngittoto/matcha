import { useState } from "react";

const FindProducts = () => {
    const [selectedOption, setSelectedOption] = useState ("");
    const handleEnterClick = () => {
        console.log("Selected:", selectedOption)
        setSelectedOption("");
        
    };
  return (
    <>
        <select name="" id="" className="placeholder-black  bg-[#7ED957]  outline-none px-2 py-2 rounded-2xl lg:px-5 lg:text-[1rem] text-[0.8rem] w-[250px] cursor-pointer" 
        value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="" disabled selected className="text-black">Find Order</option>
            <option value="ClassicPure">Classic and Pure</option>
        </select>
          <button className=" bg-[#7ED957]  outline-none px-5 py-2 rounded-2xl lg:text-[1rem] text-[0.8rem] cursor-pointer" onClick={handleEnterClick}>Enter</button>
  </>
  );
};

export default FindProducts;