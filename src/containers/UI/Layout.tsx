import Navbar from "../../components/Navbar";
import Container from "../../components/Container";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
