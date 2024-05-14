import { ContainerTitle, TitleHead } from './styles.jsx';

function Title() {
  const language = 'pt-br';

  return (
    <ContainerTitle>
      <TitleHead>My<b>Minimal</b></TitleHead>
    <p>{language == 'pt-br' ? 'Lista de Tarefas' : 'To-do List'}</p>

    
    </ContainerTitle>)
}

export default Title
