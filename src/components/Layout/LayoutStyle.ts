import styled from "styled-components";

interface LayoutProps {
  isHome?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 64px 64px 0;
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 70px;
`;

export const ContainerTitle = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const Title = styled.h2`
  color: #1f1f1f;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
`;

export const Subtitle = styled.p<LayoutProps>`
  color: #515151;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  border-left: ${(props) => (props.isHome ? "" : "5px solid green")};
  padding-left: ${(props) => (props.isHome ? "" : "24px")};
`;
