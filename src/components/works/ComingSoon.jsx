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
    return (
      <div className="flex justify-center items-center min-h-[220px] bg-primary rounded-lg border-2 border-white"></div>
    );
  }

  return (
    <div className="relative flex flex-col justify-around items-center bg-primary w-auto min-h-[215px] md:max-w-96 px-5 py-3 rounded-lg gap-7 shadow-[rgba(205,210,230,0.21)_0px_3px_8px] border-2 border-white transition-all duration-300 ease-in-out hover:shadow-[rgba(205,210,230,0.5)_0px_5px_15px] overflow-hidden">
      <h1 className="text-5xl text-white z-10">Cooking ...</h1>

      <div className="absolute flex items-center w-[115%] z-20">
        <img src={chain} alt="chain" loading="lazy" />
      </div>
      {/* <div className="absolute flex items-center w-[115%] mb-2 -z-10">
        <img src={chain} alt="chain" loading="lazy" />
      </div> */}
      <div className="absolute flex items-center w-[115%] rotate-45 ml-5 mt-2 z-20">
        <img src={chain} alt="chain" loading="lazy" />
      </div>
      {/* <div className="absolute flex items-center w-[116%] rotate-45 ml-5 mt-3 -z-10">
        <img src={chain} alt="chain" loading="lazy" />
      </div> */}
    </div>
  );
};

export default ComingSoon;
