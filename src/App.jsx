import { useState } from 'react';
import Title from './components/Title';
import FormHome from './components/FormHome';
import { ContainerHome, AppStyle} from './styles/styles.jsx';

function App() {
    const [todos, setTodos] = useState([
      {
        id:1,
        text: "criar funcionalidade x no sistema",
        category: "Trabalho",
        date: "14-05-2024",
        isCompleted: false,
      },
      {
        id:2,
        text: "Ir pra academia",
        category: "Pessoal",
        date: "12-05-2024",
        isCompleted: false,
      },
      {
        id:3,
        text: "Estudar React",
        category: "Estudos",
        date: "13-05-2024",
        isCompleted: false,
      },
    ]);
  return (
    <AppStyle>
     <Title/>
     <ContainerHome>
      <FormHome title={'Cores'}/>
      <FormHome title={'Perfil'}/>
     </ContainerHome>
    </AppStyle>
  )
}

export default App
