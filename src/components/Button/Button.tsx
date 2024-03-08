import { Link } from "react-router-dom";
import { Container } from "./ButtonStyle";

interface ButtonProps {
  textButton?: string;
  buttonType: string;
  route: string;
}

const Button: React.FC<ButtonProps> = ({ buttonType, textButton, route }) => {
  return (
    <>
      <Container buttonType={buttonType}>
        <Link to={route}>{textButton}</Link>
      </Container>
    </>
  );
};

export default Button;
