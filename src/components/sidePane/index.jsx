import { Container, SkillItem } from './styled';
import { Card, SubHeading, FlexContainer, GridContainer3X3, StyledAnchor } from '../../styles/styled';
import contents from '../../contents';

const SidePane = () => {
    return (
        <Container>
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

export default SidePane;