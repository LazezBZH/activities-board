import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./AdminLog.css";

export default function AdminConnected() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const eyeOpen = document.getElementsByClassName(
    "admin-password-icon_open"
  )[0];
  const eyeClosed = document.getElementsByClassName(
    "admin-password-icon_closed"
  )[0];
  const passwordInput = document.getElementsByClassName(
    "admin-passwordInput"
  )[0];

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
    } else {
      alert("name or password invalid ");
    }
  }
  return (
    <div className="admin-log">
      <h2>Log as an admin</h2>
      <form className="admin-form" id="admin-form" onSubmit={handleSubmit}>
        <div className="admin-entries">
          <div className="admin-inputs">
            <input
              type="text"
              id="admin-name"
              className="admin-name"
              value={name}
              onChange={onChangeName}
              placeholder="Name"
            />
          </div>

          <div className="admin-inputs admin-pass">
            <input
              type="password"
              id="admin-password"
              className="admin-passwordInput"
              value={password}
              onChange={onChangePassword}
              placeholder="Password"
            />
            <FontAwesomeIcon
              onClick={closeOpen}
              className="admin-password-icon_open"
              icon={faEye}
            />
            <FontAwesomeIcon
              onClick={closeClosed}
              className="admin-password-icon_closed"
              icon={faEyeSlash}
            />
          </div>
        </div>
        <input
          className="admin-submit"
          id="admin-submit"
          type="submit"
          value="Connect"
        />
        <p>(id= admin pass= Admin@123)</p>
      </form>
    </div>
  );
}
