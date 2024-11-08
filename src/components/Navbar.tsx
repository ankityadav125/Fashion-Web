import { HiOutlineMenuAlt1 } from "react-icons/hi";


const Navbar = () => {
  return (
    <div className="bg-black ">
      <div className="container flex items-center justify-between py-4 text-white ">
        {/* <h2 className="text-2xl ">Logo</h2> */}
        <img className=" h-[50px] w-[50px]  rounded-full" src="/public/logo.jpg" alt="" />
        <ul className=" gap-8 text-2xl items-center hidden sm:flex ">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Pages</li>
          <li className="hover:text-gray-300 cursor-pointer">Portfolio</li>
          <li className="hover:text-gray-300 cursor-pointer">Blog</li>
          <li className="hover:text-gray-300 cursor-pointer">Shop</li>
        </ul>
        <HiOutlineMenuAlt1 className=" text-2xl sm:hidden " />
      </div>
    </div>
  );
};

export default Navbar;
