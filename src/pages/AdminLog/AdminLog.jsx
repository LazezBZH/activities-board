import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./AdminLog.css";

export default function AdminConnected() {
  const [name, setName] = useState("");
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
  function onChangeName(e) {
    setName(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, password);
    if (name == "admin" && password == "Admin@123") {
      navigate(`/admin`);
    } else navigate(`/error`);
  }
  return (
    <div className="adminConnected">
      <form className="form" id="form" onSubmit={handleSubmit}>
        <div className="entries">
          <input
            type="text"
            id="name"
            value={name}
            onChange={onChangeName}
            placeholder="Name"
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
          value="Me connecter en tant qu'admin"
        />
      </form>

      <Link to={"/admin"}>Admin</Link>
    </div>
  );
}
