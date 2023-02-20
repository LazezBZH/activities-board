import { useState } from "react";
import { useParams } from "react-router-dom";
import { users } from "../../../data.json";
import Activity from "../../components/Activity/Activity";

import "./UserCard.css";

export default function UserCardToDisplay() {
  const { id } = useParams();
  const data = users.filter((data) => data.fullname === id);
  console.log(data);

  const [choice, setChoice] = useState("daily");
  console.log(choice);

  let src = "/images/" + data[0].fullname + ".jpg";

  console.log(choice);
  let activities = [...data[0].activities];

  return (
    <div className="user-card">
      <div className="card">
        <div className="user">
          <div className="user-img">
            <img src={src} alt={data[0].fullname} />
          </div>
          <div className="user-txt">
            <p className="report">Report for</p>
            <div className="user-name">
              <h2>{data[0].firstname}</h2>
              <h2>{data[0].lastname}</h2>
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
    </div>
  );
}
