import { MdSearch } from 'react-icons/md';
import { Container, Logo, Title, Form, Input, Button } from './styles';
import githubLogo from '../../assets/imgs/github-logo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const [login, setLogin] = useState('');
    const ENTER_KEY = 13
    const navigate = useNavigate();

    const onkeydown = (e) => {
        if (e.which === ENTER_KEY) {
            navigate(`/${login}/repositories`)
        }
    }

    return (
        <Container>
            <Logo src={githubLogo} alt="API Github" />
            <Title>API Github</Title>
            <Form>
                <Input placeholder="usuário"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    onKeyDown={onkeydown}
                />
                <Button to={`/${login}/repositories`}>
                    <MdSearch size={42} />
                </Button>
            </Form>
        </Container>
    )
};

export default MainPage;
