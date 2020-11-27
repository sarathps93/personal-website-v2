import { useState } from 'react';

import { Card } from '../../styles/common';
import contents from '../../contents';
import ContactMe from '../contactMe';
import { Container } from './styled';


const ProfileFeed = () => {
    const [selectedNav, setSelectedNav] = useState(contents.navigation[0].id);
    const handleNavOnClick = (e) => setSelectedNav(e.target.id);

    return (
        <Container>
            <Card>
                {/* <Navigation selected={selectedNav} onClick={handleNavOnClick} /> */}
                <ContactMe />
            </Card>
        </Container>
    )
}

export default ProfileFeed;
