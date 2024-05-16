import styled from "styled-components";

export const Container = styled.div`
    & h2{
        margin-top: 10px;
    }
`;

export const FormTitle = styled.h2`
    font-weight: bold;

`;

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;

    & input{
        margin-right: 50px;
    }
`;

export const ProfileImage = styled.img`
    width: 130px;
    height: 100%;
    border-radius: 50%; 
    border: 1px solid #363636;
    margin-top: -15px;
    margin-right: 15px;
`;

export const ContainerCircles = styled.div`
    display: flex;
    flex-direction: column;
  
`;

export const PreviewCircleColor = styled.div`
    width: 50px; 
    height: 50px; 
    margin: 10px auto;
    border-radius: 50%; 

    background-color: #ffffff; 
    border: 1px solid #363636; 
    transform: translateY(-22%);
    margin-right: 15px;

`;

export const FormInputs = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputField = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    margin: 10px auto;
    
    & input{
        width: 400px;
        height: 100%;
        background-color: transparent !important;
        outline: none;
        border: 1px solid #363636;
        border-radius: 10px;
        font-size: 16px;
        padding: 20px;
        padding-right: 55px;
    }

`;