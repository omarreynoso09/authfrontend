import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../Auth";

const RegistrationPage = ({ isAuthLoading, setIsAuthLoading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <input
        placeholder="Usename"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Passwrod"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={async () => {
          setIsAuthLoading(true);
          const registerSuccess = await registerUser(username, password);
          const loginSuccess = (await registerSuccess)
            ? await loginUser(username, password)
            : false;
          if (loginSuccess) {
            setIsAuthLoading(false);
            navigate("/");
          }
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default RegistrationPage;
