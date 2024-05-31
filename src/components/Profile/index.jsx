import { Container, ProfileInfos, ProfileImage } from "./styles"
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom"

const name = "Gustavo Oliveira"
const githubUsername = "OliveiraGusta"
const imageGithub = `https://github.com/${githubUsername}.png`


function Profile() {
    return (
        <Container>
            <ProfileImage src={imageGithub} alt={`Foto de ${githubUsername} usada no seu perfil do GitHub `} />
            <ProfileInfos>
                <p>{name}</p>
                <Link to={`https://github.com/${githubUsername}`} target="_blank">{`github.com/${githubUsername}`}</Link>
                <Link to="/home"><SettingsIcon /></Link>
            </ProfileInfos>
        </Container>
    )
}

export default Profile
