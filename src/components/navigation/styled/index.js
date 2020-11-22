import styled from 'styled-components';

export const StyledUL = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    border: 1px solid #00539F;
    border-radius: 24px;
`;

export const StyledLi = styled.li`
    flex-grow: 1;
    padding: 12px;
    color: ${props => props.selected ? 'white' : '#00539F'};
    text-align: center;
    cursor: pointer;
    background-color: ${props => props.selected && '#157eb3'};
    border-radius: 24px;
`;
