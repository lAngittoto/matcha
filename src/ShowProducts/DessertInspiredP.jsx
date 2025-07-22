import DessertInspired from "../Products/DessertInspired";
const DessertInspiredP = () => {
  return (
    <div>
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
    </div>
  );
};

export default DessertInspiredP;