import styled from "styled-components";

export const ContainerError = styled.div`
  display: flex;
  flex-direction: row; 
  height: 100vh;
`;

export const UiError = styled.div`
  flex: 2;
  padding: 10vh;
`;

export const MsgError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  justify-content: space-between;
`;

export const ImageError = styled.div`
  flex: 5;
  background-image: url("./src/assets/images/Error.png");
  background-size: cover;
  background-position: center;
`;
