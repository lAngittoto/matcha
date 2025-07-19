import ClassicPure from "../Products/ClassicPure";

const MainProducts = () => {
  return (
    <>
      <h1 className="px-10 py-10 text-3xl text-white">
        Classic & Pure <span className="text-black text-2xl">Buy 1 take 1</span>
      </h1>
      <div className="flex flex-row justify-between px-5">
      <ClassicPure
        matchaProduct={{
          image:
            "https://selectsalt.com/wp-content/uploads/2023/05/Ceremonial-grade-matcha-powder.jpg",
          flavor: "Ceremonial Grade Matcha",
          addedFlavor: "–high-quality, smooth, slightly sweet.",
        }}
      />
      <ClassicPure
        matchaProduct={{
          image:
            "https://mizubatea.com/cdn/shop/articles/DSCF8376.jpg?v=1751088669",
          flavor: "Culinary Grade Matcha",
          addedFlavor: "–stronger flavor, best for baking and lattes.",
        }}
      />
        <ClassicPure
        matchaProduct={{
          image:
            "https://www.chopstickchronicles.com/wp-content/uploads/2024/10/hojicha-latte-9.jpg",
          flavor: "Roasted Matcha (Hojicha)",
          addedFlavor: "–earthy, nutty, low caffeine.",
        }}
      />
      </div>
    </>
  );
};
export default MainProducts;
