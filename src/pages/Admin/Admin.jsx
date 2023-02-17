import { useNavigate, Link } from "react-router-dom";
import "./Admin.css";

export default function Admin() {
  let navigate = useNavigate();

  function handleChange(value) {
    navigate(`../${value}`);
    value = "";
  }

  function back() {
    navigate(-1);
  }
  return (
    <div className="admin">
      <h2>Witch user do you want to see?</h2>
      <div className="main-admin">
        <select
          name="select-user"
          id="select-user"
          className="select-user"
          onChange={(event) => handleChange(event.target.value)}
        >
          <option value="">Choix</option>
          <option value="Bob_l'éponge">Bob l'Éponge</option>
          <option value="Jérémy_Robson">Jérémy Robson</option>
          <option value="Caroline_Buipe">Caroline Buipe</option>
          <option value="Jean_Bon">Jean Bon</option>
          <option value="Arthur_Dannes">Arthur Dannes</option>
          <option value="Olivia_Carte">Olivia Carte</option>
          <option value="Marie_Doe">Marie Doe</option>
        </select>
        <button onClick={back}>Back</button>
      </div>
    </div>
  );
}
