import { useEffect, useState } from "react";
import "./App.css";
// import SearchInput from "./components/SearchInput";

const emailList = `
firstlast@domain.com
first.last@domain.com
first_last@domain.com
flast@domain.com
firstl@domain.com
first@domain.com`;

export default function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [domain, setDomain] = useState("");
  const [emails, setEmails] = useState(emailList);
  // const [forms, setForms] = useState([]);

  useEffect(
    () => console.log(`${first} ${last} ${domain}`),
    [first, last, domain]
  );

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(`handleFormSubmit() called`);
    // set if statement for if @ is included in the domain or not
    // set validation or the domain ending in .com or something similar
    setEmails(`
    ${first}${last}@${domain}.com
    ${first}.${last}@${domain}.com
    ${first}_${last}@${domain}.com
    f${last}@${domain}.com
    ${first}l@${domain}.com
    ${first}@${domain}.com`);
  }

  return (
    <>
      <main>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="first" aria-describedby="first">
              First Name
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
          <div>
            <label htmlFor="last" aria-describedby="last name">
              Last Name
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
          <div>
            <label htmlFor="domain" aria-describedby="domain">
              Domain:
            </label>
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
          </div>
          <button type="submit">Find Combinations</button>
        </form>
        <br />
        <label htmlFor="emails">Email Combinations</label>
        <textarea
          name="emails"
          id="emails"
          cols="50"
          rows="20"
          value={emails}
        ></textarea>
      </main>
    </>
  );
}
