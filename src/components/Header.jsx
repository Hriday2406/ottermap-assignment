import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-center p-8">
      <Link to="/">
        <img
          src="./logo.webp"
          alt="OtterMap"
          className="w-54 drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)] transition duration-300 ease-in-out hover:scale-110"
        />
      </Link>
    </header>
  );
}
