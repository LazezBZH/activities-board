import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./AdminLog.css";

export default function AdminConnected() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  function copy1(e) {
    inputRef1.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }
  function copy2(e) {
    inputRef2.current.select();
    console.log(indexedDB);
    document.execCommand("copy");
    e.target.focus();
  }

  async function paste1(e) {
    const text = await navigator.clipboard.readText();
    e.target.value = text;
    setName(text);
  }
  async function paste2(e) {
    const text = await navigator.clipboard.readText();
    e.target.value = text;
    setPassword(text);
  }

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
              title="click here to copy admin's identifiant"
              onClick={paste1}
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
              title="click here to copy admin's password"
              onClick={paste2}
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
        <p className="help">
          (id={" "}
          <input
            ref={inputRef1}
            className="toCopy"
            onClick={copy1}
            value="admin"
            readOnly
            title="click here to copy admin's identifiant"
          />{" "}
          pass={" "}
          <input
            ref={inputRef2}
            className="toCopy"
            onClick={copy2}
            value="Admin@123"
            readOnly
            title="click here to copy admin's password"
          />
          )
        </p>
      </form>
    </div>
  );
}
