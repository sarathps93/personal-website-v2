import styled from 'styled-components';
import { verticalAlign, StyledAnchor } from '../../../styles/common';

export const WriteSomethingButton = styled.button`
    width: 100%;
    border-radius: 24px;
    padding: 12px 18px;
    cursor: pointer;
    outline: none;
    background-color: inherit;
    border: var(--border);
    font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif;
    text-align: left;
    ${verticalAlign};
    &:hover {
        background-color: var(--border-color);
    }
    span {
        font-weight: bold;
        opacity: 0.6;
        margin-left: 12px;
    }
`;

export const ContactForm = styled.form`
    width: 50vmax;
    max-width: 100vw;
    height: fit-content;
    max-height: 100vh;
    background-color: var(--white);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border-radius: 18px;
    padding: 18px;
    overflow: auto;
`;

export const DownloadResume = styled(StyledAnchor)`
    font-size: 12px;
    font-weight: bold;
    text-decoration: underline;
    margin-top: 12px;
    margin-left: 12px;
`;

export const Label = styled.label`
`;

export const TextArea = styled.textarea`
    display: block;
    margin-top: 12px;
    resize: none;
    width: 100%;
    height: 180px;
    font: inherit;
    padding: 12px;
    border-radius: 12px;
    border: var(--border);
    outline: none;
`;

export const ButtonContainer = styled.div`
    margin-top: 18px;
`;


export const Submit = styled.button`
    width: 100px;
    border: var(--border);
    background-color: ${props => props.disabled ? 'var(--border-color)' : props.color};
    border-radius: 24px;
    padding: 12px;
    text-align: center;
    color: ${props => !props.disabled && 'var(--white)'};
    font: inherit;
    outline: none;
    cursor: ${props => !props.disabled && 'pointer'};
    margin-right: 12px;
`;

export const Close = styled(DownloadResume)`
    border: none;
    background-color: var(--white);
    margin: 0;
    font: inherit;
    outline: none;
    cursor: pointer;
`;

export const SuccessMessge = styled.div`
    ${verticalAlign};
    img {
        margin-right: 12px;
    }
`;