import Container from "../components/container";
import Logo from "../components/logo";
import Menu from "../components/menu";
import Footer from "../components/footer";

type DefaultTemplateProps = {
  children: React.ReactNode;
};
function DefaultTemplate({ children }: DefaultTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default DefaultTemplate;
