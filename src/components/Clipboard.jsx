export default function Clipboard(props) {
  const textToCopy = props.emails;

  function handleClickCopy() {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          console.log("Text copied to clipboard successfully");
        })
        .catch(err => {
          console.error("Unable to copy text: ", err);
        });
    } else {
      // Fallback for browsers that do not support the Clipboard API
      textToCopy.select();
      document.execCommand("copy");
    }
  }

  return (
    <div
      id="copyToClipboard-a"
      className="clipboard icon"
      onClick={handleClickCopy}
    ></div>
  );
}
