import { Link } from "react-router-dom"
import { ContainerError, ImageError, MsgError, UiError } from "./styles";

const ErrorPage = () => {
  return (
    <ContainerError>
      <UiError>
        <MsgError>
          <p>Esta não é a página da web que você está procurando</p>
          <h2>Error 404 <ErrorIcon /></h2>
          <Link to="/">Volte para o começo</Link>
        </MsgError>
      </UiError>
      <ImageError/>
    </ContainerError>
  )
}

export default ErrorPage
