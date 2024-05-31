import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Container, FormTitle, ProfileImage, PreviewCircleColor, ContainerCircles, SubTitleInput, ContainerForm, FormInputs, InputField, ResetColorsButton } from "./styles";


function FormHome(props) {
  const [name, setName] = useState("");

  const [githubUsername, setGithubUsername] = useState("");
  const [imageGithub, setImageGithub] = useState("src/assets/images/logos/person-icon.png");
  const fallbackImage = "src/assets/images/logos/person-icon.png";

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

  const handlePhotoGithubChange = (e) => {
    setGithubUsername(e.target.value);
    setImageGithub(`https://github.com/${e.target.value}.png`);
  };

  const handleImageError = () => {
    setImageGithub(fallbackImage);
  };

  return (
    <Container>
      <form>
        <FormTitle>{props.title}</FormTitle>
        <ContainerForm>
          {props.title == 'Cores' ?
            <ContainerCircles>
              <PreviewCircleColor color={primary} border={background}/>
              <PreviewCircleColor color={background} border={primary}/>
            </ContainerCircles>
            :
            <ProfileImage src={imageGithub} alt={`Foto de ${githubUsername} usada no seu perfil do GitHub `} onError={handleImageError}/>
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

                <input type="text" placeholder="Seu usuario do Github"
                  onChange={handlePhotoGithubChange} />
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
