import { useState } from 'react';

import { Card, VerticalAlign } from '../../styles/common';
import contents from '../../contents';
import ContactMe from '../contactMe';
import { Container, FeedHeading, FeedBody } from './styled';
import AboutMeSvg from '../../assets/svgs/aboutMe.svg';
import { createMarkup } from '../../utils/appUtils';


const ProfileFeed = () => {
    const [selectedNav, setSelectedNav] = useState(contents.navigation[0].id);
    const handleNavOnClick = (e) => setSelectedNav(e.target.id);

    return (
        <Container>
            <Card>
                {/* <Navigation selected={selectedNav} onClick={handleNavOnClick} /> */}
                <ContactMe />
            </Card>
            <Card>
                <VerticalAlign>
                <img src={AboutMeSvg} alt="aboutMe" />
                <FeedHeading style={{ textAlign: 'left' }}>
                    About Me
                </FeedHeading>
                </VerticalAlign>
                <FeedBody dangerouslySetInnerHTML={createMarkup(contents.aboutMe)} />
            </Card>
            <Card>
                <VerticalAlign>
                <img src={AboutMeSvg} alt="aboutMe" />
                <FeedHeading style={{ textAlign: 'left' }}>
                    About Me
                </FeedHeading>
                </VerticalAlign>
                <FeedBody dangerouslySetInnerHTML={createMarkup(contents.aboutMe)} />
            </Card>
            <Card>
                <VerticalAlign>
                <img src={AboutMeSvg} alt="aboutMe" />
                <FeedHeading style={{ textAlign: 'left' }}>
                    About Me
                </FeedHeading>
                </VerticalAlign>
                <FeedBody dangerouslySetInnerHTML={createMarkup(contents.aboutMe)} />
            </Card>
        </Container>
    )
}

export default ProfileFeed;
