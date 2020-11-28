import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { applyPortalStyles } from '../../utils/appUtils';

const Portal = ({ children, setPortal }) => {
    const el = document.createElement('div');

    const preventScroll = (e) => e.preventDefault();

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; 
  
    window.onscroll = () =>  { 
        window.scrollTo(scrollLeft, scrollTop); 
    };

    const toggleOffPortal = () => setPortal(false);

    useEffect(() => {
        document.body.appendChild(el);
        applyPortalStyles(el);
        el.addEventListener('click', toggleOffPortal);
        return () => {
            el.removeEventListener('click', toggleOffPortal);
            document.body.removeChild(el);
            document.body.removeEventListener('scroll', preventScroll);
        }
    }, [el]);

    return createPortal(children, el);
};

export default Portal;