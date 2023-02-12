import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  function handleChange(value) {
    navigate(`${value}`);
    value = "";
  }

  return (
    <div className="home">
      <select
        name="selectUser"
        id="selectUser"
        onChange={(event) => handleChange(event.target.value)}
      >
        <option value="">Choix</option>
        <option value="Jérémy_Robson">Jérémy Robson</option>
        <option value="Caroline_Buipe">Caroline Buipe</option>
        <option value="Jean_Bon">Jean Bon</option>
        <option value="Arthur_Dannes">Arthur Dannes</option>
        <option value="Olivia_Carte">Olivia Carte</option>
        <option value="Marie_Doe">Marie Doe</option>
      </select>
    </div>
  );
}
