import { useState } from "react";

export default function MainApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col  items-center pt-24 rounded-md h-[435px] bg-slate-300">
      <div className="text-rose-600 font-bold text-9xl mb-10 rounded-lg   transition-all duration-300 ">
        {count}
      </div>

      <div className="flex gap-14">
        <button
          className="bg-green-500 text-white font-bold size-16 rounded-md hover:bg-green-600 transition duration-300"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="bg-red-500 text-white font-bold size-16 rounded hover:bg-red-600 transition duration-300"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button
          className="bg-yellow-500 text-white font-bold size-16 rounded hover:bg-yellow-600 transition duration-300"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
