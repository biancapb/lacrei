import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #eeeeee;
  display: flex;
  height: 60px;
  width: auto;
  justify-content: space-between;
`;

export const TabsContainer = styled.div`
  margin-right: 60px;
`;

export const Title = styled.a`
  color: #018762;
  font-family: "Nunito", sans-serif;
  font-size: 32px;
  font-weight: 700;
  font-style: normal;
  line-height: 43.65px;
  margin-left: 64px;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
    transition-duration: 0.5s;
  }
`;
