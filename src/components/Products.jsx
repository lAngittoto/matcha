import CeremonialGrade from "../assets/images/CeremonialGrade.png";
import Descriptions from "../ButtonDescription/Descriptions";
import Buys from "../ButtonDescription/Buys";
import AddCarts from "../ButtonDescription/AddCarts";
const Products = () => {
  return (
    <>
      <div className="px-7 py-10">
        <h1 className="py-10 text-3xl text-white">
          Classic & Pure <span className="text-black text-2xl">Buy 1 take 1</span>
        </h1>
       
        <section className="bg-[#7ED957] lg:w-[400px] lg:h-[250px] rounded-2xl flex flex-row px-5 gap-2">
          <div className="flex flex-col justify-center items-center gap-3 w-[180px] ">
            <img
              src={CeremonialGrade}
              alt="Ceremonial Grade Matcha"
              className="object-contain"
            />
            <AddCarts>Add cart</AddCarts>
            <Buys>₱ 350</Buys>
          </div>
          <div className="w-[180px] bg-red-50 px-5 flex  flex-col justify-center">
          <Descriptions
            menu={{
              flavor:
                "Ceremonial Grade Matcha –",
                addedFlavor: "high-quality, smooth, slightly sweet.",
            }}
          />
        </div>
           <div>❤</div>
        </section>
      </div>
    </>
  );
};
export default Products;
