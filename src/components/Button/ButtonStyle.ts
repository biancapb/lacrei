import styled from "styled-components";

interface ButtonProps {
  buttonType: string;
}

export const Container = styled.a<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 192px;

  background-color: ${(props) =>
    props.buttonType === "primary" ? "#018762" : "#ffffff"};
  border: 1px solid #018762;
  border-radius: 8px;
  box-shadow: #00000040 0px 4px 4px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition-duration: 0.5s;
  }

  a {
    color: ${(props) =>
      props.buttonType === "primary" ? "#ffffff" : "#018762"};
    text-decoration: none;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
  }
`;
