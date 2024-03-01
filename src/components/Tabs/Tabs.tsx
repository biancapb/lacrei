import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, TabText, TabItem } from "./TabsStyle";

interface TabsProps {
  isFooter?: boolean;
}

const Tabs: React.FC<TabsProps> = ({ isFooter }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(location.pathname);

  const handleTabClick = (tabName: string, url: string) => {
    setActiveTab(tabName);
    navigate(url);
  };

  return (
    <>
      <Container className={isFooter ? "footerStyle" : "headerStyle"}>
        <TabItem>
          <TabText
            active={activeTab === "/"}
            onClick={() => handleTabClick("Home", "/")}
          >
            <Link to="/">Home</Link>
          </TabText>

          <TabText
            active={activeTab === "/user"}
            onClick={() => handleTabClick("Pessoa Usuária", "/user")}
          >
            <Link to="/user">Pessoa Usuária</Link>
          </TabText>

          <TabText
            active={activeTab === "/professional"}
            onClick={() => handleTabClick("Profissional", "/professional")}
          >
            <Link to="/professional">Profissional</Link>
          </TabText>
        </TabItem>
      </Container>
    </>
  );
};

export default Tabs;
