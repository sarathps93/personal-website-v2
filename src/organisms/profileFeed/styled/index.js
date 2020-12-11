import styled from 'styled-components';
import { SubHeading, StyledAnchor, FlexContainer, GridContainer } from '../../../styles/common';

export const Container = styled.div`
    width: 50%;
    @media(max-width: 767px) {
        width: 100%;
    }
`;

export const FeedHeading = styled(SubHeading)`
    margin-bottom: 0;
    margin-left: 12px;
`;

export const FeedBody = styled.p`
    line-height: 1.487;
`;


export const ProjectContainer = styled(GridContainer)`
    margin-top: 18px;
    grid-gap: 18px;
    & hr:last-child {
        display: none;
    }
    @media(max-width: 768px) {
        grid-template-columns: auto;
     }
`;

export const ProjectBlock = styled.div`
    border: var(--border);
    padding: 18px;
    border-radius: 12px;
`;

export const ProjectTitle = styled(FlexContainer)`
    align-items: center;
    justify-content: flex-start;
    & img {
        margin-right: 12px;
    }
    & span {
        font-weight: 600;
        width: 80%;
        @media(max-width: 1330px) {
           width: 75%;
        }
    }
`;

export const ProjectDescription = styled.div`
    font-size: 16px;
    margin: 12px 0;
`;

export const SeeProject = styled(StyledAnchor)`
    font-weight: 600;
    font-size: 16px;
    &:hover {
        text-decoration: underline;
    }
`;