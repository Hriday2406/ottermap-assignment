export default function Map({ name }) {
  return (
    <section className="h-full">
      <h2 className="bg-primary w-full p-5 text-center font-mono text-3xl text-white shadow-[0_10px_10px_rgba(4,71,30,0.4)]">
        Welcome {name}
      </h2>
    </section>
  );
}
