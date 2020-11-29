import styled from 'styled-components';
import { verticalAlign, StyledAnchor } from '../../../styles/common';

export const Container = styled.div`
    display: flex;
    margin: 18px 0;
`;

export const ImageContainer = styled.div`
    width: fit-content;
    height: 150px;
    ${verticalAlign};
    padding: 12px;
    border: var(--border);
    border-radius: 18px;
    @media(max-width: 1000px) {
        height: 100px;
    }
    @media(max-width: 767px) {
        height: 70px;
    }
`;

export const Image = styled.img`
    width: 150px;
    max-height: 140px;
    @media(max-width: 1000px) {
        width: 100px;
        max-height: 90px;
    }
    @media(max-width: 767px) {
        width: 70px;
        max-height: 60px;
    }
`;

export const CompanyName = styled(StyledAnchor)`
    font-weight: 600;
    font-size: 18px;
    &:hover {
        text-decoration: underline;
    }
`;

export const Description = styled.div`
    margin-left: 16px;
    padding: 6px;
`;

export const Designation = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: var(--green);
`;

export const Date = styled.span`
    font-size: 14px;
    &::before {
        content: ", (";
    }
    &::after {
        content: ")";
    }
`;

export const Location = styled.div`
    font-weight: bold;
    font-size: 14px;
    opacity: 0.8;
`;

export const Content = styled.p``;
