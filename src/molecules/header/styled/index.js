import styled from 'styled-components';
import { centerPositionStyles } from '../../../styles/common';

export const Container = styled.header`
    width: 100%;
    height: 52px;
    background-color: var(--secondary);
    position: fixed;
    top: 0;
    z-index: 9999;
`;

export const Logo = styled.div`
    color: var(--white);
    width: 5em;
    height: 100%;
    font-family: cursive;
    font-size: 24px;
    ${centerPositionStyles};
    &:after {
        content: "Sarath"
    }
`;
