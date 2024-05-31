import { Container, Options, List } from "./styles"
import Profile from  '../../components/Profile';
import NewTaskForm from  '../../components/NewTaskForm';

function ToDoList() {
  return (
    <Container>
      <Options>
        <Profile/>
          <NewTaskForm/>
      </Options>
      <List>
        LISTA
      </List>
    </Container>
  )
}

export default ToDoList