import { useState } from 'react';

import { Container, FormTitle, ProfileImage, PreviewCircleColor, ContainerCircles, SubTitleInput, ContainerForm, FormInputs, InputField, ResetColorsButton } from "./styles";

function FormHome(props) {
  const [name, setName] = useState("");
  const [github, setGithub] = useState("");
  const [photoGithub, setPhotoGithub] = useState("./src/assets/images/logos/person-icon.png");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [mainColor, setMainColor] = useState("#363636");


  return (
    <Container>
      <form onSubmit={console.log(name)}>

        <FormTitle>{props.title}</FormTitle>
        <ContainerForm>
          {props.title == 'Cores' ?
            <ContainerCircles>
              <PreviewCircleColor color={mainColor} border={backgroundColor}/>
              <PreviewCircleColor color={backgroundColor} border={mainColor}/>
            </ContainerCircles>
            :
            <ProfileImage src={photoGithub} onError="./src/assets/images/logos/person-icon.png"
            alt='Foto de Perfil do GitHub' />
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
                  onChange={(e) => { setGithub(e.target.value)
                    setPhotoGithub(`https://github.com/${github}.png`)
                  }} />
              }
            </InputField>

            {props.title == 'Cores' ?
              <SubTitleInput>
                <ResetColorsButton onClick={console.log("Reseto as cores Claro")}>Claro</ResetColorsButton>
                <ResetColorsButton onClick={console.log("Reseto as cores Escuro")}>Escuro</ResetColorsButton>
              </SubTitleInput>
              :
              <SubTitleInput>Caso não tenha uma conta Github apenas deixe em branco </SubTitleInput>
            }

          </FormInputs>
        </ContainerForm>
      </form>
    </Container>
  )
}

export default FormHome
