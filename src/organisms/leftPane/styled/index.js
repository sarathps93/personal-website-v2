import styled from 'styled-components';
import { verticalAlign } from '../../../styles/common';

 export const Container = styled.div`
    width: 23%;
    flex-direction: column;
    ${verticalAlign};
    @media(max-width: 767px) {
        display: inline-grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto;
        width: 100%;
    }
`;

export const ProfilePhoto = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin-bottom: 12px;
    @media(max-width: 1000px) {
        width: 100px;
        height: 100px;
    }
`;

export const Name = styled.div`
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    @media(max-width: 1000px) {
        font-size: 24px;
    }
`;

export const Designation = styled.div`
    text-align: center;
`;

export const AnchorButton = styled.div`
    width: 100px;
    border: 1px solid var(--primary);
    border-radius: 24px;
    padding: 12px;
    text-align: center;
    &:hover {
        background-color: var(--secondary);
        color: var(--white);
    }
`;

export const LangContainer = styled.div`
    ${verticalAlign};
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const Language = styled.div`
    display: inline-block;
    width: 50%;
`;

export const Circle = styled.div`
    display: inline-block;
    border-radius: 50%;
    background-color: ${props => props.fill ? 'var(--secondary)' : 'grey'};
    width: 10px;
    height: 10px;
`;