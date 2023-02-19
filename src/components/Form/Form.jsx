import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Form.css";

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
      navigate(`../Jeremy_Robson`);
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

  async function paste(e) {
    const text = await navigator.clipboard.readText();
    e.target.value = text;
  }
  return (
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
          onClick={paste}
        />
        <div className="password">
          <input
            type="password"
            id="password"
            className="passwordInput"
            value={password}
            onChange={onChangePassword}
            placeholder="Password"
            onClick={paste}
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
  );
}
