import Image from "next/image";
import nawyLogo from "../../../public/nawyLogo.jpg";
import heartSVG from "../../../public/heart.svg";

const NavBar = () => {
  return (
    <div className="card-header bg-white border-0 rounded_0 sticky-top">
      <div className="m-4 container d-flex align-items-center justify-content-around">
        <div>
          <Image
            src={nawyLogo}
            alt="nawy logo"
            style={{ width: "102px", height: "28px" }}
          />
        </div>
        <div className="d-flex gap-4">
          <span>Home</span>
          <span>Search</span>
          <span>Sell</span>
          <span>Blog</span>
          <span>About</span>
          <span>Contact</span>
          <span>Nawy Now</span>
          <span>Careers</span>
        </div>
        <div className="d-flex gap-4">
          <Image
            src={heartSVG}
            alt="heartSVG"
            style={{ width: "25px", height: "25px" }}
          />
          <span>العربية</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
