import { Card, VerticalAlign } from '../../styles/common';
import contents from '../../contents';
import ContactMe from '../contactMe';
import { Container, FeedHeading, FeedBody } from './styled';
import AboutMeSvg from '../../assets/svgs/aboutMe.svg';
import ExperienceSvg from '../../assets/svgs/experience.svg';
import SapientLogo from '../../assets/images/sapient.png';
import { createMarkup } from '../../utils/appUtils';
import ReadMore from '../../molecules/readMore';
import JobSummary from '../../molecules/jobSummary';


const ProfileFeed = () => {

    return (
        <Container>
            <Card>
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
                <ReadMore className="specialisation_summary" />
            </Card>
            <Card>
                <VerticalAlign>
                    <img src={ExperienceSvg} alt="experience" />
                    <FeedHeading style={{ textAlign: 'left' }}>
                        Professional Experience
                    </FeedHeading>
                </VerticalAlign>
                <JobSummary src={SapientLogo} />
            </Card>
        </Container>
    )
}

export default ProfileFeed;
