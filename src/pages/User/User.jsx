import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { users } from "../../../data.json";
import Activity from "../../components/Activity/Activity";
import "./User.css";

export default function User() {
  const { id } = useParams();
  const data = users.filter((data) => data.fullname === id);
  console.log(data);
  let scr = "../../../public/images/" + data[0].fullname + ".jpg";
  const [choice, setChoice] = useState("daily");
  console.log(choice);
  let activities = [...data[0].activities];

  let navigate = useNavigate();

  function back() {
    navigate(-1);
  }

  return (
    <div className="container">
      <div className="card">
        <div className="user">
          <p>Report for</p>
          <p>{data[0].firstname}</p>
          <p>{data[0].lastname}</p>
          <img src={scr} alt="" />
        </div>
        <div className="choice">
          <button value="daily" onClick={(e) => setChoice(e.target.value)}>
            Daily
          </button>
          <button value="weekly" onClick={(e) => setChoice(e.target.value)}>
            Weekly
          </button>
          <button value="monthly" onClick={(e) => setChoice(e.target.value)}>
            Monthly
          </button>
        </div>
      </div>
      <div className="activities">
        {activities.map((activity, index) => (
          <Activity activity={activity} choice={choice} key={index} />
        ))}
      </div>

      {/* <Link to={"/"}>Back</Link> */}
      <button onClick={back}>retour</button>
      <Link className="link" to={"/"}>
        Home
      </Link>
    </div>
  );
}
