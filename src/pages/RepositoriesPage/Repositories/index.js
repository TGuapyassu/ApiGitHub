import Repository from "./Repository"
import { Container } from "./styles"

const Repositories = ({ repositories, currentLanguage }) => {
    const repos = repositories
        .filter((repository) => currentLanguage === undefined || repository.language === currentLanguage)
        .map((repository) => (
            <Repository key={repository.id} repository={repository} />
        ))
    return (
        <Container>
            {repos}
        </Container>
    )
}

export default Repositories