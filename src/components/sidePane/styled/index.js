import styled from 'styled-components';
import { verticalAlign } from '../../../styles/common';

export const Container = styled.div`
    ${verticalAlign};
    width: 25%;
    flex-direction: column;
`;

export const SkillItem = styled.div`
    flex: 1 0 30%;
    margin: 12px 4px;
    text-align: center;
    padding-bottom: 6px;
    border-bottom: var(--border);
`;
