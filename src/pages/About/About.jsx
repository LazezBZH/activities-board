import { useNavigate } from "react-router-dom";
import "./About.css";
export default function About() {
  let navigate = useNavigate();
  function back() {
    navigate(-1);
  }
  return (
    <div className="about">
      <div className="about-main">
        <div className="about-main2">
          <div className="objectif">
            <h2>The idea.</h2>
            <ul>
              <li>
                <p>
                  This project is inspired by a Front-End Mentor project:{" "}
                  <a
                    target="_blank"
                    href="https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw"
                  >
                    Link to original project.
                  </a>
                </p>
              </li>
              <li>
                <p>
                  I choose to make it a little more complexe adding other users
                  (just one user in a json file was given).
                </p>
              </li>
              <li>
                <p>
                  Each user can log to see his dashboard. An admin can log and
                  see all users' dashboards.
                </p>
              </li>
            </ul>
          </div>
          <div className="realisation">
            <h2>Realisation.</h2>
            <ul>
              <li>
                <p>This is project a React project, created with Vite.</p>
              </li>
              <li>
                <p>Responsive, coded mobil first.</p>
              </li>
              <li>
                <p>Checked with Wave for accessibility.</p>
              </li>
              <li>
                <p>
                  Bonus: you can copy and paste identifiant or password in one
                  click.
                </p>
              </li>
              <li>
                <p>Error cases are managed (creation of an error bondary).</p>
              </li>
              <li>
                <p>Colors are variables in CSS to make changes easier.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button className="back-btn" onClick={back}>
        Back
      </button>
    </div>
  );
}
