import Image from "next/image";
import Link from "next/link";

// Assets :
import { FaPlus } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import mktCap from '@assets/images/mktCap.png'

const MarketCap = () => {
  return (
    <section className="flex h-fit w-full flex-col items-center justify-center py-10">
      <div className="flex h-fit w-6/12 flex-row items-stretch justify-between">
        <div className="flex  w-1/2 flex-grow flex-col items-start justify-center">
          <h5 className="montreal mb-4 text-sm text-white opacity-50">
            USDT STATS
          </h5>
          <h5 className="montrealBold mb-2 text-3xl text-[#F7E16B]">
            Authentic returns
          </h5>
          <h5 className="montrealBold text-3xl text-white">
          sourced transparently
          </h5>
          <div className="my-8 flex h-fit w-fit flex-row items-center justify-between gap-3">
            <button className="aspect-square h-fit rounded-full bg-whiteBackground-500 p-2">
              <FaPlus color="#000000" size={20} />
            </button>
            <button className="aspect-square h-fit rounded-full bg-whiteBackground-500 p-2">
              <MdCompareArrows color="#000000" size={20} />
            </button>
          </div>
        </div>
        <div className="w-1/2 h-fit flex flex-row items-center justify-center flex-grow">
            <Image src={mktCap} alt="market cap" ></Image>
        </div>
      </div>
    </section>
  );
};

export default MarketCap;
