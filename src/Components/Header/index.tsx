import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { Container } from "./style";
import logo from "../Img/logoEnerjuz.jpg";


interface Props {
  acao: boolean;
 
}


export const Header: React.FC<Props> = (props) => {
  return (
  <Container className={props.acao ? 'ativaCor' : ''}>

       <Logo imagem={logo}/>
  <Menu></Menu>

    </Container>
  );
  }
 