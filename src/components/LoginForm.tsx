import Input from "./Input";
import Button from "./Button";
import Center from "./Center";
import { Link } from "react-router-dom";

const linkStyles = {
  color: "blue",
  fontSize: "14px",
  padding: "15px",
  textDecoration: "none",
};

const LoginForm = () => {
  return (
    <>
      <Input placeholder="Email" label="Email" />
      <Input placeholder="Password" label="Password" />
      <Button block={true}>Login</Button>
      <Center>
        <Link to="/register" style={linkStyles}>
          Sign Up
        </Link>
      </Center>
    </>
  );
};

export default LoginForm;
