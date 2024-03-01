import SocialMedia from "../SocialMedia/SocialMedia";
import Tabs from "../Tabs/Tabs";
import { Container, ContainerSocialMedia, Divider, Text } from "./FooterStyle";
const Footer = (): JSX.Element => {
  return (
    <>
      <Container>
        <Divider></Divider>

        <Tabs isFooter></Tabs>

        <ContainerSocialMedia>
          <SocialMedia
            redirect={"https://facebook.com/lacrei.saude"}
            socialType={"facebook"}
          />

          <SocialMedia
            redirect={"https://instagram.com/lacrei.saude/"}
            socialType={"instagram"}
          />

          <SocialMedia
            redirect={"https://linkedin.com/company/lacrei/"}
            socialType={"linkedin"}
          />
        </ContainerSocialMedia>

        <Text>Desafio Front-end Lacrei</Text>
      </Container>
    </>
  );
};

export default Footer;
