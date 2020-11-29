import React, { useState } from 'react';
import { WriteSomethingButton, DownloadResume } from './styled';
import WritePostSvg from '../../assets/svgs/writepost.svg';

import Portal from '../../molecules/portal';
import ContactMeForm from './ContactMeForm';
import { safeAnchorInNewTab } from '../../utils/appUtils';

const ContactMe = () => {
    const [renderPortal, setRenderPortal] = useState(false);

    return (
        <React.Fragment>
            <WriteSomethingButton onClick={() => setRenderPortal(true)}>
                <img src={WritePostSvg} alt="Write a post"/>
                <span>Write a message for me</span>
            </WriteSomethingButton>
            {renderPortal && (
                <Portal setPortal={setRenderPortal}>
                    <ContactMeForm setPortal={setRenderPortal} />                       
                </Portal>
            )}
            <DownloadResume 
                href="https://drive.google.com/uc?export=download&id=1_F8vmY49-M82hFgzyQuC4Jzv4GUipYtd"
                {...safeAnchorInNewTab}
            >
                Download my Resume
            </DownloadResume>
        </React.Fragment>
    )
};

export default ContactMe;
