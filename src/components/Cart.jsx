import { useCart } from "../context/CartContext";
import { useState } from "react";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDeleteSelected = () => {
    if (selectedItems.length > 0) {
      removeFromCart(selectedItems);
      setSelectedItems([]);
      setIsAllSelected(false);
    }
  };

  const handleCheckout = () => {
    if (selectedItems.length === 0) return;
    setLoading(true);
    setShowPopup(true);

    setTimeout(() => {
      setLoading(false);
      removeFromCart(selectedItems);
      setSelectedItems([]);
      setIsAllSelected(false);
    }, 3000); // 3-second delay
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const getTotal = () => {
    return selectedItems.reduce((sum, index) => {
      const item = cartItems[index];
      return sum + (item?.price || 0) * (item?.quantity || 1);
    }, 0);
  };

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
    const isAlreadySelected = selectedItems.includes(index);
    const updated = isAlreadySelected
      ? selectedItems.filter((i) => i !== index)
      : [...selectedItems, index];
    setSelectedItems(updated);
    setIsAllSelected(updated.length === cartItems.length);
  };

  return (
    <>
      {/* ✅ Content Blurred if popup is active */}
      <div className={`${showPopup ? "blur-sm pointer-events-none select-none" : ""}`}>
        <div className="p-10 pb-40 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-4 cursor-not-allowed">🛒</h2>
          {cartItems.length === 0 ? (
            <p className="text-2xl text-amber-50">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-200 p-4 rounded-lg flex flex-col items-center gap-2 justify-between md:text-[0.8rem] md:flex-row sm:flex-col"
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
                      className="bg-emerald-800 text-white px-2 text-3xl cursor-pointer w-[30px] h-[30px] items-center flex justify-center sm:w-[50px] sm:h-[50px]"
                    >
                      +
                    </button>
                    <button
                      onClick={() => decreaseQuantity(item)}
                      className="bg-emerald-800 text-white px-2 text-2xl cursor-pointer w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
                    >
                      -
                    </button>
                  </div>
                  <p className="text-[1.2rem]">Quantity: {item.quantity}</p>
                  <p className="text-[1.2rem]">
                    ₱ <span className="text-emerald-800">{item.price || "N/A"}</span>
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ✅ Checkout Footer */}
        <section className="bg-white p-5 w-screen fixed bottom-0 flex flex-row items-center justify-around">
          <div className="space-x-4">
            <input type="checkbox" checked={isAllSelected} onChange={toggleSelectAll} />
            <label>Select All</label>
            <h1 className="text-red-800 text-[0.7rem] sm:text-[1rem]">
              Note: This is Cash on Delivery only.
            </h1>
          </div>

          <div className="px-5 py-5 flex flex-col w-[400px] justify-around sm:flex-row gap-2 items-center">
            <button
              onClick={handleDeleteSelected}
              className="bg-red-800 w-[80px] py-1 rounded-3xl text-[1rem] text-white cursor-pointer hover:scale-110 transition-transform duration-100 sm:w-[100px]"
            >
              Delete
            </button>
          </div>

          <div>
            <h1 className="text-red-800 sm:text-[1rem] text-[0.8rem]">
              <span className="text-black">Total: </span>₱ {getTotal()}
            </h1>
            <button
              onClick={handleCheckout}
              className="bg-[#4e9622] w-[80px] py-1 rounded-3xl text-[0.7rem] text-white cursor-pointer hover:scale-110 transition-transform duration-100 sm:text-[1rem] sm:w-[100px]"
            >
              Check out
            </button>
          </div>
        </section>
      </div>

      {/* ✅ Popup Overlay */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm bg-opacity-40 z-50">
          <div className="bg-white p-10 rounded-lg shadow-lg text-center w-[300px]">
            {loading ? (
              <div className="animate-pulse text-lg text-gray-700">⏳ Processing your order...</div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-green-700 mb-4">✅ Thank you for buying!</h2>
                <button
                  onClick={closePopup}
                  className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
