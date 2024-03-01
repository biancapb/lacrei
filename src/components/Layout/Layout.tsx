import Button from "../Button/Button";
import ImageLayout from "../ImageLayout/ImageLayout";

import {
  Container,
  ContainerButton,
  ContainerTitle,
  Subtitle,
  Title,
} from "./LayoutStyle";

interface LayoutProps {
  isHome?: boolean;
  textTitle: string;
  textSubtitle: string;
  type: string;
}

const Layout: React.FC<LayoutProps> = ({
  isHome,
  type,
  textTitle,
  textSubtitle,
}) => {
  return (
    <Container>
      <ContainerTitle>
        <Title>{textTitle}</Title>
        <Subtitle isHome={isHome}>{textSubtitle}</Subtitle>

        {isHome && (
          <ContainerButton>
            <Button
              buttonType="primary"
              textButton="Pessoa Usuária"
              route="/user"
            />

            <Button
              buttonType="secondary"
              textButton="Profissional"
              route="/professional"
            />
          </ContainerButton>
        )}
      </ContainerTitle>

      <ImageLayout imageType={type} />
    </Container>
  );
};

export default Layout;
