import {Link} from 'react-router-dom'
import FindProducts from '../Buttons/FindProduct';
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
        <Link to="/" className=' active:text-[#7ED957] text-white hover:scale-110 transition transform duration-100'>Home</Link>
        <Link to="/about"  className=' active:text-[#7ED957] text-white hover:scale-110 transition transform duration-100'>About</Link>
        <Link to="/cart" className=' active:text-[#7ED957] text-white hover:scale-110 transition transform duration-100'>Cart</Link>
        </ul>
        <div className="flex items-end gap-3 lg:gap-5">
         <FindProducts/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
