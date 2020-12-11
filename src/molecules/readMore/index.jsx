import { useEffect, useState } from 'react';
import { ReadMoreButton } from './styled';

const ReadMore = ({ className }) => {
    const [renderItems, setRenderItems] = useState(false);

    const onReadMoreClick = () => {
        setRenderItems(true);
        document.querySelector(`.${className}`).style.display = 'block';
    }
    useEffect(() => {
        if(className) {
            document.querySelector(`.${className}`).style.display = 'none';
        }       
    }, []);
    const shouldRender = className && !renderItems;
    return shouldRender ? (
        <ReadMoreButton onClick={onReadMoreClick}>
            ...read more
        </ReadMoreButton>
    ) : null;
};

export default ReadMore;
