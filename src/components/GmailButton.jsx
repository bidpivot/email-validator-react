import React from "react";

const GmailButton = ({ emails }) => {
  const commaSeparatedEmails = emails.replace(/\n/g, ", ");
  console.log(`GmailButton() called with emails: ${commaSeparatedEmails}`);
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&bcc=${commaSeparatedEmails}`;

  return (
    <a href={gmailLink} target="_blank" rel="noopener noreferrer">
      <div className="forwarding icon">
        <svg
          height="20px"
          viewBox="0 0 24 24"
          width="20px"
          fill="#000000"
          style={{ transform: "scaleX(-1)" }}
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path>
        </svg>
      </div>
    </a>
  );
};

export default GmailButton;
