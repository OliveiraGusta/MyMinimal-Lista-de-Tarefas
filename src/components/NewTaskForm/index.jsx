import {FormContainer, Titulo, InputField, SubInputFields, ButtonNewTask} from './styles'
function NewTaskForm(){

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviado')
      };
    
    return (
    <FormContainer onSubmit={handleSubmit}>
        <Titulo>Nova Tarefa</Titulo>
        <InputField>
            <SubInputFields>
                <input type="text" placeholder="Titulo" />
            </SubInputFields>
            <SubInputFields> 
                <select value="" >
                    <option value="" disabled>
                        Categoria
                    </option>
                </select>
                <input type="datetime-local"/>
            </SubInputFields>
        </InputField>
        <ButtonNewTask type="submit">Criar Tarefa</ButtonNewTask>
    </FormContainer>
  )
}

export default NewTaskForm
