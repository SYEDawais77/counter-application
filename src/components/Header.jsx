import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-[#2d545e] text-white flex justify-between items-center p-5 shadow-md">
      <Link
        to="/"
        className="text-2xl font-bold hover:text-gray-300 transition duration-300"
      >
        <img
          className="w-[4rem] md:w-20 rounded-[20%] "
          src="..//../public/favicon/android-chrome-192x192.png "
        />
      </Link>
      <nav className="flex gap-5 text-lg font-semibold">
        <Link to="/" className="hover:text-gray-300 transition duration-300">
          Home
        </Link>
        <Link
          to="/about-app"
          className="hover:text-gray-300 transition duration-300"
        >
          About App
        </Link>
        <Link
          to="/about-developer"
          className="hover:text-gray-300 transition duration-300"
        >
          About Developer
        </Link>
      </nav>
    </div>
  );
}
