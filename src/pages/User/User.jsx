import { useNavigate } from "react-router-dom";
import UserCard from "../../components/UserCard/UserCard";
import "./User.css";

import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback() {
  let navigate = useNavigate();
  function back() {
    navigate(-1);
  }
  return (
    <div className="alert-error">
      <p>This user doesn't exist!</p>
      <button onClick={back}>Try again</button>
    </div>
  );
}

export default function User() {
  let navigate = useNavigate();
  function back() {
    navigate(-1);
  }

  return (
    <>
      <div className="user-container">
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
          <UserCard />
          <button className="back-btn" onClick={back}>
            Back
          </button>
        </ErrorBoundary>
      </div>
    </>
  );
}
