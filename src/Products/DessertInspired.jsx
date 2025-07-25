import Buys from "../Buttons/Buys";
import Favorites from "../Buttons/Favorites";
import AddCarts from "../Buttons/AddCarts";
import { useCart } from "../context/CartContext";
import { useFavorite } from "../context/FavoriteContext";
import { DessertInspiredPrice } from "../Price/PriceMatcha";

function DessertInspired({ matchaProduct }) {
  const {addToCart} = useCart();
  const {favoriteItems, addToFavorites, removeFromFavorites } = useFavorite ();

  const handleAddCart = () => {
    addToCart(matchaProduct);
  };

  const isFavorite = favoriteItems.some(
    (item) =>
      item.flavor === matchaProduct.flavor &&
    item.addedFlavor === matchaProduct.addedFlavor
  );
  const handleFavoriteToggle = () =>{
    if(isFavorite){
      removeFromFavorites(matchaProduct);
    }else{
      addToFavorites(matchaProduct);
    }
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
        <Buys>₱ {DessertInspiredPrice}</Buys>
      </div>
      <div className="w-[180px] bg-red-50 px-5 flex  flex-col justify-center">
        <h1 className="text-[1rem font-bold md:text-[0.8rem]">
          {matchaProduct.flavor}
        </h1>
        <span className="text-[1rem] md:text-[0.8rem]">
          {matchaProduct.addedFlavor}
        </span>
      </div>
      <Favorites onClick={handleFavoriteToggle} isFavorite={isFavorite}>❤</Favorites>
    </section>
  );
}
export default DessertInspired;
