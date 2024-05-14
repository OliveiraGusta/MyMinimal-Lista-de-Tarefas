import { useState } from 'react';

import { Container, FormTitle, ProfileImage, PreviewCircleColor, ContainerCircles, ContainerForm, FormInputs, InputField } from "./styles";

function FormHome(props) {
  const [name, setName] = useState("");
  const [github, setGithub] = useState("");

  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [mainColor, setMainColor] = useState("#363636");

  return (
    <Container>
      <form onSubmit={console.log(name)}>

        <FormTitle>{props.title}</FormTitle>
        <ContainerForm>
          {props.title == 'Cores' ?
            <ContainerCircles>
              <PreviewCircleColor/>
              <PreviewCircleColor/>
            </ContainerCircles>
            :
            <ProfileImage src='https://github.com/OliveiraGusta.png' alt='Foto de Perfil do GitHub' />
          }
          <FormInputs>
            <InputField>
              {props.title == 'Cores' ?
                <input type="text" placeholder={mainColor}
                onChange={(e) => { setMainColor(e.target.value) }} />
                :
                <input type="text" placeholder="Seu nome"
                onChange={(e) => { setName(e.target.value) }} />
              }
            </InputField>

            <InputField>
              {props.title == 'Cores' ?
                <input type="text" placeholder={backgroundColor}
                  onChange={(e) => { setBackgroundColor(e.target.value) }} />
                :
                <input type="text" placeholder="github.com/"
                  onChange={(e) => { setGithub(e.target.value) }} />
              }
            </InputField>

            {props.title == 'Cores' ?
              <div><p>Claro Escuro</p></div>
              :
              <p>Caso não tenha uma conta Github apenas deixe em branco </p>
            }

          </FormInputs>
        </ContainerForm>
      </form>
    </Container>
  )
}

export default FormHome
