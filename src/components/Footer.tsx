import { LazyLoadImage } from "react-lazy-load-image-component";
import { facebook, twitter, youtube } from "../assets";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="footer footer-center bottom-0 w-full h-42 p-10 bg-[#2B2827] text-white">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <LazyLoadImage
            className="cursor-pointer"
            src={twitter}
            alt="twitter logo"
          />
          <LazyLoadImage
            className="cursor-pointer"
            src={youtube}
            alt="youtube logo"
          />
          <LazyLoadImage
            className="cursor-pointer"
            src={facebook}
            alt="facebook logo"
          />
        </div>
      </div>
      <div>
        <p>Copyright © {year} - All right reserved by Asher Avraham </p>
      </div>
    </footer>
  );
}
