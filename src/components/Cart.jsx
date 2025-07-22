import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg">
              <img src={item.image} alt={item.flavor} className="w-24" />
              <h3>{item.flavor}</h3>
              <p>{item.addedFlavor}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
