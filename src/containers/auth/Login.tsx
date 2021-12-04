import Container from "../../components/Container";
import Card from "../../components/Card";
import CardIcon from "../../components/CardIcon";
import Title from "../../components/Title";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <Container center={true}>
      <Card>
        <CardIcon />
        <Title>Sign In</Title>
        <LoginForm />
      </Card>
    </Container>
  );
};

export default Login;
