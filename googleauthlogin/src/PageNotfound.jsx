import { useNavigate } from "react-router-dom";
export default function PageNotfound() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      404 PageNotfound
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
}
