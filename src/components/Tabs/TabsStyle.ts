import styled from "styled-components";

interface TabProps {
  active?: boolean;
  isFooter?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TabItem = styled.nav`
  display: flex;
  gap: 40px;
`;

export const TabText = styled.a<TabProps>`
  &:hover {
    opacity: 0.6;
    transition-duration: 0.5s;
  }

  a {
    color: ${(props) => (props.active ? "green" : "black")};
    text-decoration: none;
    font-family: "Nunito", sans-serif;
    font-size: 16px;
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    line-height: 22px;
  }
`;
