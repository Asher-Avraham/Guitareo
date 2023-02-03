import { LazyLoadImage } from "react-lazy-load-image-component";
import { xMark } from "../assets";

interface AppProps {
  setShowBanner: (value: boolean) => void;
}

export default function Banner({ setShowBanner }: AppProps) {
  return (
    <div className="bg-[#D7B98A] flex 2xl:px-36 xl:px-24">
      <div className="w-11/12 text-center font-semibold">
        Worldwide guitar community
      </div>
      <LazyLoadImage
        src={xMark}
        alt="x mark"
        onClick={() => setShowBanner(false)}
        className="h-5 w-5 items-center cursor-pointer hover:h-6 hover:w-6"
      />
    </div>
  );
}
