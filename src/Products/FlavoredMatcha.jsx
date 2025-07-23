import Buys from "../Buttons/Buys";
import AddCarts from "../Buttons/AddCarts";
import Favorites from "../Buttons/Favorites";
import { useCart } from "../context/CartContext";
function FlavoredMatcha({ matchaProduct }) {
  const {addToCart} = useCart ();
  const handleAddCart = () =>{
    addToCart(matchaProduct);
  }
  return (
    <section className="bg-[#7ED957] lg:w-[330px] lg:h-[250px] rounded-2xl flex flex-row px-5 gap-2 md:h-[270px] h-[270px] md:w-[180px] sm:w-[500px]">
      <div className="flex flex-col justify-center items-center gap-3 w-[180px] ">
        <img
          src={matchaProduct.image}
          alt="No Wifi Please Connect."
          className="object-contain"
        />
        <AddCarts onClick={handleAddCart}>Add cart</AddCarts>
        <Buys>₱ 300</Buys>
      </div>
      <div className="w-[180px] bg-red-50 px-5 flex  flex-col justify-center">
        <h1 className="text-[1rem font-bold md:text-[0.8rem]">
          {matchaProduct.flavor}
        </h1>
        <span className="text-[1rem] md:text-[0.8rem]">
          {matchaProduct.addedFlavor}
        </span>
      </div>
      <Favorites>❤</Favorites>
    </section>
  );
}
export default FlavoredMatcha;
