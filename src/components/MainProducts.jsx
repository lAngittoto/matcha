import ClassicPure from "../Products/ClassicPure";
import DessertInspired from "../Products/DessertInspired";
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
            addedFlavor:
              "– spicy and warming (blended with cinnamon, cardamom, etc.).",
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
        <FlavoredMatcha
          matchaProduct={{
            image:
              "https://richingmatcha.com/wp-content/uploads/2025/01/17-1.jpg",
            flavor: "Matcha with Ginger",
            addedFlavor: "– zesty with a health kick.",
          }}
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-around px-5 md:justify-baseline md:flex-row sm:flex-col gap-5 lg:gap-2 mt-5 ">
        <FlavoredMatcha
          matchaProduct={{
            image:
              "https://www.bnhealthy.co.nz/cdn/shop/articles/matcha_drink.png?v=1657809078",
            flavor: "Coconut Matcha",
            addedFlavor: "– tropical, smooth, and creamy.",
          }}
        />
        <FlavoredMatcha
          matchaProduct={{
            image:
              "https://plantbasedjess.com/wp-content/uploads/2023/03/IMG_5649.jpg",
            flavor: "Lemon Matcha",
            addedFlavor: "- zesty and energizing.",
          }}
        />
        <FlavoredMatcha
          matchaProduct={{
            image:
              "https://plantbasedjess.com/wp-content/uploads/2023/11/IMG_8708.jpg",
            flavor: "Mango Matcha",
            addedFlavor: "– juicy and sweet.",
          }}
        />
      </div>

      <h1 className="px-10 py-10 text-3xl text-white">
        🍨 Dessert-Inspired{" "}
        <span className="text-green-900 text-[1rem]">Limited offer.</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-around px-5 md:justify-baseline md:flex-row sm:flex-col gap-5 lg:gap-2">
        <DessertInspired
          matchaProduct={{
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDujOX0mz1DaH1D0AAGp-gsmdtpyZxQiU7Fw&s",
            flavor: "Matcha Ice Cream",
            addedFlavor: "– creamy and bold.",
          }}
        />
        <DessertInspired
          matchaProduct={{
            image:
              "https://static.wixstatic.com/media/32949a_f13585b12bcf4fe9bc3640bea521bb78~mv2.jpg/v1/fill/w_480,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/32949a_f13585b12bcf4fe9bc3640bea521bb78~mv2.jpg",
            flavor: "Matcha Cheesecake",
            addedFlavor: "– smooth with a green twist.",
          }}
        />
        <DessertInspired
          matchaProduct={{
            image:
              "https://preview.redd.it/i-made-matcha-brookies-matcha-white-chocolate-brownie-with-v0-srab2s2izjja1.jpg?width=640&crop=smart&auto=webp&s=55b66f10e3f324fc2859f451948fc9f94107baaf",
            flavor: "Matcha Cookies / Brownies",
            addedFlavor: "– great for baking lovers.",
          }}
        />
      </div>
    </>
  );
};
export default MainProducts;
