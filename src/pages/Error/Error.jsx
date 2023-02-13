import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="home">
      <p>
        Cet utilisateur n'existe pas, veuillez vérifier votre mail de connexion
        et votre mot de passe
      </p>
      <Link to={"/"}>Back</Link>
    </div>
  );
}
