import { LazyLoadImage } from "react-lazy-load-image-component";
import { questionMark, xMark } from "../assets";

export default function Help() {
  return (
    <div className="dropdown dropdown-left dropdown-end fixed bottom-2 right-0">
      <label
        tabIndex={0}
        className="btn m-1 p-0 w-12 h-12 bg-[#AA1F23] cursor-pointer hover:bg-[#AA1F23] opacity-70 hover:opacity-90 rounded-full"
      >
        <LazyLoadImage
          className="w-max h-max"
          src={questionMark}
          alt="question mark"
        />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>
            Need help? <br />
            Contact us via Email <br />
            At help@guitareo.com
          </a>
        </li>
      </ul>
    </div>
  );
}
