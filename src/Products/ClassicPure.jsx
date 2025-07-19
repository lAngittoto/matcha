import Buys from "../ButtonDescription/Buys";
import AddCarts from "../ButtonDescription/AddCarts";
import Favorites from "../ButtonDescription/Favorites";
function ClassicPure({ matchaProduct }) {
  return (
    <>
      <section className="bg-[#7ED957] lg:w-[420px] lg:h-[250px] rounded-2xl flex flex-row px-5 gap-2 md:h-[270px] h-[270px]">
        <div className="flex flex-col justify-center items-center gap-3 w-[180px]">
          <img
            src={matchaProduct.image}
            alt="No Wifi Please Connect."
            className="object-contain"
          />
          <AddCarts>Add cart</AddCarts>
          <Buys>₱ 350</Buys>
        </div>
        <div className="w-[180px] bg-red-50 px-5 flex  flex-col justify-center">
          <h1 className="text-[1rem font-bold">{matchaProduct.flavor}</h1>
          <span className="text-[1rem]">{matchaProduct.addedFlavor}</span>
        </div>
        <Favorites>❤</Favorites>
      </section>
    </>
  );
}
export default ClassicPure;
