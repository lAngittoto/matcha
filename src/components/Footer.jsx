const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-row justify-between">
          <section className="flex flex-col p-7">
            <h1 className="text-2xl ml-4 cursor-default">Follow us:</h1>
            <div className="flex gap-5 bg-[#7ED957] w-[300px] p-5 rounded-2xl justify-around ">
              <i class="fa-brands fa-facebook hover:scale-110 transition-transform duration-100"></i>
              <i class="fa-brands fa-tiktok hover:scale-110 transition-transform duration-100"></i>
              <i class="fa-brands fa-square-instagram hover:scale-110 transition-transform duration-100"></i>
            </div>
          </section>
          <section className="px-7">
            <div className="w-[300px] h-[200px] bg-[#7ED957] p-7 flex flex-col justify-center items-center rounded-2xl cursor-default">
                 <h1 className="text-4xl ">"Green energy, <span className="text-green-800">clean mind,</span> <span className="text-white">matcha soul."</span></h1>
            </div>    
          </section>
        </div>
      </footer>
    </>
  );
};
export default Footer;
