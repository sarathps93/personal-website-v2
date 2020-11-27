import { useState } from 'react';

import { Card } from '../../styles/styled';
import contents from '../../contents';
import Navigation from '../navigation';


const ProfileFeed = () => {
    const [selectedNav, setSelectedNav] = useState(contents.navigation[0].id);
    const handleNavOnClick = (e) => setSelectedNav(e.target.id);

    return (
        <Card>
            <Navigation selected={selectedNav} onClick={handleNavOnClick} />
        </Card>
    )
}

export default ProfileFeed;
