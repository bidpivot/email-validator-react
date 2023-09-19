import react from "../assets/react.svg";
import emailLogo from "../assets/emailLogo.png";
export default function Header() {
  return (
    <>
      <div className="" id="header">
        <div>
          <img
            src={react}
            className="logo react"
            alt=""
            width={30}
            height={30}
          />
        </div>
        <div id="header-right">
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </>
  );
}
