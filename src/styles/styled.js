import styled from 'styled-components';

export const AppContainer = styled.div`
    padding: 18px;
    display: flex;
    box-sizing: border-box;
`;

export const Card = styled.section`
    width: 100%;
    background-color: white;
    box-sizing: border-box;
    padding: 18px;
    margin: 6px 0;
    border: 1px solid rgb(204, 204, 204);
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-around;
    align-content: space-around;
    grid-gap: 24px 0;
`;

export const SubHeading = styled.h3`
    font-size: 18px;
    margin-top: 0;
    text-align: center;
`