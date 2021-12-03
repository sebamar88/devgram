import Container from "../../components/Container";
import Card from "../../components/Card";
import CardIcon from "../../components/CardIcon";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Center from "../../components/Center";
import { Link } from "react-router-dom";

const linkStyles = {
  color: "blue",
  fontSize: "14px",
  padding: "15px",
  textDecoration: "none",
};

const Login = () => {
  return (
    <Container center={true}>
      <Card>
        <CardIcon />
        <Title>Sign In</Title>
        <Input placeholder="Email" label="Email" />
        <Input placeholder="Password" label="Password" />
        <Button block={true}>Login</Button>
        <Center>
          <Link to="/register" style={linkStyles}>
            Sign Up
          </Link>
        </Center>
      </Card>
    </Container>
  );
};

export default Login;
