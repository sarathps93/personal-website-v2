import contents from '../../contents';
import { StyledUL, StyledLi } from './styled';

const Navigation = (props) => {
    const { selected, onClick } = props;

    return (
        <StyledUL>
            {contents.navigation.map(item => (
                <StyledLi
                    key={item.id}
                    id={item.id}
                    selected={selected === item.id}
                    onClick={onClick}
                >
                    {item.label}
                </StyledLi>
            ))}
        </StyledUL>
    )
};

export default Navigation;