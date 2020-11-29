import { useEffect, useState } from 'react';
import { ReadMoreButton } from './styled';

const ReadMore = ({ className }) => {
    const [renderItems, setRenderItems] = useState(false);

    const onReadMoreClick = () => {
        setRenderItems(true);
        document.querySelector(`.${className}`).style.display = 'block';
    }
    useEffect(() => {
        document.querySelector(`.${className}`).style.display = 'none';
    }, []);

    return !renderItems && (
        <ReadMoreButton onClick={onReadMoreClick}>
            ...read more
        </ReadMoreButton>
    )
};

export default ReadMore;
