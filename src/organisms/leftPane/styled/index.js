import styled from 'styled-components';
import { verticalAlign } from '../../../styles/common';

 export const Container = styled.div`
    width: 23%;
    flex-direction: column;
    ${verticalAlign};
`;

export const ProfilePhoto = styled.img`
    width: 200px;
    height: 200px;
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
    color: var(--primary);
    span {
        margin-left: 6px
    }
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