export default function EmailTextArea(props) {
  return (
    <label htmlFor="emails">
      <textarea
        name="emails"
        id="emails"
        cols="50"
        rows="20"
        value={props.emails}
      ></textarea>
    </label>
  );
}
