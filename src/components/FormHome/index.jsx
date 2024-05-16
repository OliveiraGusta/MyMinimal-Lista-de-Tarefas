import { useState } from 'react';
import { theme }  from "../../styles/theme";

import { Container, FormTitle, ProfileImage, PreviewCircleColor, ContainerCircles, SubTitleInput, ContainerForm, FormInputs, InputField, ResetColorsButton } from "./styles";

function FormHome(props) {
  const [name, setName] = useState("");
  const [github, setGithub] = useState("");
  const [photoGithub, setPhotoGithub] = useState("./src/assets/images/logos/person-icon.png");

  const [backgroundColor, setBackgroundColor] = useState(theme.colors.background);
  const [mainColor, setMainColor] = useState(theme.colors.primary);

  const handleSetLight = () => {
    event.preventDefault();
    setMainColor('#363636');
    setBackgroundColor('#FFFFFF');
    };
  const handleSetDark = () => {
    event.preventDefault();
    setMainColor('#FFFFFF');
    setBackgroundColor('#363636');
  };

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
            <ProfileImage src={photoGithub} alt='Foto de Perfil do GitHub' />
          }
          <FormInputs>
            <InputField>
              {props.title == 'Cores' ?
                <input type="text" value={mainColor} placeholder="Cor principal"
                onChange={(e) => { setMainColor(e.target.value) }} />
                :
                <input type="text" placeholder="Seu nome"
                onChange={(e) => { setName(e.target.value) }} />
              }
            </InputField>

            <InputField>
              {props.title == 'Cores' ?
                <input type="text" value={backgroundColor} placeholder="Cor de fundo"
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
                <ResetColorsButton onClick={handleSetLight}>Claro</ResetColorsButton>
                <ResetColorsButton onClick={handleSetDark}>Escuro</ResetColorsButton>
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
