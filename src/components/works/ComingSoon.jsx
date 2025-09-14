import { useState, useEffect } from "react";
import chain from "../../assets/chain.png";

const ComingSoon = () => {
  const [chainReady, setChainReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = chain;
    img.onload = () => setChainReady(true);
  }, []);

  if (!chainReady) {
    // ⏳ Show a placeholder while chain is loading
    return (
      <div className="flex justify-center items-center min-h-[210px] bg-primary rounded-xl border-2 border-white">
        <h1 className="text-5xl text-white">Loading ...</h1>
      </div>
    );
  }

  // ✅ Render only after chain is fully loaded
  return (
    <div className="relative flex flex-col justify-around items-center bg-primary w-auto min-h-[210px] md:max-w-96 px-5 py-3 rounded-xl gap-7 shadow-[rgba(205,210,230,0.21)_0px_3px_8px] border-2 border-white transition-all duration-300 ease-in-out hover:shadow-[rgba(205,210,230,0.5)_0px_5px_15px]">
      <h1 className="text-5xl text-white z-10">Cooking ...</h1>

      <div className="absolute flex items-center w-[115%] z-20">
        <img src={chain} alt="chain" loading="lazy" />
      </div>
      <div className="absolute flex items-center w-[115%] mb-2 -z-10">
        <img src={chain} alt="chain" loading="lazy" />
      </div>
      <div className="absolute flex items-center w-[115%] rotate-45 ml-5 mt-2 z-20">
        <img src={chain} alt="chain" loading="lazy" />
      </div>
      <div className="absolute flex items-center w-[116%] rotate-45 ml-5 mt-3 -z-10">
        <img src={chain} alt="chain" loading="lazy" />
      </div>
    </div>
  );
};

export default ComingSoon;
