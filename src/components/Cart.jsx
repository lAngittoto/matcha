import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">🛒</h2>
      {cartItems.length === 0 ? (
        <p className="text-2xl">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg flex flex-col items-center gap-2 justify-between md:text-[0.8rem] md:flex-row sm:flex-col">
              <input type="checkbox" />
              <img src={item.image} alt={item.flavor} className="w-24" />
              <h3 className="text-emerald-900">{item.flavor}</h3>
              <p>{item.addedFlavor}</p>
             
              <button onClick={() => increaseQuantity(item)} className="bg-emerald-800 text-white px-2  text-3xl cursor-pointer w-[50px] h-[50px] items-center">+</button>
              <button onClick={() => decreaseQuantity(item)}className="bg-emerald-800 text-white px-2  text-2xl cursor-pointer w-[50px] h-[50px]">-</button>
               <p className="text-[1.2rem] ">Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
