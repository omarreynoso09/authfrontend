import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { getUserToken, logoutUser } from "../Auth";

const NavBar = ({ isAuthLoading, setIsAuthLoading }) => {
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const token = getUserToken();
    setUserToken(token);
  }, [isAuthLoading]);

  return (
    <div>
      <nav>
        <h3>NavBar</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!userToken && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>{" "}
            </>
          )}
          {userToken && (
            <>
              <span>
                <strong>You Just Logged In</strong>
              </span>
              <button
                onClick={async () => {
                  setIsAuthLoading(true);
                  const logoutSuccess = await logoutUser();
                  if (logoutSuccess) setIsAuthLoading(false);
                }}
              >
                Logout
              </button>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
