import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({
  search,
  setSearch,
  name,
  setName,
  number,
  setNumber,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    setSearch("");
    setName("");
    setNumber("");
  }, []);

  return (
    <section className="h-full">
      <h2 className="bg-primary w-full p-5 text-center font-mono text-4xl text-white uppercase">
        Ottermap Frontend Task
      </h2>
      <div className="container mx-auto mt-14 flex flex-col items-center gap-10">
        <div className="border-primary flex flex-col justify-center gap-5 rounded-2xl border-2 p-5">
          <div className="flex items-center justify-between gap-3">
            <label htmlFor="search" className="cursor-pointer font-medium">
              Search :
            </label>
            <input
              type="text"
              id="search"
              className="border-primary rounded-lg border-2 px-2 py-1"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <label htmlFor="name" className="cursor-pointer font-medium">
              First Name :
            </label>
            <input
              type="text"
              id="name"
              className="border-primary rounded-lg border-2 px-2 py-1"
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <label htmlFor="number" className="cursor-pointer font-medium">
              Number :
            </label>
            <input
              type="tel"
              id="number"
              className="border-primary rounded-lg border-2 px-2 py-1"
              placeholder="Number"
              pattern="[0-9]{10}"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <button
            className="bg-primary hover:text-primary border-primary cursor-pointer rounded-xl border-2 px-5 py-2 font-mono text-xl font-bold text-white transition-all duration-300 ease-in-out hover:bg-white"
            onClick={() => {
              navigate("/map");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
