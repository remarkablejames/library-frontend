import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Welcome = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Remove JWT from cookie
    Cookies.remove("token");

    // Redirect to login page
    history.push("/login");
  };

  return (
    <div>
      <h1>Welcome</h1>
      <p>You are logged in!</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Welcome;
