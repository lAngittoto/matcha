import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className="font-sans px-5 py-5 md:px-7 md:py-7 ">
      <nav className="flex flex-col justify-between md:flex-row lg:flex-row gap-3 ">
        <div>
          <h1 className="text-white text-5xl font-bold md:text-6xl cursor-default">
            Matcha<span className="text-black text-2xl">thea</span>
          </h1> 
        </div>
        <ul className="text-white text-[1.1rem] flex flex-row items-end gap-3 lg:text-2xl :gap-7 cursor-pointer w-full justify-around  sm:flex-row  ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        </ul>
        <div className="flex items-end gap-3 lg:gap-5">
          <input
            type="text"
            className="placeholder-black  bg-[#7ED957]  outline-none px-2 py-2 rounded-2xl lg:px-5 lg:text-[1rem] text-[0.8rem] "
            placeholder="Search to Order"
          />
          <button className=" bg-[#7ED957]  outline-none px-5 py-2 rounded-2xl lg:text-[1rem] text-[0.8rem] cursor-pointer">Enter</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
