import { useState } from "react";

const Buys = ({ children, className }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
    setLoading(false);
    setIsComplete(false);
  };

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsComplete(true);
    }, 3000); // simulate processing for 3 seconds
  };

  const closePopup = () => {
    setShowPopup(false);
    setLoading(false);
    setIsComplete(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`bg-[#4e9622] w-[100px] py-1 rounded-3xl text-[1.2rem] text-white cursor-pointer hover:scale-110 transition-transform duration-100 md:text-[0.8rem] md:w-[70px] ${className}`}
      >
        {children}
      </button>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm bg-opacity-40 z-50">
          <div className="bg-white p-10 rounded-lg shadow-lg text-center w-[300px]">
            {loading ? (
              <div className="animate-pulse text-lg text-gray-700">⏳ Processing your order...</div>
            ) : isComplete ? (
              <>
                <h2 className="text-xl font-bold text-green-700 mb-4">✅ Thank you for buying!</h2>
                <button
                  onClick={closePopup}
                  className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                >
                  Close
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-800 mb-4">🛒 You selected this item</h2>
                <button
                  onClick={handleCheckout}
                  className="bg-[#4e9622] text-white px-4 py-2 mb-3 rounded hover:bg-green-800"
                >
                  Check out
                </button>
                <br />
                <button
                  onClick={closePopup}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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

export default Buys;
