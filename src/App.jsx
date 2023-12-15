import { useEffect, useState } from "react";
import "./App.css";
// import "./css/form.css";
import "./css/typograhy.css";
import baseEmails from "./helpers/baseEmails";
import middleEmails from "./helpers/middleEmails";
import nickEmails from "./helpers/nickEmails";
import SubHeader from "./components/SubHeader";
import Clipboard from "./components/Clipboard";
// import "./css/button.css";

// import SearchInput from "./components/SearchInput";

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [domain, setDomain] = useState("");
  const [nick, setNick] = useState("");
  const [middle, setMiddle] = useState("");
  const [tld, setTld] = useState(".com");
  const [emails, setEmails] = useState(
    baseEmails({ first: "stephen", last: "jobs", domain: "apple", tld: tld })
  );
  const parameterObject = {
    first: first.toLowerCase(),
    last: last.toLowerCase(),
    domain: domain.toLowerCase(),
    tld: tld.toLowerCase(),
    middle: middle.toLowerCase(),
    nick: nick.toLowerCase(),
  };

  useEffect(() => console.log(middle), [middle]);

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(`handleFormSubmit() called`);
    // Use parameterObject instead of middle and nick directly

    if (parameterObject.middle === "" && parameterObject.nick === "") {
      setEmails(baseEmails(parameterObject));
    } else if (parameterObject.middle !== "" && parameterObject.nick === "") {
      setEmails(baseEmails(parameterObject) + middleEmails(parameterObject));
    } else if (parameterObject.middle === "" && parameterObject.nick !== "") {
      setEmails(baseEmails(parameterObject) + nickEmails(parameterObject));
    }
  }

  function handleExpandButton() {
    console.log("handleExpandButton called");
    setMiddle("");
    setNick("");
    setExpanded(!expanded);
  }

  return (
    <div id="app">
      <header>{<SubHeader />}</header>
      <main>
        <div className="container">
          <div className="app-container">
            <div className="col-left">
              <form onSubmit={handleFormSubmit}>
                <div className="form-line">
                  <label htmlFor="first" aria-describedby="first">
                    First Name:
                  </label>
                  <input
                    id="first"
                    type="text"
                    value={first}
                    placeholder="Stephen"
                    required
                    onChange={event => setFirst(event.target.value)}
                  />
                </div>
                <div className="form-line">
                  <label htmlFor="last" aria-describedby="last name">
                    Last Name:
                  </label>
                  <input
                    id="last"
                    type="text"
                    value={last}
                    placeholder="Jobs"
                    required
                    onChange={event => setLast(event.target.value)}
                  />
                </div>
                {expanded && (
                  <div className="form-line">
                    <label htmlFor="nick-name" aria-describedby="nick name">
                      Nick Name:
                    </label>
                    <input
                      id="nick"
                      type="text"
                      value={nick}
                      placeholder="Steve"
                      onChange={event => setNick(event.target.value)}
                    />
                  </div>
                )}
                {expanded && (
                  <div className="form-line">
                    <label htmlFor="middle-name" aria-describedby="middle name">
                      Middle Name:
                    </label>
                    <input
                      id="middle"
                      type="text"
                      value={middle}
                      placeholder=""
                      onChange={event => setMiddle(event.target.value)}
                    />
                  </div>
                )}

                <div className="form-line">
                  <label htmlFor="domain" aria-describedby="domain">
                    Domain:
                  </label>
                  <div id="domain-input-line">
                    <span id="at-span">@</span>
                    <input
                      id="domain-input"
                      type="text"
                      value={domain}
                      placeholder="apple"
                      required
                      onChange={event => setDomain(event.target.value)}
                    />
                    <select
                      onChange={event => setTld(event.target.value)}
                      value={tld}
                      name="tld"
                      id="tld"
                    >
                      <option value=".com">.com</option>
                      <option value=".net">.net</option>
                      <option value=".org">.org</option>
                      <option value=".edu">.edu</option>
                      <option value=".gov">.gov</option>
                      <option value=".biz">.biz</option>
                      <option value=".io">.io</option>
                      <option value=".co">.co</option>
                      <option value=".app">.app</option>
                    </select>
                  </div>
                </div>
                <div className="button-container">
                  <button type="submit" id="generate-button" className="btn">
                    Generate Email Combinations
                  </button>
                </div>
              </form>
              <button
                onClick={handleExpandButton}
                id="expand-button"
                className="btn"
              >
                {expanded ? "Reduce Options" : "Expand Options"}
              </button>
            </div>
            <div className="col-right">
              <label htmlFor="emails"></label>
              <textarea
                name="emails"
                id="emails"
                value={emails}
                className="text"
                readOnly
              ></textarea>
              <Clipboard emails={emails} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
