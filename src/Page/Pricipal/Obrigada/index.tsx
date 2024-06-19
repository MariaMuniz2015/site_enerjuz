import {Container, Texto, TextoA} from "./style";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";
export const Obrigada: React.FC = () => {

  return(
 <Container>
  <TextoA>
    Obrigada!  </TextoA>

    <Texto>
    Responderemos sua mensagem o mais rápido possível!
  </Texto>
  <Link to="/contato">
   <ArrowBackIosNewIcon color="warning"/>Contato</Link>
 </Container>

  
  );
  }