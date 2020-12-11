import styled from 'styled-components';
import { centerPositionStyles, StyledAnchor } from '../../../styles/common';

export const Container = styled.header`
    width: 100%;
    height: 52px;
    background-color: var(--secondary-medium);
    position: fixed;
    top: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
`;

export const Logo = styled.div`
    color: var(--white);
    width: 5em;
    height: 100%;
    font-family: cursive;
    font-size: 24px;
    ${centerPositionStyles};
    display: inline-flex;
    &:after {
        content: "Sarath"
    }
    @media(max-width: 767px) {
        display: none;
    }
`;

export const ButtonContainer = styled.div`
    display: inline-flex;
    flex-grow: 2;
    justify-content: flex-end;
    @media(max-width: 767px) {
        justify-content: space-around;
    }
    margin-right: 24px;
`;

export const HeaderButton = styled(StyledAnchor)`
    border: none;
    display: inline;
    background-color: inherit;
    font: inherit;
    font-weight: 600;
    color: var(--white);
    outline: none;
    cursor: pointer;
    margin-left: 24px;
    &:hover {
        text-decoration: none;
    }
`;
