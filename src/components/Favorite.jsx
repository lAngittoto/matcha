import { useFavorite } from "../context/FavoriteContext";

const Favorite = () => {
  const { favoriteItems, removeFromFavorites} = useFavorite();

  return (
    <div className="p-10 text-black">
      <h1 className="text-3xl font-bold mb-5">❤️ Your Favorites</h1>
      {favoriteItems.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {favoriteItems.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-lg">
              <img src={item.image} className="w-full h-40 object-cover mb-3" />
              <h3 className="text-xl font-semibold">{item.flavor}</h3>
              <p className="text-sm">{item.addedFlavor}</p>
              <button onClick={()=>removeFromFavorites(item)} className="bg-red-800 text-[1rem] rounded-md px-2 text-white mt-2 cursor-pointer hover:scale-110 transition-transform duration-100">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
