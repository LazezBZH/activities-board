import { useParams, Link } from "react-router-dom";
import { users } from "../../../data.json";

export default function User() {
  const { id } = useParams();
  const data = users.filter((data) => data.fullname === id);
  console.log(data);

  return (
    <div className="container">
      <div className="content">{data[0].firstname}</div>
      <Link to={"/"}>Back</Link>
    </div>
  );
}
