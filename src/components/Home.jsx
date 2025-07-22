import DailyMatcha from "../assets/images/DailyMatcha.png";
import IcedMatcha from "../assets/images/IcedMatcha.png";
const Home = () => {
  return (
    <>
      <section >
        <div className="flex flex-col items-center justify-center lg:px-5 lg:py-10  md:flex-row sm:flex-col py-10">
          <img src={DailyMatcha} alt="Daily matcha image" className="w-[500px] md:w-full " />
          <h1 className="lg:text-8xl md:text-7xl text-8xl  text-white flex flex-col lg:flex-row md:flex-row cursor-default ">
            You're Daily, <span className="text-black"> Best Matcha</span>
          </h1>
          <img src={IcedMatcha} alt="Iced matcha image" className="w-[500px] md:w-full"/>
        </div>
      </section>
    </>
  );
};
export default Home;
