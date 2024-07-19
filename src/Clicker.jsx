export default function Clicker({ message, content }) {
  return (
    <button onClick={() => alert(message)}>{content}</button>
  );
}