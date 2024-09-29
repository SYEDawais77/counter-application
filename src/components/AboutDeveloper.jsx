export default function AboutDeveloper() {
  return (
    <div className="p-8 bg-slate-300 shadow-lg rounded-lg max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">
        About the Developer
      </h1>
      <p className="text-lg leading-relaxed text-gray-700 text-justify">
        This application was developed by{" "}
        <span className="font-semibold">Syed Awais Shah</span>, a passionate Web
        Developer with experience in modern web technologies. The Counter App
        was built using <span className="font-semibold">Vite</span> and{" "}
        <span className="font-semibold">React.js</span> for a fast and efficient
        development experience, while{" "}
        <span className="font-semibold">Tailwind CSS</span> was used for
        intuitive and responsive styling.
      </p>
    </div>
  );
}
