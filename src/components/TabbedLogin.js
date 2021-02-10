import { DropdownButton } from "react-bootstrap";
import Register from "./Register";
import Resize from "./utils/Resize";

const TabbedLogin = () => {
  const watchSize = Resize();

  return (
    <div className="login-signup">
      {window.innerWidth < 768 ? (
        <DropdownButton
          variant="white"
          id="dropdown-left"
          title="|||"
          drop="left"
        >
          <Register />
        </DropdownButton>
      ) : (
        <Register />
      )}
    </div>
  );
};

export default TabbedLogin;
