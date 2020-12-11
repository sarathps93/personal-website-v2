import styled, { css, keyframes } from 'styled-components';

const animation = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;

export const AlignCenter = styled.div`
    width: 100%;
    text-align: center;
`;

export const AppContainer = styled.div`
    padding: 18px;
    display: flex;
    box-sizing: border-box;
    margin-top: 52px;
    justify-content: space-between;
    animation: ${animation} 1s linear;
    @media(max-width: 767px) {
        display: block;
    }
`;

export const Card = styled.section`
    width: 100%;
    background-color: var(--white);
    box-sizing: border-box;
    padding: 18px;
    margin: 6px 0;
    border: var(--border);
    border-radius: 24px;
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-around;
    align-content: space-around;
    grid-gap: 24px 0;
    @media(max-width: 1000px) {
        grid-template-columns: auto;
    }
    @media(max-width: 767px) {
        grid-template-columns: auto auto;
    }
`;


export const SubHeading = styled.h3`
    font-size: 18px;
    margin-top: 0;
    text-align: center;
    margin-bottom: 18px;
`

export const centerPositionStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
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
    &:hover {
        text-decoration: underline;
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 12px;
    font: inherit;
    margin-top: 12px;
    margin-bottom: 18px;
    border-radius: 12px;
    border: var(--border);
    outline: none;
`;

export const StyledForm = styled.form`
    box-sizing: border-box;
`;

export const verticalAlign = css`
    display: flex;
    align-items: center;
`;

export const VerticalAlign = styled.div`
    ${verticalAlign};
`;

export const LinkStyleButton = styled.button`
    background-color: var(--white);
    border: none;
    font: inherit;
    padding: 0;
    color: var(--primary);
    text-decoration: underline;
    cursor: pointer;
    outline: none;
`;

export const Hr = styled.hr`
    margin: 18px 0;
`;
