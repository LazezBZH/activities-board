import { useNavigate, Link } from "react-router-dom";

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
      {/* <Link to={"/"}>Back</Link> */}
      <button onClick={back}>retour</button>
    </div>
  );
}
