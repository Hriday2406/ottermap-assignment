import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-5 flex justify-center">
      <Link to="/">
        <img
          src="./logo.webp"
          alt="OtterMap"
          className="w-54 hover:scale-110 transition duration-300 ease-in-out drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]"
        />
      </Link>
    </header>
  );
}
