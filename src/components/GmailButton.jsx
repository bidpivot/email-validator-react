import React from "react";

const GmailButton = ({ emails }) => {
  // const gmailLink = "";
  const commaSeparatedEmails = emails.replace(/\n/g, ", ");
  console.log(`GmailButton() called with emails: ${commaSeparatedEmails}`);
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&bcc=${commaSeparatedEmails}`;

  return (
    <a href={gmailLink} target="_blank" rel="noopener noreferrer">
      <div className="forwarding icon">
        {/* <img src="email-icon.png" alt="Gmail" /> */}
      </div>
    </a>
  );
};

export default GmailButton;
