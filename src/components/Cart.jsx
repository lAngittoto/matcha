import { useCart } from "../context/CartContext";
import { useState } from "react";
const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const [selectedItems, setSelectedItems] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const handleDeleteSelected = () => {
    if (selectedItems.length > 0) {
      removeFromCart(selectedItems);
      setSelectedItems([]);
      setIsAllSelected(false);
    }
  };
  const getTotal = () => {
    return selectedItems.reduce((sum, index) =>{
      const item = cartItems[index];
      return sum + (item?.price || 0) * (item?.quantity || 1);
    }, 0);
  }

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItems([]);
      setIsAllSelected(false);
    } else {
      const allIndex = cartItems.map((_, index) => index);
      setSelectedItems(allIndex);
      setIsAllSelected(true);
    }
  };
  const toggleSelectItem = (index) => {
    const isAllSelected = selectedItems.includes(index);
    const updated = isAllSelected
      ? selectedItems.filter((i) => i !== index)
      : [...selectedItems, index];
    setSelectedItems(updated);
    setIsAllSelected(updated.length === cartItems.length);
  };

  return (
    <>
      <div className="p-10 pb-40 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-4 cursor-not-allowed">🛒</h2>
        {cartItems.length === 0 ? (
          <p className="text-2xl text-amber-50">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4 ">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="bg-gray-200 p-4 rounded-lg flex flex-col items-center gap-2 justify-between md:text-[0.8rem] md:flex-row sm:flex-col "
              >
                <input
                  type="checkbox"
                  checked={selectedItems.includes(index)}
                  onChange={() => toggleSelectItem(index)}
                />
                <div className="bg-gray-100 w-[300px] flex flex-row items-center text-[0.6rem] gap-2 sm:w-[500px] sm:text-[1.1rem]">
                  <img src={item.image} alt={item.flavor} className="w-24" />
                  <h3 className="text-emerald-900">{item.flavor}</h3>
                  <p>{item.addedFlavor}</p>
                </div>
                <div className="w-[200px] flex flex-row justify-around items-center">
                  <button
                    onClick={() => increaseQuantity(item)}
                    className="bg-emerald-800 text-white px-2  text-3xl cursor-pointer w-[30px] h-[30px] items-center flex justify-center sm:w-[50px] sm:h-[50px]"
                  >
                    +
                  </button>
                  <button
                    onClick={() => decreaseQuantity(item)}
                    className="bg-emerald-800 text-white px-2  text-2xl cursor-pointer w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
                  >
                    -
                  </button>
                </div>
                <p className="text-[1.2rem] ">Quantity: {item.quantity}</p>
                <p className="text-[1.2rem] ">
                  ₱{" "}
                  <span className="text-emerald-800">
                    {" "}
                    {item.price || "N/A"}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <section className="bg-white p-5  w-screen fixed bottom-0 flex flex-row items-center justify-around ">
        <div className="space-x-4 ">
          <input
            type="checkbox"
            name=""
            id=""
            checked={isAllSelected}
            onChange={toggleSelectAll}
          />
          <label htmlFor="">Select All</label>
          <h1 className="text-red-800 text-[0.7rem] sm:text-[1rem]">
            Note: This is Cash on Delivery only.
          </h1>
        </div>
        <div className=" px-5 py-5 flex flex-col w-[400px] justify-around  sm:flex-row gap-2 items-center">
          <button
            onClick={handleDeleteSelected}
            className="bg-red-800 w-[80px] py-1 rounded-3xl text-[1rem] text-white cursor-pointer hover:scale-110 transition-transform duration-100 sm:text-[1rem] sm:w-[100px]"
          >
            Delete
          </button>
        </div>
        <div>
          <h1 className="text-red-800 sm:text-[1rem] text-[0.8rem]"><span className="text-black">Total: </span> {getTotal()}</h1>
          <button className="bg-[#4e9622] w-[80px] py-1 rounded-3xl text-[0.7rem] text-white cursor-pointer hover:scale-110 transition-transform duration-100 sm:text-[1rem] sm:w-[100px]">
            Check out
          </button>
        </div>
      </section>
    </>
  );
};

export default Cart;
