import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<nav className="bg-blue-500 text-white p-4  fixed z-50 w-full h-16 flex items-center justify-center ">
  <ul className="flex space-x-4 bg-gradient-to-r from-[#2b2b2b] via-[red] font-bold to-[#2b2b2b] bg-clip-text text-transparent animate-gradient">
    <li><Link to="/">خانه</Link></li>
    <li><Link to="/dashboard">داشبورد</Link></li>
    <li><Link to="/cart">سبد خرید</Link></li>
    <li><Link to="/login">ورود</Link></li>
  </ul>
</nav>

  );
};

export default Navbar;
