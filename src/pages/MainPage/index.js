import { MdSearch } from 'react-icons/md';
import { Container, Logo, Title, Form, Input, Button } from './styles';
import githubLogo from '../../assets/imgs/github-logo.svg';
import { useState } from 'react';


const MainPage = () => {
    const [login, setLogin] = useState('');
    return (
        <Container>
            <Logo src={githubLogo} alt="API Github" />
            <Title>API Github</Title>
            <Form>
                <Input placeholder="usuário"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)} />
                <Button to={`/${login}/repositories`}>
                    <MdSearch size={42} />
                </Button>
            </Form>
        </Container>
    )
};

export default MainPage;
