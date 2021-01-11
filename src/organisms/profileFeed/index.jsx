import { Card, VerticalAlign, Hr } from '../../styles/common';
import contents from '../../contents';
import ContactMe from '../contactMe';
import {
    Container,
    FeedHeading,
    FeedBody,
    ProjectContainer,
    ProjectTitle,
    ProjectDescription,
    SeeProject,
    ProjectBlock
} from './styled';
import AboutMeSvg from '../../assets/svgs/aboutMe.svg';
import ExperienceSvg from '../../assets/svgs/experience.svg';
import EducationLogo from '../../assets/svgs/education.svg';
import ProjectLogo from '../../assets/svgs/project.svg';
import FolderLogo from '../../assets/svgs/folder.svg';
import { createMarkup, safeAnchorInNewTab } from '../../utils/appUtils';
import ReadMore from '../../molecules/readMore';
import InstitutionDetails from '../../molecules/institution-details';


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
                <ReadMore className="readmore-aboutme" />
            </Card>
            <Card>
                <VerticalAlign>
                    <img src={ExperienceSvg} alt="experience" />
                    <FeedHeading style={{ textAlign: 'left' }}>
                        Professional Experience
                    </FeedHeading>
                </VerticalAlign>
                <InstitutionDetails content={contents.experience}/>
            </Card>
            <Card>
                <VerticalAlign>
                    <img src={ProjectLogo} alt="projects" />
                    <FeedHeading style={{ textAlign: 'left' }}>
                        Personal / Community projects
                    </FeedHeading>
                </VerticalAlign>
                <ProjectContainer>
                {contents.projects.map(project => (
                    <ProjectBlock key={project.title}>
                        <ProjectTitle>
                            <img src={FolderLogo} alt="folder" />
                            <span>{project.title}</span>
                        </ProjectTitle>
                        <ProjectDescription>{project.description}</ProjectDescription>
                        {!!project.link && (
                            <SeeProject
                                href={project.link}
                                {...safeAnchorInNewTab}
                            >
                                See Project
                            </SeeProject>
                        )}
                        <Hr />
                    </ProjectBlock>
                ))}
                </ProjectContainer>   
            </Card>
            <Card>
                <VerticalAlign>
                    <img src={EducationLogo} alt="education" />
                    <FeedHeading style={{ textAlign: 'left' }}>
                        Education
                    </FeedHeading>
                </VerticalAlign>
                <InstitutionDetails content={contents.education}/>
            </Card>
        </Container>
    )
}

export default ProfileFeed;
