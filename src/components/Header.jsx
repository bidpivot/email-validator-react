import reactLogo from "../assets/react.svg";

export default function Header() {
  return (
    <>
      <div className="" id="header">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <div id="header-right">
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </>
  );
}
