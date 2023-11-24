import react from "../assets/react.svg";
import emailLogo from "../assets/emailLogo.png";
export default function Header() {
  return (
    <>
      <div className="" id="header">
        <div>
          <img
            src={emailLogo}
            className="logo react"
            alt=""
            width={30}
            height={30}
            id="logo"
          />
        </div>
        <div id="header-right">
          {/* <p>About</p> */}
          <p><a href="mailto:contact@roscoemarketing.com" target="_blank">Contact</a></p>
        </div>
      </div>
    </>
  );
}
