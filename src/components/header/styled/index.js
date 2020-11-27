import styled from 'styled-components';
import { centerPositionStyles } from '../../../styles/styled';

export const Container = styled.header`
    width: 100%;
    height: 52px;
    background-color: #157eb3;
    position: fixed;
    top: 0;
`;

export const Logo = styled.div`
    color: white;
    width: 5em;
    height: 100%;
    background-color: #074a6f;
    ${centerPositionStyles};
    &:after {
        content: "SPS"
    }
`;
