import { Link } from "react-router-dom";
import "./Footer.css";
import footer from "../../../public/images/footer.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={footer} alt="" />
      <div className="footer-txt">
        <p>Explanations about this project.</p>
        <div className="footer-link">
          <Link to={"/about"}>About</Link>
        </div>
      </div>
    </div>
  );
}
