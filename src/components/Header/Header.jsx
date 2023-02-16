import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1>Activity Board</h1>
      <div className="link">
        <Link className="link-home" to={"/"}>
          Home
        </Link>
      </div>
    </header>
  );
}
