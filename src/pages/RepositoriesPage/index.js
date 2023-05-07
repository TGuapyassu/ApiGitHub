import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getLangsFrom, getRepos, getUser } from "../../services/api"
import Filter from "./Filter"
import Profile from "./Profile"
import Repositories from "./Repositories"
import { Container, Loading, Main, Sidebar, Button } from "./styles"
import { MdOutlineArrowBack } from 'react-icons/md';

const RepositoriesPage = () => {
    const { login } = useParams()
    const [user, setUser] = useState()
    const [repositories, setRepositories] = useState()
    const [languages, setLanguages] = useState()
    const [currentLanguage, setCurrentLanguage] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            const [userResponse, repositoriesResponse] = await Promise.all([
                getUser(login),
                getRepos(login)
            ])
            setUser(userResponse.data)
            setRepositories(repositoriesResponse.data)
            setLanguages(getLangsFrom(repositoriesResponse.data))

            setLoading(false)
        }

        loadData();
    })

    const onFilterClick = (language) => {
        setCurrentLanguage(language)
    }

    if (loading) {
        return <Loading >Carregando...</Loading>
    }

    return (
        <Container>
            <Sidebar>
                <Button to={`/`}>
                    <MdOutlineArrowBack size={42} />
                </Button>
                <Profile user={user} />
                <Filter
                    languages={languages}
                    currentLanguage={currentLanguage}
                    onClick={onFilterClick}
                />
            </Sidebar>
            <Main>
                <Repositories
                    repositories={repositories}
                    currentLanguage={currentLanguage}
                />
            </Main>
        </Container>
    )
}

export default RepositoriesPage