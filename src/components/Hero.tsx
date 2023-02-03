import { guitarPlaying } from "../assets";

export default function Hero() {
  return (
    <div
      className="hero min-h-[52vh]"
      style={{ backgroundImage: `url(${guitarPlaying})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Guitareo</h1>
          <p className="mb-5">We help you find your next guitar!</p>
        </div>
      </div>
    </div>
  );
}
