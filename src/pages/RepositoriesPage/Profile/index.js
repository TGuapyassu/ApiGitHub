import { Avatar, Container, Data, Header, Inner, Login, Name } from "./style"
import { MdGroup, MdLocationCity, MdLink, MdWork } from 'react-icons/md'

const Profile = ({ user }) => {
    return (
        <Container>
            <Header>
                <Avatar src={user.avatar_url} />
                <Login>{user.login}</Login>
                <Name>{user.name}</Name>
            </Header>
            <Inner>
                <Data>
                    <MdGroup size={20} />
                    {user.following}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;{user.followers}&nbsp;<i>seguindo</i>
                </Data>
                {user.company && (
                    <Data>
                        <MdWork size={20} /> {user.company}
                    </Data>
                )}
                {user.location && (
                    <Data>
                        <MdLocationCity size={20} /> {user.location}
                    </Data>
                )}
                {user.blog && (
                    <Data>
                        <MdLink size={20} />
                        <a href={`\\${user.blog}`}>{user.blog}</a>
                    </Data>
                )}
            </Inner>
        </Container>
    )
}

export default Profile