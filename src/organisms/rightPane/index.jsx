import { Container, SkillItem } from './styled';
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
        </Container>
    )
};

export default RightPane;
