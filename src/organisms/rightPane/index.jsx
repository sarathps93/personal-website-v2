import {
    Container,
    SkillItem
} from './styled';
import { Card, SubHeading, FlexContainer, StyledAnchor } from '../../styles/common';
import contents from '../../contents';

const RightPane = () => {
    return (
        <Container className="sidepane_container">
            <Card>
                <SubHeading>Primary Skills</SubHeading>
                <FlexContainer>
                {contents.primarySkills.map(skill=> (
                    <SkillItem key={skill}>{skill}</SkillItem>
                ))}
                </FlexContainer>   
            </Card>
            <Card>
                <SubHeading>Open source contributions</SubHeading>
                <FlexContainer>
                {contents.openSourceContributions.map(osc => (
                    <StyledAnchor key={osc.text} href={osc.link}>
                        {osc.text}
                    </StyledAnchor>
                ))}
                </FlexContainer>   
            </Card>
            <Card>
                <SubHeading>Worked with</SubHeading>
                <FlexContainer style={{ justifyContent: 'space-between' }}>
                    {contents.clients.map(client => (
                        <img key={client.label} src={client.src} alt={client.label} style={{ marginBottom: '18px' }} />
                    ))}
                </FlexContainer>   
            </Card>
        </Container>
    )
};

export default RightPane;
