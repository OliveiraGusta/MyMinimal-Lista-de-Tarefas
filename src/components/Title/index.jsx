import { ContainerTitle, TitleHead, SubTitleHead } from './styles.jsx';

function Title() {
  const language = 'pt-br';

  return (
    <ContainerTitle>
      <TitleHead>My<b>Minimal</b></TitleHead>
      <SubTitleHead>{language == 'pt-br' ? 'Lista de Tarefas' : 'To-do List'}</SubTitleHead>

    
    </ContainerTitle>)
}

export default Title
