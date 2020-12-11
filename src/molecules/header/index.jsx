import { Container, Logo, HeaderButton, ButtonContainer } from './styled';

const Header = () => {
    const jumpSections = (e) => {
        window.scrollTo({
            top: e.target.id === 'top' ? 0 : document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
          });
    }
    return (
        <Container>
            <Logo />
            <ButtonContainer>
                <HeaderButton
                    id="top"
                    as="button"
                    onClick={jumpSections}
                >
                    Jump to top
                </HeaderButton>
                <HeaderButton
                    id="bottom"
                    as="button"
                    onClick={jumpSections}
                >
                    Jump to bottom
                    </HeaderButton> 
            </ButtonContainer>     
        </Container>
    )
};

export default Header;
