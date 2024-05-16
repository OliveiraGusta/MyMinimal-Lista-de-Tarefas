import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { Container, FormTitle, ProfileImage, PreviewCircleColor, ContainerCircles, SubTitleInput, ContainerForm, FormInputs, InputField, ResetColorsButton } from "./styles";

function FormHome(props) {
  const [name, setName] = useState("");
  const [github, setGithub] = useState("");
  const [photoGithub, setPhotoGithub] = useState("./src/assets/images/logos/person-icon.png");

  const { theme, updateTheme } = useContext(ThemeContext);
  const { primary, background } = theme.colors;

  const handleSetLight = () => {
    event.preventDefault();
    updateTheme({ primary: '#363636', background: '#FFFFFF' });
    };

  const handleSetDark = () => {
    event.preventDefault();
    updateTheme({ primary: '#FFFFFF', background: '#363636' });
  };

  const handleColorChange = (e, colorType) => {
    const newColor = e.target.value;
    updateTheme({ [colorType]: newColor });
  };

  return (
    <Container>
      <form onSubmit={console.log(name)}>
        <FormTitle>{props.title}</FormTitle>
        <ContainerForm>
          {props.title == 'Cores' ?
            <ContainerCircles>
              <PreviewCircleColor color={primary} border={background}/>
              <PreviewCircleColor color={background} border={primary}/>
            </ContainerCircles>
            :
            <ProfileImage src={photoGithub} alt='Foto de Perfil do GitHub' />
          }
          <FormInputs>
            <InputField>
              {props.title == 'Cores' ?
                <input type="text" value={primary} placeholder="Cor principal"
               onChange={(e) => handleColorChange(e, 'primary')} />
                :
                <input type="text" placeholder="Seu nome"
                onChange={(e) => { setName(e.target.value) }} />
              }
            </InputField>

            <InputField>
              {props.title == 'Cores' ?
                <input type="text" value={background} placeholder="Cor de fundo"
                onChange={(e) => handleColorChange(e, 'background')} />
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
