import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.div`
    height: 50px;
    margin: 10px auto;

    & input, select{
        width: 400px;
        background-color: transparent !important;
        outline: none;
        border: 1px solid;
        border-radius: 10px;
        font-size: 16px;
        padding: 20px;
        padding-right: 55px;
        margin-bottom: 10px;
    }
`;

export const SubInputFields = styled.div`
    display: flex;
    gap: 10px;
`;

export const Titulo = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

export const ButtonNewTask = styled.button`
    padding: 10px 50px ;
    background-color: transparent;
    border: 1px solid;
    border-radius: 10px;

    font-size: 20px;
    font-height: bold;
    cursor: pointer;

    &:hover{
        margin: -1px;
        border: 2px solid;
    }
    `;