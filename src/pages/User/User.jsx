import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { users } from "../../../data.json";
import Activity from "../../components/Activity/Activity";
import Header from "../../components/Header/Header";
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
    <div className="user-container">
      <Header />
      <div className="card">
        <div className="user">
          <div className="user-img">
            <img src={scr} alt="" />
          </div>
          <div className="user-txt">
            <p className="report">Report for</p>
            <div className="user-name">
              <p>{data[0].firstname}</p>
              <p>{data[0].lastname}</p>
            </div>
          </div>
        </div>
        <div className="choice">
          {choice == "daily" ? (
            <button
              className="active-btn"
              value="daily"
              onClick={(e) => setChoice(e.target.value)}
            >
              Daily
            </button>
          ) : (
            <button
              className="inactive-btn"
              value="daily"
              onClick={(e) => setChoice(e.target.value)}
            >
              Daily
            </button>
          )}
          {choice == "weekly" ? (
            <button
              className="active-btn"
              value="weekly"
              onClick={(e) => setChoice(e.target.value)}
            >
              Weekly
            </button>
          ) : (
            <button
              className="inactive-btn"
              value="weekly"
              onClick={(e) => setChoice(e.target.value)}
            >
              Weekly
            </button>
          )}
          {choice == "monthly" ? (
            <button
              className="active-btn"
              value="monthly"
              onClick={(e) => setChoice(e.target.value)}
            >
              Monthly
            </button>
          ) : (
            <button
              className="inactive-btn"
              value="monthly"
              onClick={(e) => setChoice(e.target.value)}
            >
              Monthly
            </button>
          )}
        </div>
      </div>
      <div className="activities">
        {activities.map((activity, index) => (
          <Activity activity={activity} choice={choice} key={index} />
        ))}
      </div>

      <button onClick={back}>retour</button>
    </div>
  );
}
