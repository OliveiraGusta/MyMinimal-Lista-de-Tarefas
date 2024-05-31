import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;
export const ProfileInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;


    & p{
        font-size: 20px;
        font-weight: bold;
    }
`;
export const ProfileImage = styled.img`
    width: 130px;
    height: 100%;
    border-radius: 50%; 
    border: 1px solid;
    margin-top: -15px;
    margin-right: 15px;
`;
