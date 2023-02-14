import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import HowTo from "../../components/HowTo/HowTo";
// import home from "../../../public/images/home.png";

export default function Home() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const eyeOpen = document.getElementsByClassName("password-icon_open")[0];
  const eyeClosed = document.getElementsByClassName("password-icon_closed")[0];
  const passwordInput = document.getElementsByClassName("passwordInput")[0];

  function closeOpen() {
    eyeOpen.style.display = "none";
    eyeClosed.style.display = "block";
    passwordInput.type = "text";
  }
  function closeClosed() {
    eyeOpen.style.display = "block";
    eyeClosed.style.display = "none";
    passwordInput.type = "password";
  }

  function onChangeMail(e) {
    setMail(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(mail, password);
    if (mail == "jeremy.robson@monmail.com" && password == "Robson@123") {
      navigate(`../Jérémy_Robson`);
    } else if (
      mail == "caroline.buipe@monmail.com" &&
      password == "Buipe@123"
    ) {
      navigate(`../Caroline_Buipe`);
    } else if (mail == "jean.bon@monmail.com" && password == "Bon@123") {
      navigate(`../Jean_Bon`);
    } else if (
      mail == "arthur.dannes@monmail.com" &&
      password == "Dannes@123"
    ) {
      navigate(`../Arthur_Dannes`);
    } else if (mail == "olivia.carte@monmail.com" && password == "Carte@123") {
      navigate(`../Olivia_Carte`);
    } else if (mail == "marie.doe@monmail.com" && password == "Doe@123") {
      navigate(`../Marie_Doe`);
    } else navigate(`/error`);
  }
  return (
    <div className="home">
      <h1>Activity Board</h1>
      <div className="main-home">
        <HowTo />

        <div className="right">
          <form className="form" id="form" onSubmit={handleSubmit}>
            <h2 className="userTitle">User</h2>
            <div className="entries">
              {" "}
              <input
                type="text"
                id="mail"
                value={mail}
                onChange={onChangeMail}
                placeholder="e-mail"
              />
              <div className="password">
                <input
                  type="password"
                  id="password"
                  className="passwordInput"
                  value={password}
                  onChange={onChangePassword}
                  placeholder="Password"
                />
                <FontAwesomeIcon
                  onClick={closeOpen}
                  className="password-icon_open"
                  icon={faEye}
                />
                <FontAwesomeIcon
                  onClick={closeClosed}
                  className="password-icon_closed"
                  icon={faEyeSlash}
                />
              </div>
            </div>
            <input
              className="submit"
              id="submit"
              type="submit"
              value="Me connecter"
            />
          </form>
          <div className="logos">
            <div className="logo logo1"></div>
            <div className="logo logo2"></div>
            <div className="logo logo3"></div>
            <div className="logo-txt"></div>
            <div className="logo-txt2"></div>
            <div className="logo logo4"></div>
            <div className="logo logo5"></div>
            <div className="logo logo6"></div>
          </div>
        </div>
      </div>

      <div className="link">
        <Link to={"/adminLog"}>Admin</Link>
        <p className="alert">Log as an admin in order to see every member</p>
      </div>
    </div>
  );
}
