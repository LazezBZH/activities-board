import { useNavigate } from "react-router-dom";
import "./Error.css";
export default function Error() {
  let navigate = useNavigate();
  function back() {
    navigate(-1);
  }
  return (
    <div className="error-log">
      <p>This user doesn't exist, please check e-mail and password</p>
      <button className="back-btn" onClick={back}>
        Back
      </button>
    </div>
  );
}
