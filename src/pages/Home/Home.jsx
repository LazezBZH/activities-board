import { Link } from "react-router-dom";
import "./Home.css";
import HowTo from "../../components/HowTo/HowTo";
import Form from "../../components/Form/Form";
import Logos from "../../components/Logos/Logos";
import Direct from "../../components/Direct/Direct";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <div>
        <div className="admin-link">
          <Link to={"/adminLog"}>Admin</Link>
        </div>
        <p className="alert">Log as an admin in order to see every member</p>
      </div>
      <div className="main-home">
        <HowTo />
        <div className="aside-right">
          <Form />
          <Logos />
          <Direct />
        </div>
      </div>
      <Footer />
    </div>
  );
}
