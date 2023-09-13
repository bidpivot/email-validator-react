import { useEffect, useState } from "react";
import "./App.css";
import "./css/form.css";
import "./css/button.css";

// import SearchInput from "./components/SearchInput";

const emailList = `
firstlast@domain.com
first.last@domain.com
first_last@domain.com
flast@domain.com
firstl@domain.com
first@domain.com`;

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [domain, setDomain] = useState("");
  const [emails, setEmails] = useState(emailList);
  const [nick, setNick] = useState("");
  const [middle, setMiddle] = useState("");
  const [tld, setTld] = useState(".com");

  useEffect(
    () => console.log(`${first} ${last} ${domain}`),
    [first, last, domain]
  );

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(`handleFormSubmit() called`);
    // create variable for first, middle and last initial
    const firstInitial = first[0];
    // const middleInitial = middle[0];
    const lastInitial = last[0];

    if (middle === "" && nick === "") {
      setEmails(`
        ${first}${last}@${domain}${tld}
        ${first}.${last}@${domain}${tld}
        ${first}_${last}@${domain}${tld}
        ${firstInitial}${last}@${domain}${tld}
        ${first}${lastInitial}@${domain}${tld}
        ${first}@${domain}${tld}
        ${last}@${domain}${tld}
        ${last}${first}@${domain}${tld}
        ${last}${firstInitial}@${domain}${tld}
    `);
    } else if (middle !== "") {
    }
  }

  function handleExpandButton(event) {
    console.log("handleExpandButton called");
    setExpanded(!expanded);
  }

  return (
    <main>
      <div className="container app-container">
        <div className="col-left">
          <form onSubmit={handleFormSubmit}>
            <div className="input-fields-continer">
              <div className="form-line">
                <label htmlFor="first" aria-describedby="first">
                  First Name:
                </label>
                <input
                  id="first"
                  type="text"
                  value={first}
                  placeholder="Michael"
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
                  placeholder="Dell"
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
                    placeholder="Mike"
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
                  <span>@</span>
                  <input
                    width="150"
                    id="last"
                    type="text"
                    value={domain}
                    placeholder="dell.com"
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
                    <option value=".co">.co</option>
                    <option value=".app">.app</option>
                  </select>
                </div>
              </div>
              <div className="button-container">
                <button type="submit">Find Combinations</button>
              </div>
            </div>
          </form>
          <button onClick={handleExpandButton} id="expand-button">
            {expanded ? "Reduce Options" : "Expand Options"}
          </button>
        </div>
        <label htmlFor="emails">
          <textarea
            name="emails"
            id="emails"
            cols="50"
            rows="20"
            value={emails}
          ></textarea>
        </label>
      </div>
    </main>
  );
}
