import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <>
      <div className="p-10 pb-40 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-4 cursor-not-allowed">🛒</h2>
        {cartItems.length === 0 ? (
          <p className="text-2xl">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4 ">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="bg-gray-200 p-4 rounded-lg flex flex-col items-center gap-2 justify-between md:text-[0.8rem] md:flex-row sm:flex-col "
              >
                <input type="checkbox" />
                <div className="bg-gray-100 w-[350px] flex flex-row items-center text-[0.7rem] gap-2 sm:w-[500px] sm:text-[1.1rem]">
                  <img src={item.image} alt={item.flavor} className="w-24" />
                  <h3 className="text-emerald-900">{item.flavor}</h3>
                  <p>{item.addedFlavor}</p>
                </div>
                <div className="w-[200px] flex flex-row justify-around items-center">
                  <button
                    onClick={() => increaseQuantity(item)}
                    className="bg-emerald-800 text-white px-2  text-3xl cursor-pointer w-[50px] h-[50px] items-center"
                  >
                    +
                  </button>
                  <button
                    onClick={() => decreaseQuantity(item)}
                    className="bg-emerald-800 text-white px-2  text-2xl cursor-pointer w-[50px] h-[50px]"
                  >
                    -
                  </button>
                </div>
                <p className="text-[1.2rem] ">Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <section className="bg-white p-5  w-screen fixed bottom-0 flex flex-row items-center justify-around">
        <div className="space-x-4 ">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Select All</label>
          <h1 className="text-red-800">Note: This is Cash on Delivery only.</h1>
        </div>
        <div className=" px-5 py-5 flex flex-row w-[400px] justify-between">
      
          <button   className="bg-red-800 w-[100px] py-1 rounded-3xl text-[1.2rem] text-white cursor-pointer hover:scale-110 transition-transform duration-100 ">Delete</button>
          <button className="bg-[#4e9622] w-[100px] py-1 rounded-3xl text-[1.2rem] text-white cursor-pointer hover:scale-110 transition-transform duration-100 ">Details</button>
        </div>
        <div>
          <h1 className="text-red-800">Total: </h1>
              <button className="bg-[#4e9622] w-[100px] py-1 rounded-3xl text-[1rem] text-white cursor-pointer hover:scale-110 transition-transform duration-100 ">Check out</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
