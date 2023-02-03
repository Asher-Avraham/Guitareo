import { useState } from "react";
import { Banner, LogoSearch, Navbar } from "../components";

export default function Header() {
  const [showBanner, setShowBanner] = useState<boolean>(true);

  return (
    <>
      {showBanner && <Banner setShowBanner={setShowBanner} />}
      <LogoSearch />
      <Navbar />
    </>
  );
}
