import { useNavigate } from "react-router-dom";
import "./Error.css";
export default function Error() {
  let navigate = useNavigate();
  function back() {
    navigate(-1);
  }
  return (
    <div className="error-log">
      <p>
        Cet utilisateur n'existe pas, veuillez vérifier votre mail de connexion
        et votre mot de passe
      </p>
      <button className="back-btn" onClick={back}>
        Back
      </button>
    </div>
  );
}
