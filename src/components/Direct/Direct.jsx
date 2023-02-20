import { Link } from "react-router-dom";
import "./Direct.css";
import lazy from "/images/lazy.jpg";

export default function Direct() {
  return (
    <div className="direct-all">
      <img src={lazy} alt="" />
      <div className="direct">
        <p>
          I prefer not to test logging and want to see immediatly dashboards
          like a logged admin.
        </p>
        <div className="direct-link">
          <Link to={"/admin"}>Direct Link</Link>
        </div>
      </div>
    </div>
  );
}
