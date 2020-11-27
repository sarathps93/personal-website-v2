import styled from 'styled-components';
import { centerPositionStyles } from '../../../styles/common';

export const Container = styled.header`
    width: 100%;
    height: 52px;
    background-color: var(--secondary);
    position: fixed;
    top: 0;
`;

export const Logo = styled.div`
    color: var(--white);
    width: 5em;
    height: 100%;
    background-color: var(--secondary-dark);
    ${centerPositionStyles};
    &:after {
        content: "SPS"
    }
`;
