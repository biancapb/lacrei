import Tabs from "../Tabs/Tabs";
import { Container, TabsContainer, Title } from "./HeaderStyle";

const Header = (): JSX.Element => {
  return (
    <>
      <Container>
        <Title href="/">Lacrei</Title>
        <TabsContainer>
          <Tabs></Tabs>
        </TabsContainer>
      </Container>
    </>
  );
};

export default Header;
