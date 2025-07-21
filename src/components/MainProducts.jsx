import ClassicPure from "../Products/ClassicPure";
import FlavoredMatcha from "../Products/FlavoredMatcha";

const MainProducts = () => {
  return (
    <>
      <h1 className="px-10 py-10 text-3xl text-white">
        🍵 Classic & Pure{" "}
        <span className="text-black text-2xl">Buy 1 take 1</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-around px-5 md:justify-baseline md:flex-row sm:flex-col gap-5 lg:gap-2">
        <ClassicPure
          matchaProduct={{
            image:
              "https://selectsalt.com/wp-content/uploads/2023/05/Ceremonial-grade-matcha-powder.jpg",
            flavor: "Ceremonial Grade Matcha",
            addedFlavor: "– high-quality, smooth, slightly sweet.",
          }}
        />
        <ClassicPure
          matchaProduct={{
            image:
              "https://mizubatea.com/cdn/shop/articles/DSCF8376.jpg?v=1751088669",
            flavor: "Culinary Grade Matcha",
            addedFlavor: "– stronger flavor, best for baking and lattes.",
          }}
        />
        <ClassicPure
          matchaProduct={{
            image:
              "https://www.chopstickchronicles.com/wp-content/uploads/2024/10/hojicha-latte-9.jpg",
            flavor: "Roasted Matcha (Hojicha)",
            addedFlavor: "– earthy, nutty, low caffeine.",
          }}
        />
      </div>

      <h1 className="px-10 py-10 text-3xl text-white">
        🍧 Flavored Matcha <span className="text-black text-2xl"></span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-around px-5 md:justify-baseline md:flex-row sm:flex-col gap-5 lg:gap-2">
        <FlavoredMatcha
          matchaProduct={{
            image:
              "https://plantbasedjess.com/wp-content/uploads/2021/12/IMG_1255.jpg",
            flavor: "Vanilla Matcha",
            addedFlavor: "– creamy and mellow.",
          }}
        />
        <FlavoredMatcha
          matchaProduct={{
            image:
              "https://katiestewartwellness.com/wp-content/uploads/2024/03/Katie-Stewart-Wellness-24.03.22-Iced-Lavender-Cream-Matcha-Latte-1.jpg",
            flavor: "Lavender Matcha ",
            addedFlavor: "– stronger flavor, best for baking and lattes.",
          }}
        />
        <FlavoredMatcha
          matchaProduct={{
            image:
              "https://media.post.rvohealth.io/wp-content/uploads/2025/04/matcha-mint-shake-topaz-732-549-feature-thumb.jpg",
            flavor: "Mint Matcha ",
            addedFlavor: " – cool and refreshing.",
          }}
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-around px-5 md:justify-baseline md:flex-row sm:flex-col gap-5 lg:gap-2 mt-5 ">
        <FlavoredMatcha
          matchaProduct={{
            image:
              "https://cdn.foodaciously.com/static/recipes/f421207e-e1f7-4e1d-9af9-1d3d1d88b9c6/chai-matcha-latte-recipe-vegan-healthy-63f54dec1b4260672e2484d16996b26e-1920-q90.jpg",
            flavor: "Chai Matcha ",
            addedFlavor: "– spicy and warming (blended with cinnamon, cardamom, etc.).",
          }}
        />
        <FlavoredMatcha
          matchaProduct={{
            image:
              "https://foodisafourletterword.com/wp-content/uploads/2021/10/Iced_Strawberry_Matcha_Latte_Recipe.jpg",
            flavor: "Strawberry Matcha",
            addedFlavor: "– fruity and refreshing",
          }}
        />
      </div>
    </>
  );
};
export default MainProducts;
