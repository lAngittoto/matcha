import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FindProducts = ({ onEnter }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleEnterClick = () => {
    console.log("Selected:", selectedOption);
    if (onEnter) {
      onEnter(selectedOption);
    }

     if(selectedOption === "ClassicPure"){
      navigate("/classic-pure"); 
     }else if (selectedOption === "FlavoredMatcha"){
      navigate("/flavored-matcha");
     }else if(selectedOption == "DessertInspired"){
      navigate('/dessert-inspired')
     }

  };

  return (
    <>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="placeholder-black bg-[#7ED957] outline-none px-2 py-2 rounded-2xl lg:px-5 lg:text-[1rem] text-[0.8rem] w-[250px] cursor-pointer"
      >
        <option value="" disabled>Find Order</option>
        <option value="ClassicPure">Classic and Pure</option>
        <option value="FlavoredMatcha">Flavored Matcha</option>
        <option value="DessertInspired">Dessert Inspired</option>
      </select>
      <button
        className="bg-[#7ED957] outline-none px-5 py-2 rounded-2xl lg:text-[1rem] text-[0.8rem] cursor-pointer active:bg-white"
        onClick={handleEnterClick}
      >
        Enter
      </button>
    </>
  );
};

export default FindProducts;
