import { createRef, useLayoutEffect, useState, Fragment } from 'react';
import {
    ContactForm,
    Label,
    TextArea,
    ButtonContainer,
    Submit,
    Close,
    SuccessMessge
} from './styled';
import { StyledInput } from '../../styles/common';
import successSvg from '../../assets/svgs/success.svg';

const ContactMeForm = ({ setPortal }) => {
    const [userInput, setUserInput] = useState({
        name: '',
        contact: '',
        message: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const inputRef = createRef('');
    const stopImmediatePropagation = (e) => e.nativeEvent.stopImmediatePropagation();
    const shouldEnableSubmit = Object.keys(userInput).every(key => !!userInput[key]);

    const handleUserInput = (e) => {
        const modifiedState = { ...userInput, [e.target.id]: e.target.value };
        setUserInput(modifiedState);
    };

    useLayoutEffect(() => {
        setTimeout(() => {
            inputRef.current.focus();
        }, 0);  
    }, [])

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        if(shouldEnableSubmit) {
            setFormSubmitted(true);
        }
    }

    const SubmittedScreen = () => (
        <SuccessMessge>
            <img src={successSvg} alt="success" />
            Thank you for your message. I will get back to you shortly.
        </SuccessMessge>
    );

    return (
        <ContactForm onClick={stopImmediatePropagation} onSubmit={handleMessageSubmit}>
            {formSubmitted ? <SubmittedScreen /> : (
                <Fragment>
                    <Label htmlFor="name">
                        Your name
                        <StyledInput
                            type="text"
                            id="name"
                            ref={inputRef}
                            value={userInput.name}
                            onChange={handleUserInput}
                            autoComplete="off"
                        />
                    </Label>
                    <Label htmlFor="contact">
                        Your email / Phone number
                        <StyledInput
                            type="text"
                            id="contact"
                            value={userInput.contact}
                            onChange={handleUserInput}
                            autoComplete="off"
                        />
                    </Label>
                    <Label htmlFor="message">
                        Your message
                        <TextArea
                            id="message"
                            value={userInput.message}
                            onChange={handleUserInput}
                            autoComplete="off"
                        />
                    </Label>
                </Fragment>
            )}
            <ButtonContainer>
                {!formSubmitted && (
                    <Submit
                        color="#365C7D"
                        disabled={!shouldEnableSubmit}
                        type="submit"
                    >
                        Submit
                    </Submit>
                )}
                <Close
                    as="button"
                    onClick={() => setPortal(false)}
                >
                    Close
                </Close>
            </ButtonContainer>
        </ContactForm>
    )
};

export default ContactMeForm;
