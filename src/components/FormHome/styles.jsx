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
`;

export const ProfileImage = styled.img`
    width: 120px;
    height: 100%;
    border-radius: 50%; 
    border: 1px solid #363636;
    margin-right: 15px;
`;

export const ContainerCircles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: -10px;
`;


export const PreviewCircleColor = styled.div`
    width: 50px; 
    height: 50px; 
    position: relative;
    margin: 10px 0;
    border-radius: 50%; 

    background-color: #ffffff; 
    border: 1px solid #363636; 
    transform: translateY(-25%);

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
        width: 100%;
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