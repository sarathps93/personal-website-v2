import styled from 'styled-components';
import { LinkStyleButton } from '../../../styles/common';

export const ReadMoreButton = styled(LinkStyleButton)`
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    &:hover {
        text-decoration: underline;
        color: var(--primary);
        opacity: 1;
    }
`;
