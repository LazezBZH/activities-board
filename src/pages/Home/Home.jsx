import { Link } from "react-router-dom";
import "./Home.css";
import HowTo from "../../components/HowTo/HowTo";
import Form from "../../components/Form/Form";
import Logos from "../../components/Logos/Logos";
import Direct from "../../components/Direct/Direct";

export default function Home() {
  return (
    <div className="home">
      <header>
        <h1>Activity Board</h1>
        <div className="admin-link">
          <Link to={"/adminLog"}>Admin</Link>
          <p className="alert">Log as an admin in order to see every member</p>
        </div>
      </header>
      <div className="main-home">
        <HowTo />
        <div className="aside-right">
          <Form />
          <Logos />
          <Direct />
        </div>
      </div>
    </div>
  );
}
