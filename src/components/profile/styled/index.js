import styled from 'styled-components';

 export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 24px;
`;

export const ProfilePhoto = styled.img`
    width: 320px;
    height: 320px;
    border-radius: 50%;
    margin-bottom: 12px;
`;

export const Name = styled.div`
    font-weight: bold;
    font-size: 36px;
    text-align: center;
`;

export const Designation = styled.div`
    text-align: center;
`;

export const StyledAnchor = styled.a`
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    margin-right: 6px;
    font-size: 16px;
    color: #00539F;
    span {
        margin-left: 6px
    }
`;

export const AnchorButton = styled.div`
    width: 100px;
    border: 1px solid #00539F;
    border-radius: 24px;
    padding: 12px;
    text-align: center;
    &:hover {
        background-color: #157eb3;
        color: white;
    }
`;
