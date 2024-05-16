import Title from '../../components/Title';
import FormHome from '../../components/FormHome';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { Link } from 'react-router-dom';
import { Container, ContainerHome, ContainerForm, ButtonStart } from './styles';

function Home() {
  return (
    <Container>
    <ContainerHome>
        <Title></Title>
        <ContainerForm>
          <FormHome title={'Cores'} />
          <FormHome title={'Perfil'} />
        </ContainerForm>
        <LanguageSwitcher title={'Idioma'} />
        <Link to='/dashboard'><ButtonStart>Começar</ButtonStart></Link>
      </ContainerHome>
      </Container>
  )
}

export default Home
