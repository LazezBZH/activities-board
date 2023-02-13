import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="home">
      <p>ERREUR</p>
      <Link to={"/"}>Back</Link>
    </div>
  );
}
