const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-col justify-between md:flex-row ">
          <section className="flex flex-col p-7">
            <h1 className="text-2xl ml-4 cursor-default">Follow us:</h1>
            <div className="flex gap-5 bg-[#7ED957] w-[300px] p-4 rounded-2xl justify-around lg:w-[300px] md:w-[250px] md:p-2 lg:p-5 items-center">
              <i class="fa-brands fa-facebook hover:scale-110 transition-transform duration-100 text-4xl text-blue- cursor-pointer"></i>
              <i class="fa-brands fa-tiktok hover:scale-110 transition-transform duration-100 text-4xl text-black cursor-pointer"></i>
              <i class="fa-brands fa-square-instagram hover:scale-110 transition-transform duration-100 text-4xl text-fuchsia-900 cursor-pointer"></i>
            </div>
          </section>
          <section className="px-7">
            <div className="lg:w-[400px] lg:h-[130px] bg-[#7ED957] p-7 flex flex-col justify-center items-center rounded-2xl cursor-default md:w-[350px] md:h-[120px]">
                 <h1 className="lg:text-4xl md:text-3xl text-5xl">"Green energy, <span className="text-green-800">clean mind,</span> <span className="text-white">matcha soul."</span></h1>
            </div>    
          </section>
        </div>
      </footer>
    </>
  );
};
export default Footer;
