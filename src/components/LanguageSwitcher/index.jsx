import { ContainerLanguageSwitcher, LanguagueCircle, TitleLanguageSwitcher } from "./styles" 
function LanguageSwitcher(props) {
    return (
      <ContainerLanguageSwitcher>
        <TitleLanguageSwitcher>{props.title}</TitleLanguageSwitcher>
        <div>
        <LanguagueCircle src="../src/assets/images/logos/BRAZIL-Square.png" alt="Bandeira Brasil"/>
        <LanguagueCircle src="./src/assets/images/logos/USA-Square.png" alt="Bandeira Estados Unidos"/>
        </div>
      </ContainerLanguageSwitcher>
    )
  }
  export default LanguageSwitcher