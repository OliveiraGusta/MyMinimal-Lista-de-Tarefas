import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    border: 1px solid;
    border-radius: 30px;
    padding: 70px 120px;
`;

export const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 50px 50px;
`;

export const ButtonStart= styled.button`
    padding: 10px 50px ;
    background-color: transparent;
    border: 1px solid #363636;
    border-radius: 10px;
    color: #363636;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        border: 1px solid #363636;
        font-weight: bold;
    }
    `;