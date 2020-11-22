import { useState } from 'react';

import { Card } from '../../styles/styled';
import { FlipBookCover } from './styled';
import contents from '../../contents';
import Navigation from '../navigation';


const PageFlip = () => {
    const [selectedNav, setSelectedNav] = useState(contents.navigation[0].id);
    const handleNavOnClick = (e) => setSelectedNav(e.target.id);

    return (
        <Card>
            <Navigation selected={selectedNav} onClick={handleNavOnClick} />
            <FlipBookCover />
        </Card>
    )
}

export default PageFlip;
